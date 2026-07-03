const API_KEY = '8d8baec9beb3eeb80607c7c276718855';
const BASE = 'https://api.openweathermap.org/data/2.5';
 
const DEMO_DATA = {
  'Copenhagen': {
    name: 'Copenhagen', country: 'DK', temp: 14, feels: 12,
    description: 'partly cloudy', icon: '⛅', humidity: 72, wind: 5.2,
    pressure: 1013, clouds: 45, visibility: 10, sunrise: '05:28', sunset: '21:14',
    uv: 4,
    hourly: [
      { time: 'Now', icon: '⛅', temp: 14 }, { time: '13:00', icon: '🌤', temp: 15 },
      { time: '14:00', icon: '☀️', temp: 16 }, { time: '15:00', icon: '☀️', temp: 17 },
      { time: '16:00', icon: '🌤', temp: 16 }, { time: '17:00', icon: '⛅', temp: 15 },
      { time: '18:00', icon: '🌥', temp: 14 }, { time: '19:00', icon: '🌧', temp: 13 },
    ],
    daily: [
      { day: 'Today', icon: '⛅', high: 17, low: 11 }, { day: 'Tue', icon: '🌧', high: 14, low: 9 },
      { day: 'Wed', icon: '🌦', high: 16, low: 10 }, { day: 'Thu', icon: '☀️', high: 20, low: 12 },
      { day: 'Fri', icon: '☀️', high: 22, low: 13 }, { day: 'Sat', icon: '🌤', high: 19, low: 11 },
      { day: 'Sun', icon: '⛅', high: 17, low: 10 },
    ]
  },
  'Kyiv': {
    name: 'Kyiv', country: 'UA', temp: 22, feels: 21,
    description: 'clear sky', icon: '☀️', humidity: 48, wind: 3.1,
    pressure: 1018, clouds: 5, visibility: 10, sunrise: '04:58', sunset: '21:08',
    uv: 7,
    hourly: [
      { time: 'Now', icon: '☀️', temp: 22 }, { time: '13:00', icon: '☀️', temp: 24 },
      { time: '14:00', icon: '☀️', temp: 25 }, { time: '15:00', icon: '🌤', temp: 25 },
      { time: '16:00', icon: '🌤', temp: 24 }, { time: '17:00', icon: '🌤', temp: 23 },
      { time: '18:00', icon: '☀️', temp: 22 }, { time: '19:00', icon: '🌅', temp: 20 },
    ],
    daily: [
      { day: 'Today', icon: '☀️', high: 25, low: 14 }, { day: 'Tue', icon: '🌤', high: 26, low: 15 },
      { day: 'Wed', icon: '⛅', high: 23, low: 13 }, { day: 'Thu', icon: '🌧', high: 19, low: 12 },
      { day: 'Fri', icon: '🌦', high: 21, low: 13 }, { day: 'Sat', icon: '☀️', high: 24, low: 14 },
      { day: 'Sun', icon: '☀️', high: 27, low: 16 },
    ]
  },
  'Tokyo': {
    name: 'Tokyo', country: 'JP', temp: 28, feels: 30,
    description: 'humid and hazy', icon: '🌫', humidity: 82, wind: 2.8,
    pressure: 1007, clouds: 60, visibility: 6, sunrise: '04:23', sunset: '18:55',
    uv: 9,
    hourly: [
      { time: 'Now', icon: '🌫', temp: 28 }, { time: '13:00', icon: '⛅', temp: 29 },
      { time: '14:00', icon: '🌦', temp: 28 }, { time: '15:00', icon: '🌧', temp: 27 },
      { time: '16:00', icon: '🌧', temp: 26 }, { time: '17:00', icon: '🌦', temp: 26 },
      { time: '18:00', icon: '⛅', temp: 27 }, { time: '19:00', icon: '🌙', temp: 25 },
    ],
    daily: [
      { day: 'Today', icon: '🌫', high: 30, low: 23 }, { day: 'Tue', icon: '🌧', high: 27, low: 22 },
      { day: 'Wed', icon: '⛅', high: 28, low: 22 }, { day: 'Thu', icon: '🌤', high: 30, low: 23 },
      { day: 'Fri', icon: '☀️', high: 32, low: 24 }, { day: 'Sat', icon: '⛅', high: 29, low: 23 },
      { day: 'Sun', icon: '🌧', high: 26, low: 22 },
    ]
  },
  'New York': {
    name: 'New York', country: 'US', temp: 19, feels: 18,
    description: 'overcast clouds', icon: '🌥', humidity: 65, wind: 6.7,
    pressure: 1010, clouds: 80, visibility: 9, sunrise: '05:44', sunset: '20:22',
    uv: 5,
    hourly: [
      { time: 'Now', icon: '🌥', temp: 19 }, { time: '13:00', icon: '🌥', temp: 20 },
      { time: '14:00', icon: '🌦', temp: 19 }, { time: '15:00', icon: '🌧', temp: 18 },
      { time: '16:00', icon: '🌧', temp: 17 }, { time: '17:00', icon: '🌦', temp: 17 },
      { time: '18:00', icon: '🌥', temp: 16 }, { time: '19:00', icon: '🌙', temp: 15 },
    ],
    daily: [
      { day: 'Today', icon: '🌥', high: 20, low: 13 }, { day: 'Tue', icon: '🌧', high: 17, low: 11 },
      { day: 'Wed', icon: '☀️', high: 22, low: 12 }, { day: 'Thu', icon: '☀️', high: 25, low: 14 },
      { day: 'Fri', icon: '🌤', high: 23, low: 15 }, { day: 'Sat', icon: '⛅', high: 21, low: 13 },
      { day: 'Sun', icon: '🌧', high: 18, low: 12 },
    ]
  },
  'Dubai': {
    name: 'Dubai', country: 'AE', temp: 41, feels: 44,
    description: 'clear sky', icon: '☀️', humidity: 30, wind: 4.2,
    pressure: 1003, clouds: 0, visibility: 10, sunrise: '05:35', sunset: '19:12',
    uv: 11,
    hourly: [
      { time: 'Now', icon: '☀️', temp: 41 }, { time: '13:00', icon: '☀️', temp: 43 },
      { time: '14:00', icon: '☀️', temp: 44 }, { time: '15:00', icon: '☀️', temp: 44 },
      { time: '16:00', icon: '☀️', temp: 43 }, { time: '17:00', icon: '☀️', temp: 41 },
      { time: '18:00', icon: '🌅', temp: 38 }, { time: '19:00', icon: '🌙', temp: 35 },
    ],
    daily: [
      { day: 'Today', icon: '☀️', high: 44, low: 31 }, { day: 'Tue', icon: '☀️', high: 43, low: 30 },
      { day: 'Wed', icon: '☀️', high: 45, low: 31 }, { day: 'Thu', icon: '☀️', high: 44, low: 32 },
      { day: 'Fri', icon: '☀️', high: 43, low: 31 }, { day: 'Sat', icon: '🌤', high: 40, low: 30 },
      { day: 'Sun', icon: '☀️', high: 42, low: 31 },
    ]
  }
};
 
function initStars() {
  const c = document.getElementById('stars');
  for (let i = 0; i < 80; i++) {
    const s = document.createElement('div');
    s.className = 'star';
    s.style.left = Math.random()*100 + '%';
    s.style.top = Math.random()*100 + '%';
    s.style.setProperty('--dur', (2 + Math.random()*4) + 's');
    s.style.animationDelay = Math.random()*4 + 's';
    c.appendChild(s);
  }
}
 
function setTheme(temp) {
  const body = document.body;
  const stars = document.getElementById('stars');
  if (temp >= 30) {
    body.style.background = 'linear-gradient(160deg, #2d1b0e 0%, #7c3b1a 40%, #d4752a 100%)';
    stars.style.opacity = '0';
  } else if (temp >= 20) {
    body.style.background = 'linear-gradient(160deg, #0d1b3e 0%, #1a3a6e 40%, #2d7ab5 100%)';
    stars.style.opacity = '0';
  } else if (temp >= 10) {
    body.style.background = 'linear-gradient(160deg, #1a2a4a 0%, #2d4a7a 40%, #4a7ab5 100%)';
    stars.style.opacity = '0';
  } else {
    body.style.background = 'linear-gradient(160deg, #0d1124 0%, #1a2040 40%, #2d3a6e 100%)';
    stars.style.opacity = '0.7';
  }
}
 
function renderWeather(d) {
  document.getElementById('cityDisplay').textContent = d.name;
  document.getElementById('countryDisplay').textContent = d.country;
  document.getElementById('mainIcon').textContent = d.icon;
  document.getElementById('tempDisplay').innerHTML = d.temp + '<sup>°C</sup>';
  document.getElementById('descDisplay').textContent = d.description;
  document.getElementById('feelsDisplay').textContent = `Feels like ${d.feels}°C`;
  document.getElementById('humidityVal').innerHTML = d.humidity + '<span class="stat-unit">%</span>';
  document.getElementById('windVal').innerHTML = d.wind + '<span class="stat-unit"> m/s</span>';
  document.getElementById('pressureVal').innerHTML = d.pressure + '<span class="stat-unit"> hPa</span>';
 
  const clouds = d.clouds;
  document.getElementById('cloudsVal').textContent = clouds + '%';
  document.getElementById('cloudsDesc').textContent = clouds < 20 ? 'Clear skies' : clouds < 50 ? 'Partly cloudy' : clouds < 80 ? 'Mostly cloudy' : 'Overcast';
 
  const vis = d.visibility;
  document.getElementById('visibilityVal').textContent = vis + ' km';
  document.getElementById('visibilityDesc').textContent = vis >= 10 ? 'Excellent' : vis >= 7 ? 'Good' : vis >= 4 ? 'Moderate' : 'Poor';
 
  document.getElementById('sunriseVal').textContent = d.sunrise;
  document.getElementById('sunriseTime').textContent = d.sunrise;
  document.getElementById('sunsetTime').textContent = d.sunset;
  const [srh, srm] = d.sunrise.split(':').map(Number);
  const [ssh, ssm] = d.sunset.split(':').map(Number);
  const now = new Date();
  const nowMins = now.getHours()*60 + now.getMinutes();
  const srMins = srh*60+srm, ssMins = ssh*60+ssm;
  const pct = Math.max(0, Math.min(100, ((nowMins - srMins)/(ssMins - srMins))*100));
  document.getElementById('sunProgress').style.width = pct + '%';
 
  const uv = d.uv;
  document.getElementById('uvVal').textContent = uv;
  const uvLabels = ['Low','Low','Low','Moderate','Moderate','Moderate','High','High','Very High','Very High','Very High','Extreme'];
  document.getElementById('uvDesc').textContent = uvLabels[Math.min(uv, 11)] || 'Extreme';
  const uvColors = ['#4ade80','#84cc16','#facc15','#fb923c','#f87171','#c084fc'];
  const uvBar = document.getElementById('uvBar');
  uvBar.innerHTML = '';
  for (let i = 0; i < 6; i++) {
    const seg = document.createElement('div');
    seg.className = 'uv-segment' + (i < Math.ceil(uv/2) ? ' active' : '');
    seg.style.background = uvColors[i];
    uvBar.appendChild(seg);
  }
 
  const hourly = document.getElementById('hourlyRow');
  hourly.innerHTML = '';
  d.hourly.forEach((h, i) => {
    const card = document.createElement('div');
    card.className = 'hour-card' + (i===0 ? ' active' : '');
    card.innerHTML = `<div class="hour-time">${h.time}</div><span class="hour-icon">${h.icon}</span><div class="hour-temp">${h.temp}°</div>`;
    hourly.appendChild(card);
  });
 
  const daily = document.getElementById('dailyList');
  daily.innerHTML = '';
  d.daily.forEach((day, i) => {
    const row = document.createElement('div');
    row.className = 'day-row';
    row.innerHTML = `<div class="day-name ${i===0?'today':''}">${day.day}</div><div class="day-icon">${day.icon}</div><div class="day-temps"><span class="day-high">${day.high}°</span><span class="day-low">${day.low}°</span></div>`;
    daily.appendChild(row);
  });
 
  setTheme(d.temp);
  document.getElementById('weatherContent').style.display = 'flex';
  document.getElementById('apiNote').style.display = 'none';
}
 
function showError(msg) {
  const el = document.getElementById('errorMsg');
  el.textContent = '⚠️ ' + msg;
  el.style.display = 'block';
  setTimeout(() => el.style.display = 'none', 4000);
}
 
async function fetchWeather(defaultCity) {
  const city = document.getElementById('cityInput').value.trim();
  if (!city) { showError('Please enter a city name'); return; }
 

 
  if (API_KEY === 'YOUR_API_KEY') {
    showError('Add your OpenWeatherMap API key to fetch live data. Try a demo city above!');
    return;
  }
 
  document.getElementById('loading').style.display = 'block';
  document.getElementById('weatherContent').style.display = 'none';
 
  try {
    const res = await fetch(`${BASE}/weather?q=${encodeURIComponent(city)}&appid=${API_KEY}&units=metric`);
    if (!res.ok) throw new Error(res.status === 404 ? 'City not found' : 'API error');
    const data = await res.json();
 
    const icons = { '01d':'☀️','01n':'🌙','02d':'🌤','02n':'🌤','03d':'⛅','03n':'⛅','04d':'🌥','04n':'🌥','09d':'🌧','09n':'🌧','10d':'🌦','10n':'🌦','11d':'⛈','11n':'⛈','13d':'❄️','13n':'❄️','50d':'🌫','50n':'🌫' };
    const icon = icons[data.weather[0].icon] || '🌡';
 
    const sunrise = new Date(data.sys.sunrise*1000);
    const sunset  = new Date(data.sys.sunset*1000);
    const fmt = d => d.getHours().toString().padStart(2,'0') + ':' + d.getMinutes().toString().padStart(2,'0');
 
    const mockHourly = Array.from({length:8}, (_,i) => {
      const h = new Date(); h.setHours(h.getHours()+i);
      const t = Math.round(data.main.temp + (Math.random()-0.5)*4);
      return { time: i===0?'Now':h.getHours().toString().padStart(2,'0')+':00', icon, temp: t };
    });
 
    const days = ['Sun','Mon','Tue','Wed','Thu','Fri','Sat'];
    const mockDaily = Array.from({length:7}, (_,i) => {
      const d = new Date(); d.setDate(d.getDate()+i);
      return { day: i===0?'Today':days[d.getDay()], icon, high: Math.round(data.main.temp_max + i*0.5), low: Math.round(data.main.temp_min - i*0.3) };
    });
 
    renderWeather({
      name: data.name, country: data.sys.country,
      temp: Math.round(data.main.temp), feels: Math.round(data.main.feels_like),
      description: data.weather[0].description, icon,
      humidity: data.main.humidity, wind: Math.round(data.wind.speed*10)/10,
      pressure: data.main.pressure, clouds: data.clouds?.all || 0,
      visibility: Math.round((data.visibility||10000)/1000),
      sunrise: fmt(sunrise), sunset: fmt(sunset), uv: 5,
      hourly: mockHourly, daily: mockDaily
    });
  } catch (e) {
    showError(e.message || 'Could not fetch weather');
  } finally {
    document.getElementById('loading').style.display = 'none';
  }
}
 
function loadDemo(city) {
  document.getElementById('cityInput').value = city;
  fetchWeather(city);
}
 
function getLocation() {
  if (!navigator.geolocation) { showError('Geolocation not supported'); return; }
  if (API_KEY === 'YOUR_API_KEY') {
    showError('Add your API key first to use geolocation. Try a demo city!');
    return;
  }
  navigator.geolocation.getCurrentPosition(async pos => {
    try {
      const {latitude: lat, longitude: lon} = pos.coords;
      const res = await fetch(`${BASE}/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`);
      const data = await res.json();
      document.getElementById('cityInput').value = data.name;
      fetchWeather();
    } catch(e) { showError('Could not get location weather'); }
  }, () => showError('Location access denied'));
}
 
initStars();
fetchWeather('Copenhagen');