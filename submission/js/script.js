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

const menuContainer = document.getElementById("menu-list");

menuItems.forEach(function(item){

    menuContainer.innerHTML += `

        <div class="menu-card">

            <h3>${item.name}</h3>

            <p><strong>Price:</strong> ${item.price}</p>

            <p><strong>Available:</strong> ${item.time}</p>

        </div>

    `;

});