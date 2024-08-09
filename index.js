console.log("Hello");

async function getWeather() {
  const response = await fetch(
    "https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/london?unitGroup=metric&key=LACP5JA7YBA2Y3WSVB9HHCM7R&contentType=json"
  );
  const weather = response.json();
  console.log(response);
  console.log(weather);
}
