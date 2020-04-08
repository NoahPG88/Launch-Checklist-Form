window.addEventListener("load", function () {

   let form = document.getElementById("launchForm");
   form.addEventListener("submit", function (event) {

      let pilotNameInput = document.getElementById("pilotName").value;
      let copilotNameInput = document.getElementById("copilotName").value;
      let fuelLevelInput = document.getElementById("fuelLevel").value;
      let cargoMassInput = document.getElementById("cargoMass").value;

      if (!pilotNameInput || !copilotNameInput || !fuelLevelInput || !cargoMassInput) {
         alert("All fields are required");
         event.preventDefault();
      } else if (!isNaN(pilotNameInput)) {
         alert("Pilot name must be a word");
         event.preventDefault();
      } else if (!isNaN(copilotNameInput)) {
         alert("Copilot name must be a word");
         event.preventDefault();
      } else if (isNaN(fuelLevelInput)) {
         alert("Fuel level must be a number");
         event.preventDefault();
      } else if (isNaN(cargoMassInput)) {
         alert("Cargo mass must be a number");
         event.preventDefault();
      }

      //variables for pre-launch info
      let launchStatusH2 = document.getElementById("launchStatus");
      let faultyItemsDiv = document.getElementById("faultyItems");
      let pilotStatusLi = document.getElementById("pilotStatus");
      let copilotStatusLi = document.getElementById("copilotStatus");
      let fuelStatusLi = document.getElementById("fuelStatus");
      let cargoStatusLi = document.getElementById("cargoStatus");

      //Changeing the list elements
      pilotStatusLi.innerHTML = `Pilot ${pilotNameInput} Ready`;
      copilotStatusLi.innerHTML = `Copilot ${copilotNameInput} Ready`;

      //pre-launch fuel and cargo validation
      if(fuelLevelInput < 10000 && cargoMassInput > 10000){
         faultyItemsDiv.style.visibility = "visible";
         fuelStatusLi.innerHTML = "Insufficient fuel"
         launchStatusH2.innerHTML = "Shuttle not ready for launch";
         launchStatusH2.style.color = "red";
         cargoStatusLi.innerHTML = "Excessive cargo mass";
      } else if (fuelLevelInput < 10000) {
         faultyItemsDiv.style.visibility = "visible";
         fuelStatusLi.innerHTML = "Insufficient fuel"
         launchStatusH2.innerHTML = "Shuttle not ready for launch";
         launchStatusH2.style.color = "red";
      } else if (cargoMassInput > 10000) {
         faultyItemsDiv.style.visibility = "visible";
         fuelStatusLi.innerHTML = "Insufficient fuel"
         cargoStatusLi.innerHTML = "Excessive cargo mass";
         launchStatusH2.innerHTML = "Shuttle not ready for launch";
         launchStatusH2.style.color = "red";
      } else {
         launchStatusH2.innerHTML = "Shuttle is ready for launch";
         launchStatusH2.style.color = "green";
      }

      event.preventDefault();
   });

   this.fetch("https://handlers.education.launchcode.org/static/planets.json").then(function (response) {
      response.json().then(function (json) {
         let i = Math.floor(Math.random()*json.length);
         let planetOb = json[i];
         let missionTarget = document.getElementById("missionTarget")
         missionTarget.innerHTML = `
         <h2>Mission Destination</h2>
            <ol style = "list-style-type:none">
               <li>Name: ${planetOb.name}</li>
               <li>Diameter: ${planetOb.diameter}</li>
               <li>Star: ${planetOb.star}</li>
               <li>Distance from Earth: ${planetOb.distance}</li>
               <li>Number of Moons: ${planetOb.moons}</li>
            </ol>
            <img src="${planetOb.image}">
         `
      });
   });
});