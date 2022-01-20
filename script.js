const jokeEL = document.getElementById("joke");
const jokeBtn = document.getElementById("jokeBtn");

// onload it will run the function and give me a joke 

window.onload = generateJoke();

jokeBtn.addEventListener("click", generateJoke);
async function generateJoke() {
  const config = {
    headers: {
      Accept: "application/json",
    },
  };
  const res = await fetch("https://icanhazdadjoke.com", config);

  const data = await res.json();
  jokeEL.textContent = data.joke;
}

// function generateJoke() {
//   const config = {
//     headers: {
//       Accept: "application/json",
//     },
//   };
//   fetch("https://icanhazdadjoke.com", config)
//     .then((res) => res.json())
//     .then((data) => {
//       jokeEL.textContent = data.joke;
//     });
// }
