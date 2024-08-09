const select = document.querySelector("select");
const form = document.querySelector("form");
const btn = document.querySelector("button");

async function getWeather() {
  const selectCountry = document.querySelector("select>option:checked");
  const response = await fetch(
    `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${selectCountry.textContent}?unitGroup=metric&key=LACP5JA7YBA2Y3WSVB9HHCM7R&contentType=json`,
    { mode: "cors" }
  );
  const weather = await response.json();
  console.log(
    `The temperature in ${selectCountry.textContent} is ${weather.days[0].conditions}`
  );
}

async function getCountries() {
  const response = await fetch(
    "https://parseapi.back4app.com/classes/list_of_eu_union_countries?limit=10&order=country&keys=country,capital'",
    {
      headers: {
        "X-Parse-Application-Id": "7KffPh4njNmLBMB30kk9pvPGzBe7hwuK9SSQch6F", // This is the fake app's application id
        "X-Parse-Master-Key": "5dN5MVGWctV1CIDY4CmI6AC6LGQImCj8DlpEI2Ix", // This is the fake app's readonly master key
      },
    }
  );
  const data = await response.json();
  console.log(data.results);

  data.results.forEach((country) => {
    const option = document.createElement("option");
    option.textContent = country.country;
    select.appendChild(option);
  });
}

form.addEventListener("submit", (event) => {
  event.preventDefault();
  getWeather();
});

getCountries();
