import { isProbablyReaderable, Readability } from '@mozilla/readability';

export function getReadableArticle(document: Document) {
    console.log('isProbableDoc?')
    console.log(isProbablyReaderable(document))
    if (isProbablyReaderable(document)) {
        try {
            const article = new Readability(document).parse();
            return article || {title: 'no data'}
        } catch (e) {
            console.log('An error occured while parsing.')
            console.log(e)
        }
        
      }
    return {title: 'no data'}
}
