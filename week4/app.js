
const input = document.getElementById('cityInput');
const button = document.getElementById('bttn');
const info = document.getElementById('weather-info');

button.addEventListener('click', function(){
    const api = 'd0a8acdd23e7995e921ab1c49957c17d';
    const cityname = input.value;
    if (!cityname){
        alert("Please Enter a City name");
        return;
    }

    var ourRequest = new XMLHttpRequest();
    ourRequest.open('GET', `https://api.openweathermap.org/data/2.5/weather?q=${cityname}&appid=${api}`);

    ourRequest.onload = function() {
        if (ourRequest.status >= 200 && ourRequest.status < 400) {
            var data = JSON.parse(ourRequest.responseText);
            if (data.cod === 200) {
                renderWeather(data);
            }
        } else {
          console.error('HTTP Status Code Error:', ourRequest.status);
        }
      };
      ourRequest.onreadystatechange = function() {
        if (ourRequest.readyState == 4 && ourRequest.status == 200) {
          const errorResponse = JSON.parse(ourRequest.responseText);
          console.error('API-Specific Error:', errorResponse.message);
        }
      };
      ourRequest.onerror = function() {
        console.error('Network Error');
      };

    ourRequest.send();

});

function renderWeather(Data) {
    var temp = (Data.main.temp - 273.15).toFixed(2);
    var HTMLmessage = "<p>The weather in " + Data.name + " is " + Data.weather[0].description +
                      ".</br> The temperature is " + temp + "°C with a wind speed of " +
                      Data.wind.speed + "m/s. <hr></p>";
    info.insertAdjacentHTML('beforeend', HTMLmessage);

}
