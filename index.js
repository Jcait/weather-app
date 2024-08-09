console.log("Hello");

async function getWeather(location) {
  const response = await fetch(
    `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${location}?unitGroup=metric&key=LACP5JA7YBA2Y3WSVB9HHCM7R&contentType=json`,
    { mode: "cors" }
  );
  const weather = await response.json();
  console.log(response);
  console.log(weather.days[0].temp);
}
