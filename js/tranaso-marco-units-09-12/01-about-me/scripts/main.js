document.body.style.fontFamily = "Arial, sans-serif";

document.getElementById("nickname").textContent = "Marco";
document.getElementById("favorites").textContent = "Coding, Pizza, Music";
document.getElementById("hometown").textContent = "Milan";

const listItems = document.querySelectorAll("li");
listItems.forEach((item) => {
  item.className = "list-item";
});

const img = document.createElement("img");
img.src = "https://via.placeholder.com/150";
img.alt = "A picture of me";
document.body.appendChild(img);

setTimeout(() => {
  const link = document.createElement("link");
  link.rel = "stylesheet";
  link.href = "styles.css";
  document.head.appendChild(link);
}, 4000);
