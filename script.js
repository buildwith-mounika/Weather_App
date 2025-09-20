 <script>
    const apikey = "92920d2d6672e58a284902cc4f2db754";
    const apiurl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

    const searchbox = document.querySelector(".search input");
    const searchbtn = document.querySelector(".search button");

    async function checkWeather(city) {
      const response = await fetch(`${apiurl}${city}&appid=${apikey}`);
      var data = await response.json();
      console.log(data);

      document.querySelector(".city").innerHTML = data.name;
      document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°C";
      document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
      document.querySelector(".wind").innerHTML = data.wind.speed + " km/h";
    }

    searchbtn.addEventListener("click", () => {
      checkWeather(searchbox.value);
    });

    if(data.weather[0].main === "Rain") {
    document.getElementById("weather-icon").src = "images/rain.png";
} else if(data.weather[0].main === "Clear") {
    document.getElementById("weather-icon").src = "images/sun.png";
}
