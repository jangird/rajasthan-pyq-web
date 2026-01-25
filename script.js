let search = document.getElementById("search");
let cards = document.querySelectorAll(".card");

search.addEventListener("keyup", function() {
  let value = search.value.toLowerCase();

  cards.forEach(card => {
    let title = card.querySelector("h2").innerText.toLowerCase();

    if(title.includes(value)) {
      card.style.display = "block";
    } else {
      card.style.display = "none";
    }
  });
});
