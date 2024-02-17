function fetchWeather() {
    const locationInput = document.getElementById("locationInput").value;
    const apiKey = "fd4fb8f85478b8baf78f2e73cac7dc26"; 
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${locationInput}&appid=${apiKey}&units=metric`;
  
    fetch(apiUrl)
      .then(response => response.json())
      .then(data => {
        const weatherInfo = document.getElementById("weatherInfo");
        weatherInfo.innerHTML = `
          <p>Location: ${data.name}</p>
          <p>Weather: ${data.weather[0].main}</p>
          <p>Description: ${data.weather[0].description}</p>
          <p>Temperature: ${data.main.temp} °C</p>
          <p>Humidity: ${data.main.humidity}%</p>
          <p>Wind Speed: ${data.wind.speed} m/s</p>
        `;
      })
      .catch(error => {
        console.error('Error fetching weather data:', error);
        const weatherInfo = document.getElementById("weatherInfo");
        weatherInfo.innerHTML = "Failed to fetch weather data. Please try again later.";
      });
  }
  