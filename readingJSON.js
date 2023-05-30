let counter = 0;

fetch("data.json")
  .then((response) => response.json())
  .then((data) => {
    const randomOffers = getRandomElements(data.offers, 3);
    const offerts = document.querySelectorAll(".offert");

    randomOffers.forEach((offer) => {
      createOfferElement(offer, offerts[counter]);
      counter++;
    });
  })
  .catch((err) => console.log(err));

function getRandomElements(array, count) {
  const shuffled = array.sort(() => Math.random() - 0.5);
  return shuffled.slice(0, count);
}

function createOfferElement(offer, container) {
  const { name, price, currency, imgURL } = offer;

  const div = document.createElement("div");
  div.classList.add("offert-element");

  const nameElement = document.createElement("h3");
  const imgElement = document.createElement("img");
  const priceElement = document.createElement("span");
  const button = document.createElement("button");

  imgElement.classList.add("img");
  nameElement.classList.add("name");
  priceElement.classList.add("price");
  button.classList.add("button");

  priceElement.innerText = `${price} ${currency}`;
  nameElement.innerText = name;
  imgElement.src = imgURL;
  button.innerText = "Check";

  div.appendChild(imgElement);
  div.appendChild(nameElement);
  div.appendChild(priceElement);
  div.appendChild(button);

  container.appendChild(div);
}
