document.getElementById("form").addEventListener("submit", (e) => {
  e.preventDefault();

  let isAllInputValid = true;
  const requiredInputs = document.querySelectorAll(
    ".contact-form__field[required]"
  );

  for (let input of requiredInputs) {
    if (checkIfInputEmpty(input)) {
      isAllInputValid = false;
      renderInputError(
        input,
        "Ce champ est obligatoire, il ne peut pas être vide"
      );
    }

    if (input.type === "email") {
      if (!checkIfInputEmpty(input) && !input.value.includes("@")) {
        isAllInputValid = false;
        input.classList.add("contact-form__field--error-wrong-format");
        renderInputError(input, "Veuillez entrer une adresse email valide");
      }
    }
  }

  if (isAllInputValid) {
    document.getElementById("form").reset();
    document.getElementById("contact-submit-btn").parentElement.innerHTML = `
      <div class="contact-form__success-message">
        Message envoyé! Nous vous repondrons dans les plus brefs délais.
      </div>`;
  }
});

document.getElementById("form").addEventListener("input", (e) => {
  if (e.target.classList.contains("contact-form__field--error")) {
    if (
      !e.target.classList.contains("contact-form__field--error-wrong-format") &&
      !checkIfInputEmpty(e.target)
    ) {
      withdrawInputError(e.target);
    } else if (
      e.target.classList.contains("contact-form__field--error-wrong-format")
    ) {
      if (e.target.type === "email" && e.target.value.includes("@")) {
        withdrawInputError(e.target);
      }
    }
  }
});

function checkIfInputEmpty(input) {
  if (input.value === "" || input.value.trim().length === 0) {
    return true;
  }
}

function renderInputError(inputEl, message) {
  inputEl.classList.add("contact-form__field--error");
  inputEl.nextElementSibling.innerHTML = `
    <div class="contact-form__error">
      <img class="contact-form__error-icon" src="assets/error.svg">
      <span class="contact-form__error-message">${message}</span>
    </div>`;
}

function withdrawInputError(inputEl) {
  inputEl.classList.remove("contact-form__field--error");
  inputEl.classList.remove("contact-form__field--error-wrong-format");
  inputEl.nextElementSibling.innerHTML = "";
}
