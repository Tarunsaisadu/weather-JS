


const city = document.getElementById('city');
const temp = document.getElementById('temp');
const weather = document.getElementById('weather');
const humidity = document.getElementById('humidity');
const pressure = document.getElementById('pressure');
const wind = document.getElementById('wind');
const feelsLike = document.getElementById('feelslike')
 async  function getWeather() {
       try {
        
        const apiKey = "b904a6221f347fa4f5f753fd6fb87a74"
        const cityName = document.getElementById('inputText').value;
        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKey}`);
        const data = await response.json();
        let temperature = data.main.temp;
         city.innerHTML = data.name;
         temp.innerHTML = Math.floor(temperature-273.15)+"<span>℃</span>";
         weather.innerHTML= data.weather[0].description;
         humidity.innerHTML = data.main.humidity+"<span>%</span>";
         pressure.innerHTML= data.main.pressure+"<span>hPa</span>";
         wind.innerHTML= data.wind.speed+"<span>m/s</span>";
            console.log(data);
        
       } catch (error) {
           console.log(error)
       }

    
    
    
    
    
    
    
    
       //  This is to change background 
       if(weather.innerHTML==="scattered clouds"){
        document.body.style.cssText = `
        background: url('https://c4.wallpaperflare.com/wallpaper/887/996/885/drawing-sky-clouds-wallpaper-preview.jpg');
        background-attachment: fixed;
        background-position: center;
        background-repeat: no-repeat !important;
        background-size: cover;
        color: black;
        opacity: 1`;
      }
      else if(weather.innerHTML==="broken clouds" || weather.innerHTML==="few clouds"){
        document.body.style.cssText = `
        background: url('https://thumbs.gfycat.com/WidePowerfulBeauceron-size_restricted.gif');
        background-attachment: fixed;
        background-position: center;
        background-repeat: no-repeat !important;
        background-size: cover;
        color: black;
        opacity: 0.9;
        transition: ease-in 1s;`;
      }
      else if(weather.innerHTML==="clear sky"){
        document.body.style.cssText = `
        background: url('https://i.pinimg.com/originals/af/49/6c/af496c71547e7989a12ad14ade2044c4.gif');
        background-attachment: fixed;
        background-position: center;
        background-repeat: no-repeat !important;
        background-size: cover;
        color: black;
        opacity: 0.9;
        transition: ease-in 1s;`;
      }
      else if(weather.innerHTML==="haze"){
        document.body.style.cssText = `
        background: url('https://wallpaperaccess.com/full/4773448.jpg');
        background-attachment: fixed;
        background-position: center;
        background-repeat: no-repeat !important;
        background-size: cover;
        color: black;
        opacity: 0.9;
        transition: ease-in 1s;`;
        
      }
      else if(weather.innerHTML==="rain" || "light rain"){
        document.body.style.cssText = `
        background: url('https://c.tenor.com/UkXBmkGcpNEAAAAC/rain-raining.gif');
        background-attachment: fixed;
        background-position: center;
        background-repeat: no-repeat !important;
        background-size: cover;
        color: black;
        opacity: 0.9
        transition: ease-in 1s;`;
      }
    
}



