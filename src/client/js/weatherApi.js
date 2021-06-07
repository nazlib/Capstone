async function weatherData(geoLocation) {

    const resWeather = await fetch('http://localhost:8081/weather', {
        method: 'POST',
        credentials: 'same-origin',
        mode: 'cors',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(geoLocation),
    });
    try {
        var weatherData = await resWeather.json();
    } catch (err) {
        console.log(err);
    }
    let weatherHtml = '';
    let colors = ['red', 'green', 'yellow', 'blue']
    weatherData.data.forEach((element, index) => {
        weatherHtml += `<div class="col-large-6">
        <div class="weather-${colors[index]}">
            <div class="weather-card-body">
                <div class="card-title">
                    <h2>${element.weather.description}</h2>
                </div>
                <div class="card-content">
                    <h1 id="temperature">${element.temp}</h1>
                    <h6>High => ${element.high_temp} Low => ${element.high_temp} </h6>
                </div>
                <div class="weather-card-icon">
                    <img src="../src/client/assets/${element.weather.icon}.png">
                    <h6>${element.valid_date}</h6>
                </div>
            </div>
        </div>
    </div>`;
    });
    document.getElementById("weather").innerHTML = weatherHtml;
}
export { weatherData }