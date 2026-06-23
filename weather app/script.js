async function getWeather() {
    const city=document.getElementById("city").value;
    const apiKey="f30a1a3fc6c20100f4d8075e5344d543";
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    try{
       const response= await fetch(url);
       const data=await response.json();
       console.log(data);
       const temp=data.main.temp;
       const weather=data.weather[0].main;
       const description = data.weather[0].description;
    const emojis = {
    Clear: "☀️",
    Clouds: "☁️",
    Rain: "🌧️",
    Drizzle: "🌦️",
    Thunderstorm: "⛈️",
    Snow: "❄️",
    Mist: "🌫️",
    Haze: "🌫️",
    Fog: "🌫️"
};

const emoji = emojis[weather] || "🌍";
    document.querySelector("#result").innerHTML=`${emoji} Temperature=${temp}°C | Condition: ${weather} | Description=${description}`;
    
 } catch(error){
    document.querySelector("#result").innerHTML="Error fetching data";
 }
}
document.querySelector("#city").addEventListener("keydown", function(event) {

    if (event.key === "Enter") {
        getWeather();
    }

});