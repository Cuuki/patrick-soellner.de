// @TODO: #11 - include error handling
import { IS_PRODUCTION } from './environment';

/**
 * Fetch content from Contentful for static site generation at build time
 * This function should only be used for build time fetching, otherwise errors need to be handled on the client
 * See Contentful error codes here: https://www.contentful.com/developers/docs/references/graphql/#/reference/graphql-errors
 *
 * @param {string} query - GraphQL query string for fetch call
 * @param {Object} variables - Optional GraphQL variables for query
 * @throws {Error} Static generation is interrupted if fetch failed, response was unsuccessful or data is empty
 */
export const fetchStaticContent = async <
  TData extends Record<string, unknown>,
  TVariables extends Record<string, string> = Record<string, string>,
>(
  // @TODO: #10 - include typed graphql queries
  query: string,
  variables?: TVariables,
): Promise<TData> => {
  const response = await fetch(
    `https://graphql.contentful.com/content/v1/spaces/${process.env.CONTENTFUL_SPACE_ID}`,
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${
          IS_PRODUCTION
            ? process.env.CONTENTFUL_ACCESS_TOKEN
            : process.env.CONTENTFUL_PREVIEW_ACCESS_TOKEN
        }`,
      },
      body: JSON.stringify({ query, variables }),
    },
  );
  let responseAsJson: {
    data: TData | null;
    errors?: { message: string }[];
  } = { data: null, errors: [] };

  try {
    responseAsJson = await response.json();
  } catch (e) {
    throw new Error(`${response.status}: ${response.statusText}`);
  }

  const { data, errors } = responseAsJson;

  if (errors?.length) {
    const errorsMultiLine = errors.map((error) => error.message).join('\n');

    throw new Error(`The following query errors were thrown:\n${errorsMultiLine}`);
  }

  if (!data || Object.values(data).some((entry) => !entry)) {
    throw new Error(`Missing entry data for response: ${JSON.stringify(data)}`);
  }

  return data as TData;
};
