class Weather_service {
  constructor(city, state) {
    this.apiKey = '99dfe35fcb7de1ee';
    this.city = city;
    this.state = state;
  }

  async getWeather() {
     const response = await
         fetch(`http://api.wunderground.com/api/${this.apiKey}/conditions/q/${this.state}/${this.city}.json`);

     const responseData = response.json();

     return responseData;
  }

  changeLocation(city, state) {
    this.city = city;
    this.state = state;
  }


}