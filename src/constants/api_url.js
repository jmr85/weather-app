const location = "Buenos Aires,ar";
const api_key = "31370e87f95b00644d8e710bf635fadb";
const url_base_weather = "http://api.openweathermap.org/data/2.5/weather";

export const api_weather = `${url_base_weather}?q=${location}&appid=${api_key}`;