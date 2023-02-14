// @TODO: Potentially unsafe for script injection with "dangerouslySetInnerHtml" but works for now
export const markdownLinkToHtml = (text: string): string => {
  return text.replace(/\[(.+?)\]\((.+?)\)/g, '<a href="$2" target="_blank" rel="noreferrer">$1</a>');
};
