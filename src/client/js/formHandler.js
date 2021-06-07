function handleSubmit(event) {
    event.preventDefault()
    const cityName = document.getElementById('city').value;
    const startDate = document.getElementById('start-date').value;
    const endDate = document.getElementById('end-date').value;
    postData('http://localhost:8081/geo', { city: cityName })
        .then(function (res) {
            let geoLocation = {
                city: res.geonames[0].name,
                lat: res.geonames[0].lat,
                lng: res.geonames[0].lng,
            };
            Client.weatherData(geoLocation)
            Client.pictureData(geoLocation)
        })

}
// Async POST
const postData = async (url = '', data = {}) => {
    const response = await fetch(url, {
        method: 'POST',
        credentials: 'same-origin',
        mode: 'cors',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
    });
    try {
        const geoData = await response.json();
        console.log(geoData);
        return geoData;
    }
    catch (error) {
        console.log("error", error);
    }
};
export { handleSubmit }
