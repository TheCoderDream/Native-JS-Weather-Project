
const ui = new UI();
const storage = new Storage_service();
const weatherLocation = storage.getLocationData();
const weather = new Weather_service (weatherLocation.city, weatherLocation.state);




weather.getWeather()
    .then(data => {
      const weatherData = data.current_observation;
        ui.fillFields(weatherData);
    })
    .catch(err => {console.log(err)});

document.getElementById('w-change-btn').addEventListener('click', () => {
  const city = document.getElementById('city').value;
  const state = document.getElementById('state').value ? document.getElementById('state').value : ' ';

  console.log(city, state);
  weather.changeLocation(city, state);

  storage.setLocationData(city, state);

  getWeather();

  $('#locModal').modal('hide');
});
function getWeather() {
    weather.getWeather()
        .then(data => {
            const weatherData = data.current_observation;
            ui.fillFields(weatherData);
        })
        .catch(err => {console.log(err)});
}