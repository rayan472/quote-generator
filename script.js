const quoteContainer = document.getElementById('quote-container');
const quoteText = document.getElementById('quote');
const authorText = document.getElementById('author');
const twitterBtn = document.getElementById('twitter');
const newQuoteBtn = document.getElementById('new-quote');
const loader = document.getElementById('loader');

function Loading(){
  loader.hidden=false;
  quoteContainer.hidden=true;
}

function hideLoading() {
  loader.hidden = true;
  quoteContainer.hidden = false;
  loader.hidden = true;
}

let apiQuotes = [];

// Show New Quote
const newQuote = async () => {
  try {
    const response = await fetch('https://type.fit/api/quotes');
    apiQuotes = await response.json();
    
    const quote = apiQuotes[Math.floor(Math.random() * apiQuotes.length)];
     console.log(quote,"sdsds")
    authorText.textContent = quote.author || 'Unknown';
    quoteText.textContent = quote.text;

    quoteText.classList.toggle('long-quote', quote.text.length > 120);
     Loading()
     setTimeout(()=> hideLoading(),[500]) 
     
  } catch (error) {
    console.log('Error:', error);
    hideLoading();
  }
};
// Get Quotes From API
const getQuotes = async () => {
  const apiUrl = 'https://type.fit/api/quotes';  
  try {
    const response = await fetch(apiUrl);
    apiQuotes = await response.json();
    console.log(apiQuotes);
    hideLoading();
  } catch (error) {
    console.log('Error:', error);
    hideLoading();
  }
};
// Event Listeners
newQuoteBtn.addEventListener('click', newQuote);

// On load
getQuotes();
Loading();

 
