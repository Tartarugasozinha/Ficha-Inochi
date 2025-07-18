document.addEventListener("DOMContentLoaded", () => {
  console.log("Ficha carregada com sucesso.");

  // Rolar suavemente até a seção clicada no menu
  document.querySelectorAll("nav a[href^='#']").forEach(link => {
    link.addEventListener("click", function (e) {
      e.preventDefault();
      const targetId = this.getAttribute("href");
      const targetElement = document.querySelector(targetId);

      if (targetElement) {
        targetElement.scrollIntoView({
          behavior: "smooth",
          block: "start"
        });

        history.pushState(null, null, targetId); // atualiza URL sem recarregar
      }
    });
  });
});
