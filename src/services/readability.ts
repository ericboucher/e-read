import { isProbablyReaderable, Readability } from '@mozilla/readability';

export function getReadableArticle(document: Document) {
    console.log('isProbableDoc?')
    console.log(isProbablyReaderable(document))
    if (isProbablyReaderable(document)) {
        const article = new Readability(document).parse();
        return article || {title: 'no data'}
      }
    return {title: 'no data'}
}
