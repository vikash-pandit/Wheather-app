
document.getElementById("getWeatherBtn").addEventListener("click", getWeather);

async function getWeather() {
    const city = document.getElementById('city').value;
    const apiKey = '93ed4c8179261c97eb68';
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    
    try {
        const response = await fetch(url);
        const data = await response.json();
        
        if (data.cod === 200) {
            document.getElementById('weather').innerHTML = `
                <h3>${data.name}, ${data.sys.country}</h3>
                <p>Temperature: ${data.main.temp}°C</p>
                <p>Weather: ${data.weather[0].description}</p>
            `;
        } else {
            document.getElementById('weather').innerHTML = `<p>City not found.</p>`;
        }
    } catch (error) {
        document.getElementById('weather').innerHTML = `<p>Error fetching data.</p>`;
    }
}
// https://home.openweathermap.org/api_keys