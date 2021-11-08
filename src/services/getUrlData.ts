export async function getUrlData(url: string) {
    const whateverUrl = 'https://api.allorigins.win/get?url=' + encodeURIComponent(url);
    console.log(whateverUrl)
    const response = await fetch(whateverUrl);
    const responseText = (await response.json()).contents
    const parser = new DOMParser();
    return parser.parseFromString(responseText, 'text/html');
}
