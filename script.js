function btnMai() {
  const input = document.getElementById("input-text");
  const resultado = document.getElementById("textAreaResult");
  resultado.value = input.value.toUpperCase();
}

function btnMin() {
  const input = document.getElementById("input-text");
  const resultado = document.getElementById("textAreaResult");
  resultado.value = input.value.toLowerCase();
}

function abrirLinkGithub(event) {
  event.preventDefault();
  chrome.tabs.create({ url: "https://github.com/Kadisa-Cyber" });
}

document.addEventListener("DOMContentLoaded", () => {
  document.getElementById("btn-max").addEventListener("click", btnMai);
  document.getElementById("btn-min").addEventListener("click", btnMin);
  document
    .getElementById("link-github")
    .addEventListener("click", abrirLinkGithub);
});
