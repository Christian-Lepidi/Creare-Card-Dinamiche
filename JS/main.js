let cardContainer = document.getElementById("card-cont");

let data = [
  {
    title: "Foglie",
    img: "https://images.unsplash.com/photo-1709733167460-38fa7bc94882?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDh8NnNNVmpUTFNrZVF8fGVufDB8fHx8fA%3D%3D",
    description: "foglie sparse nella natura incontaminata",
  },
  {
    title: "Rocce",
    img: "https://images.unsplash.com/photo-1716868914421-4626646caa8a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDExfDZzTVZqVExTa2VRfHxlbnwwfHx8fHw%3D",
    description: "rilievi rocciosi che spuntano su una radura desertica",
  },
  {
    title: "Palude",
    img: "https://images.unsplash.com/photo-1714496370620-c992a22217a2?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDI2fDZzTVZqVExTa2VRfHxlbnwwfHx8fHw%3D",
    description:
      "immagine di una palude nel mezzo della Florida dove vivono alligatori e serpenti",
  },
  {
    title: "Spiaggia",
    img: "https://images.unsplash.com/photo-1562257443-f7a85953d852?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDUzfDZzTVZqVExTa2VRfHxlbnwwfHx8fHw%3D",
    description: "spiaggia caraibica incontaminata e priva di presenza umana",
  },
];

data.forEach((element) => {
  cardContainer.innerHTML += `<div class="card m-2" style="width: 18rem">
  <img src="${element.img}">
  <div class="card-body">
    <h5 class="card-title">${element.title}</h5>
    <p class="card-text">
      ${element.description}
    </p>
  </div>
</div>`;
});
