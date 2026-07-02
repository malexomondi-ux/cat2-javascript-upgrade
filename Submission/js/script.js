// ==============================
// MENU ARRAY
// ==============================

const menuItems = [

    {
        name: "Rice and Meat",
        price: "KSh 1200",
        time: "12:30 PM"
    },

    {
        name: "Tea and Coffee",
        price: "KSh 200",
        time: "7:30 AM"
    },

    {
        name: "Grilled Fish and Ugali",
        price: "KSh 500",
        time: "6:00 PM"
    }

];
const saveMenu = localStorage.getItem("menuItems");

if(saveMenu) {
    menuItems.length = 0;
    menuItems.push(...JSON.parse(saveMenu));
}

// ==============================
// HTML ELEMENTS
// ==============================

const menuContainer = document.getElementById("menu-list");

const mealNameInput = document.getElementById("mealName");
const mealPriceInput = document.getElementById("mealPrice");
const addMealButton = document.getElementById("addMealBtn");

const message = document.getElementById("message");

// ==============================
// FUNCTION TO DISPLAY THE MENU
// ==============================

function displayMenu() {

    // Clear the menu first
    menuContainer.innerHTML = "";

    // Loop through every meal
    menuItems.forEach(function(item , index) {
          // creating an html element in the javaScript.
        const card = document.createElement("div");
        card.className = "menu-card";

        const title = document.createElement("h3");
        title.textContent = item.name; // puting text into the title
        

        //puting the card into the title 
        card.appendChild(title);
        // creating the price
        const price = document.createElement("p");
        price.textContent = "price: " + item.price;
        card.appendChild(price);

        // creating time paragraph
        const time = document.createElement("p");
        time.textContent = "Available: " + item.time;
        card.appendChild(time);
        // showing it on the webpage
        menuContainer.appendChild(card);

        // creating a delete button
        const deleteButton = document.createElement("button");
        // adding text on the button
        deleteButton.textContent = "Delete";
        deleteButton.addEventListener("click" , function(){
               menuItems.splice(index, 1);
               //Local storage for saving after deleting
               localStorage.setItem(
                   "menuItems",
                   JSON.stringify(menuItems)
               );

               displayMenu();
                
        message.style.color = "green";
        message.textContent = "Meal deleted Successfully!";

        });
        card.appendChild(deleteButton);

        menuContainer.appendChild(card);



    });

}

// Display menu when the page loads
displayMenu();

// ==============================
// ADD NEW MEAL
// ==============================

addMealButton.addEventListener("click", function (event) {

    event.preventDefault();
    // validating the meal name. trim() has been used to remove spaces
    if(mealNameInput.value.trim() === ""){
         
        message.style.color = "red";
        message.textContent = "Please enter the meal name.";

        return;
    }
    // validating the price 
    if(mealPriceInput.value.trim() === ""){

        message.style.color = "red";
        message.textContent = "Please enter the meal price.";

        return;
    }
    // Creating  a new object
    const newMeal = {

        name: mealNameInput.value,

        price: mealPriceInput.value,

        time: "Available Today"

    };

    console.log(newMeal);

    // Add it to the array
    menuItems.push(newMeal);
     
        message.style.color = "green";
        message.textContent = "Meal added Sucessfully!";

    //local Storage for saving the menu.
    localStorage.setItem(
          "menuItems",
          JSON.stringify(menuItems)
    );

    console.log(menuItems);

    console.log(menuItems.length);

    // Refresh the webpage menu
    displayMenu();

    // Clear the input boxes
    mealNameInput.value = "";
    mealPriceInput.value = "";

});

const bannerImage = document.getElementById("bannerImage");
const bannerCaption = document.getElementById("bannerCaption");

bannerImage.addEventListener("click" , function() {
    bannerCaption.classList.toggle("show");
});
