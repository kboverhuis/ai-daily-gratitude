function displayGratitude(response) {
  console.log("Gratitude generated");
  new Typewriter("#gratitude", {
    strings: response.data.answer,
    autoStart: true,
    delay: 50,
    cursor: "",
  });
}

function generateGratitude(event) {
  event.preventDefault();

  let instructionsInput = document.querySelector("#user-instructions");
  let apiKey = "8908d7b1834oa44093b7b64af0t393f3";
  let context =
    "You have a positive and grateful outlook and believes in the importance of gratitude and minefullness.  Create a quality response of gratitude using the user instructions.  Create a two line response using HTML format with a <br /> after each sentence.  Please add at the end of the response <strong> SheCodes AI ";
  let prompt = `User Instructions: Generate a positive response of gratitude about ${instructionsInput.value}`;
  let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

  console.log("Generating Gratitude");
  console.log(`Prompt: ${prompt}`);
  console.log(`Context: ${context}`);

  axios.get(apiUrl).then(displayGratitude);
}

let gratitudeFormElement = document.querySelector("#gratitude-generator-form");
gratitudeFormElement.addEventListener("submit", generateGratitude);
