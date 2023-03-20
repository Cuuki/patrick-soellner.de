// @TODO: #11 - include error handling
const logMessage = (message: Error | string, level: 'error' | 'warn' | 'info' = 'error') => {
  switch (level) {
    case 'info':
      console.log(message);
      return;
    case 'warn':
      console.warn(message);
      return;
    case 'error':
    default:
      console.error(message);
      return;
  }
};

// @TODO: #10 - include typed graphql queries
export const fetchContent = async <TData>(query: string): Promise<TData | null> => {
  try {
    const response = await fetch(
      `https://graphql.contentful.com/content/v1/spaces/${process.env.CONTENTFUL_SPACE_ID}`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${process.env.CONTENTFUL_ACCESS_TOKEN}`,
        },
        body: JSON.stringify({ query }),
      },
    );

    if (!response.ok) {
      logMessage(response.statusText);
      return null;
    }

    const { data } = await response.json();

    return data as TData;
  } catch (e: unknown) {
    logMessage(e as Error);
    return null;
  }
};
