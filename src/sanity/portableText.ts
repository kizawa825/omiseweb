import { toHTML } from '@portabletext/to-html';

export function sanityPortableText(portabletext) {
  return toHTML(portabletext);
}
