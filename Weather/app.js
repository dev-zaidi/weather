


const button=document.getElementById('search-button');
const input=document.getElementById('city-input');
const card=document.getElementById('cardSection');


const API_KEY='2ff39cc37a7812efe47c1bc2214d0c3a'

async function getData(cityName){
    const fetchData = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${input.value}&appid=${API_KEY}&units=metrics`);
    return await fetchData.json();
}


button.onclick= async ()=>{
    const value=input.value;
    const result= await getData(value);
    console.log(result);
    
    card.innerHTML=`<div id='card' class="card text-center m-3" style="width: 18rem;">
  <div class="card-body">
   
    <h2 class="card-title">${result.name}</h2>
    <img src=${`https://openweathermap.org/img/wn/${result.weather[0].icon}@2x.png`}>
    <p class="card-text"><b>Sky:</b> ${result.weather[0].main}</p>
    <p class="card-text"><b>Temperature:</b> ${result.main.temp}</p>
    <p class="card-text"><b>Feels like: </b> ${result.main.feels_like}</p>
   

    

  </div>
</div>`;
};