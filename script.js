// const apiKey = "YOUR API KEY HERE";
// const city = "Atlanta";
// const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

// document.addEventListener("DOMContentLoaded", () => {
//   const weatherInfo = document.getElementById("weather-info");

//   // Fetch weather data from the API
//   fetch(apiUrl)
//     .then((response) => {
//       if (!response.ok) {
//         throw new Error("Network response was not ok");
//       }
//       return response.json();
//     })
//     .then((data) => {
//       // Process and display weather information
//       const { name, main, weather } = data;
//       const temperature = main.temp;
//       const description = weather[0].description;

//       const weatherHtml = `
//               <p>City: ${name}</p>
//               <p>Temperature: ${temperature} deg C</p>
//               <p>Weather: ${description}</p>
//           `;

//       weatherInfo.innerHTML = weatherHtml;
//     })
//     .catch((error) => {
//       console.error("There was a problem fetching the weather data:", error);
//       weatherInfo.innerHTML = "Failed to fetch weather data.";
//     });
// });


let id = 1;
let content_type = "Info";
const img = document.getElementById("img");
const name = document.getElementById("name");
const type_container = document.getElementById("type-container");
const left = document.getElementById("left-button");
const right = document.getElementById("right-button");

const content_title = document.getElementById("content-type");
const content_box = document.getElementById("content-box");
const info_button = document.getElementById("info-button");
const moves_button = document.getElementById("moves-button");

async function getPokemon() {
  const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
  const data = await response.json();
  console.log(data);
  update(data);
}


function update(data) {
  img.src = data.sprites.front_default;
  img.alt = data.name;
  name.textContent = data.name;
  content_title.textContent = content_type;
  content_box.innerHTML = "height: " + (data.height).toString() + "m <br>";
  content_box.innerHTML += "weight: " + (data.weight).toString() + "kg <br>";
  const stats = data.stats;
  stats.forEach((stat) => {
      content_box.innerHTML += (stat.stat.name + ": "+ stat.base_stat.toString() + "<br>" );
  });
}


getPokemon();


// console.log(left);
left.addEventListener("click", (event) => {
  id -= 1;
  if (id <= 0) id += 1010;
  console.log(id);
  getPokemon();
});

right.addEventListener("click", (event) => {
  id += 1;
  if (id >= 1011) id -= 1010;
  getPokemon();
})

// document.addEventListener("DOMContentLoaded", () => {

//   // Fetch weather data from the API
//   fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
//     .then((response) => {
//       if (!response.ok) {
//         throw new Error("Network response was not ok");
//       }
//       return response.json();
//     })
//     .then((data) => {
//       // Process and display weather information
//       console.log(data);
//       // const { name, main, weather } = data;
//       // const temperature = main.temp;
//       // const description = weather[0].description;

//       // const weatherHtml = `
//       //         <p>City: ${name}</p>
//       //         <p>Temperature: ${temperature} deg C</p>
//       //         <p>Weather: ${description}</p>
//       //     `;

//       // weatherInfo.innerHTML = weatherHtml;
//     })
//     .catch((error) => {
//       console.error("There was a problem fetching the weather data:", error);
//       weatherInfo.innerHTML = "Failed to fetch weather data.";
//     });
// });