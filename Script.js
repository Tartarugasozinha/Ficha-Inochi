// Script simples para console e futura expansão
document.addEventListener("DOMContentLoaded", () => {
  console.log("Ficha carregada com sucesso.");
});

// Exemplo: rolar suavemente até a seção clicada no menu
document.querySelectorAll("nav a").forEach(link => {
  link.addEventListener("click", function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute("href"));
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
  });
});
