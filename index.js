function generatePoem(event) {
  event.preventDefault();

  new Typewriter("#poem", {
    strings: `Such verses for my Body let us write, (for we are one)`,
    delay: 80,
    autoStart: true,
    cursor: "",
  });
}

let botPoetForm = document.querySelector("#bot-poet-form");
botPoetForm.addEventListener("submit", generatePoem);
