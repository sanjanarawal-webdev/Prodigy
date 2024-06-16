console.log("Weather is good....!")




async function fetchWeather(){
    let city = document.querySelector('#cname').value;
    const url = `https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=${city}`;
const options = {
method: 'GET',
headers: {
    'x-rapidapi-key': 'c0114dba75msh4f75a92a7a96199p15be87jsnc5e09b394265',
    'x-rapidapi-host': 'weather-by-api-ninjas.p.rapidapi.com'
}
};

try {
	const response = await fetch(url, options);

    if(response.status == 400){
        document.querySelector('.weather').style.display='none';
        document.querySelector('.errmsg').style.display='block';
    }

    else{
        document.querySelector('.weather').style.display='block';
        document.querySelector('.errmsg').style.display='none';
        const result = await response.text();
        const obj=JSON.parse(result);
        console.log(obj);
        console.log(result);
        document.querySelector('.temp').innerText=obj.temp +'°c';
        document.querySelector('.humidity').innerText=obj.humidity +'%';
        document.querySelector('.wind').innerText=obj.wind_speed +' km/h';
        let cityC =city.charAt(0).toUpperCase() + city.slice(1);
        document.querySelector('.city').innerText=cityC;
        
        
        let wimg=document.getElementById('wimg');
        
        const weatherImages = {
            'clouds.png': [76, 100],
            'mist.png': [51, 75],
            'drizzle.png': [26, 50],
            'snow.png': [-1, 20],
            'rain.png': [81, 100],
            'clear.png': [0, 25]
        };
        const cloudPct=obj.cloud_pct;
        for (const [image, ranges] of Object.entries(weatherImages)) {
            if (cloudPct >= ranges[0] && cloudPct <= ranges[1]) {
                wimg.src = `images/${image}`;
                
            }   
        } 
        
    }
} 

catch (error) {
	console.error(error);
}

}

let search = document.getElementById('sbtn');
search.addEventListener('click',fetchWeather);

