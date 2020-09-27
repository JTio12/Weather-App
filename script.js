const apiKey = "api key";


const getDataForCity = city => 
    fetch(
        `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`
        )
        .then((response) => response.json());
      

const createCardHtml = (name, emoji, temp, feelsLike, description) => `
  <div class="card" id="delete">
    <div class="row no-gutters align-items-center">    
      <div class="col-2 h2 pl-1 pt-1 text-center">                
        ${emoji}
      </div>
      <div class="col-10">
        <div class="card-body">
          <div class="row card-title justify-content-between align-items-center mr-3 mb-1">
            <span id="delete" class="close">&times;</span>
            <h4>${name}</h4>
            <h6>${temp}°c, feels like ${feelsLike}°c</h6>
          </div>
          <div class="row">
            <h5 class="card-subtitle text-muted">${description}</h5>
          </div>
        </div>
      </div>
    </div>
  </div>
`;


// emojis object used to find the right emoji from the icon code sent from the api
const emojis = {
    '01d': '☀️',
    '02d': '⛅️',
    '03d': '☁️',
    '04d': '☁️',
    '09d': '🌧',
    '10d': '🌦',
    '11d': '⛈',
    '13d': '❄️',
    '50d': '💨',
    '01n': '☀️',
    '02n': '⛅️',
    '03n': '☁️',
    '04n': '☁️',
    '09n': '🌧',
    '10n': '🌦',
    '11n': '⛈',
    '13n': '❄️',
    '50n': '💨',
  };

  // selecting all the things needed
const searchButton = document.querySelector('#searchbutton');
const citySearch = document.querySelector('#citysearch');
const weatherContainer = document.querySelector('#weather-container');
const span = document.querySelector('.close');
const closeCard = document.querySelector('#delete');

// event listener for a click event on the "Go!" button
searchButton.addEventListener('click', () => {
  // get the city from the input field
  const city = citySearch.value;

  // get the weather data for the city
  getDataForCity(city)
    .then(data => {
      // get the data we need for our html from the response
      const name = data.name;
      const emoji = emojis[data.weather[0].icon];
      const temp = Math.round(data.main.temp -273.15);
      const feelsLike = Math.round(data.main.feels_like -273.15);
      const description = data.weather[0].description;

      // create the card html
      const cardHtml = createCardHtml(name, emoji, temp, feelsLike, description);

      // render!
      weatherContainer.innerHTML = cardHtml;

    });


    // When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {  
  if (event.target == closeCard) {  
      closeCard.style.display = "none"; 
  } 
} 
   


});


 
 
 
 
 
 



  
  
  
  
  
  
  
  
  
  
  
  
  
  
  






