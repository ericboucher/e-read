export async function getUrlData(url: string) {
    const response = await fetch(url, {
        method: 'GET',
        // mode: 'cors',
        headers: { 
            "Accept": "text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8",
            "Accept-language": "en-GB,en;q=0.9,en-US;q=0.8,el;q=0.7",
            "Accept-Encoding": "gzip,deflate",
            "cache-control": "max-age=0",
            "upgrade-insecure-requests": "1",
            "user-agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/61.0.3163.100 Safari/537.36"
          }
    });
    const responseText = await response.text()
    console.log(response)
    console.log(responseText)
    const parser = new DOMParser();
    return parser.parseFromString(responseText, 'text/html');
}
