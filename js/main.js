
var quotes = [
    {
        text:"Do not take life too seriously. You will not get out alive.",
        author:"--Elbert Hubbard"
    },
    {
        text:"It's not what happens to you, but how you react to it that matters.",
        author:"--Epictetus"
    },
    {
        text:"Resentment is like drinking poison and waiting for your enemies to die.",
        author:"--Nelson Mandela"
    },
    {
        text:"The best revenge is massive success.",
        author:"--Frank Sinatra"
    },
    {
        text:"Do not take life too seriously. You will not get out alive.",
        author:"--Elbert Hubbard"
    },
    {
        
        text:"Resentment is like drinking poison and waiting for your enemies to die.",
        author:"--Nelson Mandela"
    }
];




function generateQuote() {
    var quoteText = document.getElementById('quoteOutput');
    var authorText = document.getElementById('authorOutput');
    
    if (quotes.length === 0) {
        quoteText.innerHTML = "No more quotes";
        authorText.innerHTML = "";
        return;
    }
    
    var index = randomIntFromInterval(0, quotes.length - 1);
    var selectedQuote = quotes[index];
    
    quoteText.innerHTML = selectedQuote.text;
    authorText.innerHTML = selectedQuote.author;
    
    quotes.splice(index, 1); // Remove the selected quote from the array
}

function randomIntFromInterval(min, max) { 
    return Math.floor(Math.random() * (max - min + 1) + min);
}
