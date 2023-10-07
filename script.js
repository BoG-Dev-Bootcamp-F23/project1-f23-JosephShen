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

let color = {
  normal: "#A8A77A",
  fire:"#EE8130",
  water: "#6390F0",
  electric: "#F7D02C",
  grass: "#7AC74C",
  ice: "#96D9D6",
  fighting: '#C22E28',
  poison: '#A33EA1',
  ground: '#E2BF65',
  flying: '#A98FF3',
  psychic: '#F95587',
  bug: '#A6B91A',
  rock: '#B6A136',
  ghost: '#735797',
  dragon: '#6F35FC',
  dark: '#705746',
  steel: '#B7B7CE',
  fairy: '#D685AD'
};

let id = 1;
let content_type = "Info";
const img = document.getElementById("img");
const name = document.getElementById("name");
const type_container = document.getElementById("inner-type-container");
const left = document.getElementById("left-button");
const right = document.getElementById("right-button");

const content_title = document.getElementById("content-type");
const content_box = document.getElementById("content-box");
const info_button = document.getElementById("info-button");
const moves_button = document.getElementById("moves-button");
let data;

async function getPokemon() {
  const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
  data = await response.json();
  console.log(data);
  update();
}


function update() {
  img.src = data.sprites.front_default;
  img.alt = data.name;
  name.textContent = data.name;
  get_types();
  if (content_type === "Info") get_info();
  else get_moves();
}

function get_types() {
  type_container.innerHTML = "";
  data.types.forEach((type) => {
    let t = document.createElement("div");
    t.classList.add('type');
    t.textContent = type.type.name;
    t.style.backgroundColor = color[type.type.name];
    type_container.appendChild(t);
  });
}

function get_info() {
  content_box.innerHTML = "";
  content_box.innerHTML += "height: " + (data.height).toString() + "m <br>";
  content_box.innerHTML += "weight: " + (data.weight).toString() + "kg <br>";
  data.stats.forEach((stat) => {
      content_box.innerHTML += (stat.stat.name + ": "+ stat.base_stat.toString() + "<br>" );
  });
  content_title.textContent = content_type;
}

function get_moves() {
  content_box.innerHTML = "";
  data.moves.forEach((moves) => {
    content_box.innerHTML += (moves.move.name + "<br>");
  });
  content_title.textContent = content_type;
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

info_button.addEventListener("click", (event) => {
  if (content_type == "Moves") {
    content_type = "Info";
    get_info();
  }
})

moves_button.addEventListener("click", (event) => {
  if (content_type == "Info") {
    content_type = "Moves";
    get_moves();
  }
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