"use strict";

let teams = [
  { code: "DAL", name: "Dallas Cowboys", plays: "Arlington, TX" },
  { code: "DEN", name: "Denver Broncos", plays: "Denver, CO" },
  { code: "HOU", name: "Houston Texans", plays: "Houston, TX" },
  { code: "KAN", name: "Kansas City Chiefs", plays: "Kansas City, MO" },
];

function init() {
  loadTeams();

  const displayButton = document.getElementById("displayButton");
  displayButton.onclick = displayTeam;
}

function loadTeams() {
  const footballList = document.getElementById("footballList");

  for (const team of teams) {
    const option = document.createElement("option");
    option.value = team.code;
    option.innerText = team.name;
    footballList.appendChild(option);
  }
}

function displayTeam() {
  const displayInput = document.getElementById("displayInput");
  displayInput.value = footballList.value;
}

window.onload = init;
