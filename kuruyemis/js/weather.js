const sicaklik = document.querySelector("#sicaklik");
const havadurumu = document.querySelector("#havadurumu");



fetch("https://api.openweathermap.org/data/2.5/weather?q=Ankara&appid=b99cb45b5fa30fdb328f25f171944bcb&units=metric&lang=tr")
    .then(res => res.json())
    .then(displayResults)
    .catch(err => console.log(err))


function displayResults(result) {
    sicaklik.textContent = `${Math.floor(result.main.temp)} °c`
    havadurumu.textContent = result.weather[0].description
    console.log(result.weather[0].description);
}







//form-inline






