const p = document.getElementById("status");

const btn = document.getElementById("enterBtn");

btn.addEventListener("click", () => {
  const newH1 = document.createElement("h1");
  newH1.innerHTML = "Entered Metaverse";

  p.parentNode.replaceChild(newH1, p);
p.id = "status"
});
