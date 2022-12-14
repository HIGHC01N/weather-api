class Weather {
    constructor(city, country) {
      this.apiKey = '8b4ac0a756f2b5c4027c0f044f5db201';
      this.country = country;
      this.city = city;
      this.units = "metric";
      this.lang = "kr"
    }
    // Fetch Weather from API
    async getWeather() {
      const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${this.city},${this.country}&units=${this.units}&lang=${this.lang}&appid=${this.apiKey}`);
  
      const weatherData = await response.json();
      console.log(weatherData);
      return weatherData;
    }
  
    async getWeatherIcon() {
      const response = await fetch(``)
    }
    
    changeLocation(city, country) {
      this.city = city;
      this.country = country;
    }
  }

