const testimonials = [
  { name: "Grace Wanjiru", comment: "Best grilled fish in Nairobi!" },
  { name: "Peter Otieno", comment: "I liked their services. Very fast and affordable" },
  { name: "Amina Hassan", comment: "Delicious ugali served with warm stew." }
];

let testimonialList = document.querySelector("#testimonialList");

testimonials.forEach(person => {
  let card = document.createElement("div");
  card.classList.add("testimonial-card");

  let nameEl = document.createElement("h4");
  let commentEl = document.createElement("p");

  nameEl.textContent = person.name;
  commentEl.textContent = "\"" + person.comment + "\"";

  card.appendChild(nameEl);
  card.appendChild(commentEl);

  testimonialList.appendChild(card);
});