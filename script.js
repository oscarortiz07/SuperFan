const pokemon = document.querySelector("#pokemon");
const slot1 = document.querySelector("#slot1");
const slot2 = document.querySelector("#slot2");
const slot3 = document.querySelector("#slot3");
const invButton = document.querySelector("#invButton");
const inventory = document.querySelector("#inventory");
const pokeball = document.querySelector("#pokeball");
const resetButton = document.querySelector("#reset");

let slot1Info;
let slot2Info;
let slot3Info;

const pokemonStats = [
  {
    name: "Pikachu",
    health: 35,
    attack: 55,
    defense: 40,
    type: "electric",
    image: "images/pikachu.png"
  },
  {
    name: "Charmander",
    health: 78,
    attack: 84,
    defense: 78,
    type: "fire, flying",
    image: "images/charizard.png"
  },
  {
    name: "Squirtle",
    health: 44,
    attack: 48,
    defense: 65,
    type: "water",
    image: "images/squirtle.png"
  }
];

let catchPokemon = () => {
  if (index < pokemonStats.length) {
    pokemon.src = "images/pokeball.png";
    pokemon.classList.add("shake");
    pokeball.style.opacity = 0;
    setTimeout(() => {
      pokemon.classList.remove("shake");
      pokeball.style.opacity = 1;
      pokemon.src = "";

      switch (index) {
        case 0:
          slot1.src = pokemonStats[index].image;
          slot1Info = { ...pokemonStats[index] };
          break;
        case 1:
          slot2.src = pokemonStats[index].image;
          slot2Info = { ...pokemonStats[index] };
          break;
        case 2:
          slot3.src = pokemonStats[index].image;
          slot3Info = { ...pokemonStats[index] };
          break;
        default:
          break;
      }

      if (index < pokemonStats.length - 1) {
        index++;
        pokemon.src = pokemonStats[index].image;
      }
    }, 2000);
  }
};

resetButton.addEventListener("click", () => {
  location.reload();
});

invButton.addEventListener("click", () => {
  inventory.classList.toggle("show");
});

let index = 0;

pokemon.addEventListener("click", catchPokemon);
pokeball.addEventListener("click", catchPokemon);

// Get the modal
var modal = document.getElementById("myModal");
// Get the <span> element that closes the modal
var close = document.querySelector(".close");

// info
const name = document.querySelector("#name");
const health = document.querySelector("#health");
const attack = document.querySelector("#attack");
const defense = document.querySelector("#defense");
const type = document.querySelector("#type");

[slot1, slot2, slot3].forEach((slot, index) => {
  console.log(slot);
  console.log(index);
  slot.addEventListener("click", () => {
    modal.style.display = "block";
    console.log("2");
    name.textContent = "Name: " + pokemonStats[index].name;
    health.textContent = "HP: " + pokemonStats[index].health;
    attack.textContent = "Attack: " + pokemonStats[index].attack;
    defense.textContent = "Defense: " + pokemonStats[index].defense;
    type.textContent = "Type: " + pokemonStats[index].type.toUpperCase();
  });
});

// When the user clicks on <span> (x), close the modal
close.onclick = function () {
  modal.style.display = "none";
};

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};
