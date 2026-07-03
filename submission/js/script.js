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

let reservationForm = document.querySelector("#reservationForm");
let reservationFeedback = document.querySelector("#reservationFeedback");

reservationForm.addEventListener("submit", (event) => {
    event.preventDefault();

    let name = document.querySelector("#resName").value.trim();
    let date = document.querySelector("#resDate").value.trim();
    let guests = document.querySelector("#resGuests").value.trim();
    let message = document.querySelector("#resMessage").value.trim();

    let errors = [];

    if (name === "") {
        errors.push("Please enter your name.");
    }
    if (date === "") {
        errors.push("Please enter a reservation date.");
    }
    if (guests === "" || isNaN(guests) || Number(guests) <= 0) {
        errors.push("Please enter a valid number of guests (at least 1).");
    }

    if (errors.length > 0) {
        reservationFeedback.innerHTML = "<b>Please fix the following:</b><ul>" +
            errors.map(err => "<li>" + err + "</li>").join("") +
            "</ul>";
        reservationFeedback.classList.remove("success-text");
        reservationFeedback.classList.add("error-text");
        return;
    }

    reservationFeedback.innerHTML =
        "<b>Reservation Confirmed!</b><br>" +
        "Name: " + name + "<br>" +
        "Date: " + date + "<br>" +
        "Guests: " + guests + "<br>" +
        "Message: " + (message === "" ? "None" : message);

    reservationFeedback.classList.remove("error-text");
    reservationFeedback.classList.add("success-text");

    reservationForm.reset();
});