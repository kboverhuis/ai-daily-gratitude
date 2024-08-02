function generateGratitude(event) {
  event.preventDefault();

  new Typewriter("#gratitude", {
    strings:
      "Having a place to go is a home. Having someone to love is a family. Having both is a blessing.",
    autoStart: true,
    delay: 50,
    cursor: "",
  });
}

let gratitudeFormElement = document.querySelector("#gratitude-generator-form");
gratitudeFormElement.addEventListener("submit", generateGratitude);
