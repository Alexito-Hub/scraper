const cheerio = require('cheerio');
const axios = require('axios');

async function scrapeQuotes(url) {
    const response = await axios.get(url);
    const $ = cheerio.load(response.data);
    const quotes = [];
    
    $('.quote').each((index, element) => {
        const text = $(element).find('.text').text();
        const author = $(element).find('.author').text();
        const tags = $(element).find('.tag').map((i, tag) => $(tag).text()).get();
        quotes.push({ text, author, tags });
        
    });
    
    const result = {
        creator: "zioo",
        status: "success",
        result: quotes,
        
    };
    console.log(result);
}

scrapeQuotes('https://quotes.toscrape.com');