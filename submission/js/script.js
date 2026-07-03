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


let reviewNameInput = document.querySelector("#reviewName");
let reviewCommentInput = document.querySelector("#reviewComment");
let addReviewBtn = document.querySelector("#addReviewBtn");

addReviewBtn.addEventListener("click", () => {
    let name = reviewNameInput.value.trim();
    let comment = reviewCommentInput.value.trim();

    
    if (name === "" || comment === "") {
        alert("Please fill in both your name and comment.");
        return;
    }

    
    let card = document.createElement("div");
    card.classList.add("testimonial-card");

    let nameEl = document.createElement("h4");
    let commentEl = document.createElement("p");
    let deleteBtn = document.createElement("button");

    nameEl.textContent = name;
    commentEl.textContent = "\"" + comment + "\"";
    deleteBtn.textContent = "Delete";
    deleteBtn.classList.add("delete-btn");

    deleteBtn.addEventListener("click", () => {
        card.remove();
    });

    card.appendChild(nameEl);
    card.appendChild(commentEl);
    card.appendChild(deleteBtn);

    testimonialList.appendChild(card);

    reviewNameInput.value = "";
    reviewCommentInput.value = "";
});