
const button = document.getElementById('search-button');
const input = document.getElementById('city-input');
const cardSection = document.getElementById('cardSection');
const API_KEY = '2ff39cc37a7812efe47c1bc2214d0c3a';

async function getData(cityName) {
    const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${API_KEY}&units=metric`);
    return await response.json();
}

button.onclick = async () => {
    const cityName = input.value.trim();
    if (!cityName) {
        alert('Please enter a city name.');
        return;
    }

    try {
        const data = await getData(cityName);

        if (data.cod !== 200) {
            alert('City not found. Please try again.');
            return;
        }

        cardSection.innerHTML = `
            <div class="weather-card">
                <h2>${data.name}</h2>
                <img src="https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png" alt="${data.weather[0].description}">
                <p><b>Sky:</b> ${data.weather[0].main}</p>
                <p><b>Temperature:</b> ${data.main.temp} &#8451;</p>
                <p><b>Feels like:</b> ${data.main.feels_like} &#8451;</p>
                <p><b>Humidity:</b> ${data.main.humidity}%</p>
                <p><b>Wind Speed:</b> ${data.wind.speed} m/s</p>
            </div>
        `;
    } catch (error) {
        console.error('Error fetching data:', error);
        alert('An error occurred. Please try again later.');
    }
};
