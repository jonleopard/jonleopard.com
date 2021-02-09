// This is not being used at the moment. Keeping it here
// for now just in case I switch from contentful.
import remark from 'remark';
import html from 'remark-html';

async function markdownToHtml(markdown) {
  const result = remark().use(html).processSync(markdown);
  return result.toString();
}

export default markdownToHtml;
