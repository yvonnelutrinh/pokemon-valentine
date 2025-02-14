document
  .getElementById("download-button")
  .addEventListener("click", function () {
    const section = document.getElementById("download");
    html2canvas(section, { useCORS: true }).then((canvas) => {
      const link = document.createElement("a");
      link.href = canvas.toDataURL("image/png");
      link.download = "pokemon-valentine.png";
      link.click();
    });
  });
