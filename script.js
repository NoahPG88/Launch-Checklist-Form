// Write your JavaScript code here!
function clearInp(){
   document.getElementsByTagName("input").value = "";
}

window.addEventListener("load", function(){

   let form = document.getElementById("launchForm");
   form.addEventListener("submit", function(event) {

      let pilotNameInput = document.getElementById("pilotName").value;
      let copilotNameInput = document.getElementById("copilotName").value;
      let fuelLevelInput = document.getElementById("fuelLevel").value;
      let cargoMassInput = document.getElementById("cargoMass").value;

      if(!pilotNameInput || !copilotNameInput || !fuelLevelInput || !cargoMassInput){
         alert("All fields are required");
         event.preventDefault();
      } else if(!isNaN(pilotNameInput)){
         alert("Pilot name must be a word");
         event.preventDefault();
      } else if (!isNaN(copilotNameInput)){
         alert("Copilot name must be a word");
         event.preventDefault();
      } else if(isNaN(fuelLevelInput)){
         alert("Fuel level must be a number");
         event.preventDefault();
      } else if(isNaN(cargoMassInput)){
         alert("Cargo mass must be a number");
         event.preventDefault();
      }

   event.preventDefault();

   });

});

/* This block of code shows how to format the HTML once you fetch some planetary JSON!
<h2>Mission Destination</h2>
<ol>
   <li>Name: ${}</li>
   <li>Diameter: ${}</li>
   <li>Star: ${}</li>
   <li>Distance from Earth: ${}</li>
   <li>Number of Moons: ${}</li>
</ol>
<img src="${}">
*/
