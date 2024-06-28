import { useEffect, useState } from 'react'
import './App.css'
import '@fortawesome/fontawesome-free/css/all.min.css';

function App() {
  const [quotes, setQuotes] = useState('');
  const [author, setAuthor] = useState('');
  const [color, setColor] = useState('#333333'); // Default color

  useEffect(() => {
    fetchQuote();
  }, []); // Fetch quote on initial load

  const fetchQuote = () => {
    fetch(
      'https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json'
    )
      .then(response => response.json())
      .then(data => {
        const randomQuote = data.quotes[Math.floor(Math.random() * data.quotes.length)];
        setQuotes(randomQuote.quote);
        setAuthor(randomQuote.author);
        setColor(getRandomColor()); // Set a random color when fetching new quote
      });
  };

  const getRandomColor = () => {
    const colors = [
      '#1abc9c', '#16a085', '#2ecc71', '#27ae60', '#3498db', '#2980b9', '#9b59b6',
      '#8e44ad', '#34495e', '#2c3e50', '#f1c40f', '#f39c12', '#e67e22', '#d35400',
      '#6c5ce7', '#ffeaa7', '#fab1a0', '#ff7675', '#fd79a8', '#fdcb6e', '#e17055',
      '#d63031', '#e84393', '#fdcb6e', '#d63031', '#feca57', '#5f27cd', '#54a0ff',
      '#01a3a4', '#2e86de', '#3c6382', '#0a3d62', '#3c40c6', '#f7d794', '#778beb',
      '#786fa6', '#833471', '#fa983a', '#e58e26', '#e55039', '#f6b93b', '#fa983a'
    ];
     return colors[Math.floor(Math.random() * colors.length)];
    
  };

  const handleNewQuote = () => {
    fetchQuote(); // Fetch a new quote and set random color
  };

  return (
    <div className="flex flex-col justify-center items-center h-screen" style={{ backgroundColor: color }}>
      <div id="quote-box" className="w-96 p-8 shadow-md rounded-lg text-center bg-white mb-8">
     
          
          <h6 id="text" className="text-lg font-bold mb-4" style={{ color: color }}>
          <i className="fas fa-quote-left left-0 top-0 mt-1 ml-2 text-4xl" style={{ color: color }}></i>{"  "}{quotes}
          </h6>
     
        <p id="author" className="text-sm italic text-right pr-4" style={{ color: color }}>
          - {author}
        </p>
        <div className="flex justify-between mt-4">
        <a id="tweet-quote" href="https://twitter.com/intent/tweet" target="_blank" style={{ color: color }} className="focus:outline-none">
            <i className="fab fa-twitter"></i> 
          </a>
          <button id="new-quote" onClick={handleNewQuote} style={{ backgroundColor: color }} className="text-white py-2 px-4 rounded-lg focus:outline-none">
            New Quote
          </button>
        </div>
      </div>
      <div className="text-center text-white">
        <p>by Anum</p>
      </div>
    </div>
  );
}

export default App


