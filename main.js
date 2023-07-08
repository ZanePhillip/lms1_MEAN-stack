
// Header animation
// const header = 
// document.querySelector(".header");
// const toggleClass = "is-sticky";

// window.addEventListener("scroll", () =>
// {
//     const currentScroll = window.pageYOffset;
//     if (currentScroll > 150)
//     {
//         header.classList.add(toggleClass);
//     }
//     else
//     {
//         header.classList.remove(toggleClass);
//     }
// });



const meal = [
// Beef menu
{
    logo: "Assets/images/Menu Category/beef.png",
        name: "Fried Wonton",
        price: "$5",
        rating: "5.0",
        isItemInCart: false,
        category: "Beef",
},
{
    logo: "Assets/images/Menu Category/beef.png",
        name: "Steamed Wonton",
        price: "$5",
        rating: "4.2",
        isItemInCart: false,
        category: "Beef",
},
{
    logo: "Assets/images/Menu Category/beef.png",
        name: "Shanghai Lumpia",
        price: "$3",
        rating: "4.5",
        isItemInCart: false,
        category: "Beef",
},
{
    logo: "Assets/images/Menu Category/beef.png",
        name: "Beef Brocolli",
        price: "$7",
        rating: "4.5",
        isItemInCart: false,
        category: "Beef",
},
{
    logo: "Assets/images/Menu Category/beef.png",
        name: "Spicy Spareribs",
        price: "$10",
        rating: "4.7",
        isItemInCart: false,
        category: "Beef",
},
{
    logo: "Assets/images/Menu Category/beef.png",
        name: "Braised Beef w/ Tofu & Eggplant",
        price: "$2",
        rating: "3.5",
        isItemInCart: false,
        category: "Beef",
},
// Chicken menu
{
    logo: "Assets/images/Menu Category/chicken.png",
        name: "Chokwe",
        price: "$5",
        rating: "5.0",
        isItemInCart: false,
        category: "Beef",
},
{
    logo: "Assets/images/Menu Category/chicken.png",
        name: "Soy Chicken",
        price: "$5",
        rating: "4.2",
        isItemInCart: false,
        category: "Chicken",
},
{
    logo: "Assets/images/Menu Category/chicken.png",
        name: "White Chicken",
        price: "$3",
        rating: "4.5",
        isItemInCart: false,
        category: "Chicken",
},
{
    logo: "Assets/images/Menu Category/chicken.png",
        name: "Chinese Fried Chicken (Whole)",
        price: "$7",
        rating: "4.5",
        isItemInCart: false,
        category: "Chicken",
},
{
    logo: "Assets/images/Menu Category/chicken.png",
        name: "Chinese Fried Chicken (Half)",
        price: "$10",
        rating: "4.7",
        isItemInCart: false,
        category: "Chicken",
},
{
    logo: "Assets/images/Menu Category/chicken.png",
        name: "Chicken Cold Cut slices",
        price: "$2",
        rating: "3.5",
        isItemInCart: false,
        category: "Chicken",
},
// Vegetables menu
{
    logo: "Assets/images/Menu Category/vegetables.png",
        name: "Mixed Vegetables",
        price: "$5",
        rating: "5.0",
        isItemInCart: false,
        category: "Vegetables",
},
{
    logo: "Assets/images/Menu Category/vegetables.png",
        name: "Brocolli w/ Mushrooms",
        price: "$5",
        rating: "4.2",
        isItemInCart: false,
        category: "Vegetables",
},
{
    logo: "Assets/images/Menu Category/vegetables.png",
        name: "Brocolli w/ Beef",
        price: "$3",
        rating: "4.5",
        isItemInCart: false,
        category: "Vegetables",
},
{
    logo: "Assets/images/Menu Category/vegetables.png",
        name: "Chopsuey",
        price: "$7",
        rating: "4.5",
        isItemInCart: false,
        category: "Vegetables",
},
{
    logo: "Assets/images/Menu Category/vegetables.png",
        name: "Braised Beef w/ Tofu & Eggplant",
        price: "$10",
        rating: "4.7",
        isItemInCart: false,
        category: "Vegetables",
},
{
    logo: "Assets/images/Menu Category/vegetables.png",
        name: "Fish Fillet w/ Tofu & Eggplant",
        price: "$2",
        rating: "3.5",
        isItemInCart: false,
        category: "Vegetables",
},
// Rice menu
{
    logo: "Assets/images/Menu Category/rice.png",
        name: "Chinese Fried Rice",
        price: "$6",
        rating: "5.0",
        isItemInCart: false,
        category: "Rice",
},
{
    logo: "Assets/images/Menu Category/rice.png",
        name: "Crab Rice",
        price: "$5",
        rating: "4.2",
        isItemInCart: false,
        category: "Rice",
},
{
    logo: "Assets/images/Menu Category/rice.png",
        name: "Yang Chow",
        price: "$5",
        rating: "4.5",
        isItemInCart: false,
        category: "Rice",
},
{
    logo: "Assets/images/Menu Category/rice.png",
        name: "Beef Chowfan",
        price: "$7",
        rating: "4.5",
        isItemInCart: false,
        category: "Rice",
},
{
    logo: "Assets/images/Menu Category/rice.png",
        name: "Steamed Rice",
        price: "$3",
        rating: "4.7",
        isItemInCart: false,
        category: "Rice",
},
{
    logo: "Assets/images/Menu Category/rice.png",
        name: "Ancient Black Rice",
        price: "$10",
        rating: "3.5",
        isItemInCart: false,
        category: "Rice",
},
// Soup menu
{
    logo: "Assets/images/Menu Category/soup.png",
        name: "Meatball Soup",
        price: "$5",
        rating: "5",
        isItemInCart: false,
        category: "Soup",
},
{
    logo: "Assets/images/Menu Category/soup.png",
        name: "Wanton Soup",
        price: "$5",
        rating: "4.2",
        isItemInCart: false,
        category: "Soup",
},
{
    logo: "Assets/images/Menu Category/soup.png",
        name: "Fisherman's Soup",
        price: "$3",
        rating: "4.5",
        isItemInCart: false,
        category: "Soup",
},
{
    logo: "Assets/images/Menu Category/soup.png",
        name: "Crab Soup",
        price: "$7",
        rating: "4.5",
        isItemInCart: false,
        category: "Soup",
},
{
    logo: "Assets/images/Menu Category/soup.png",
        name: "Shark-fin Soup",
        price: "$10",
        rating: "4.7",
        isItemInCart: false,
        category: "Soup",
},
{
    logo: "Assets/images/Menu Category/soup.png",
        name: "Fishball Soup",
        price: "$2",
        rating: "3.5",
        isItemInCart: false,
        category: "Soup",
},
// Dimsum menu
{
    logo: "Assets/images/Menu Category/dimsum.png",
        name: "Kikiam",
        price: "$5",
        rating: "5",
        isItemInCart: false,
        category: "Dimsum",
},
{
    logo: "Assets/images/Menu Category/dimsum.png",
        name: "Siopao (Steamed Bun)",
        price: "$5",
        rating: "4.2",
        isItemInCart: false,
        category: "Dimsum",
},
{
    logo: "Assets/images/Menu Category/dimsum.png",
        name: "Beef Siomai",
        price: "$3",
        rating: "4.5",
        isItemInCart: false,
        category: "Dimsum",
},
{
    logo: "Assets/images/Menu Category/dimsum.png",
        name: "Chicken Feet",
        price: "$7",
        rating: "4.5",
        isItemInCart: false,
        category: "Dimsum",
},
{
    logo: "Assets/images/Menu Category/dimsum.png",
        name: "Mixed Cold cuts",
        price: "$10",
        rating: "4.7",
        isItemInCart: false,
        category: "Dimsum",
},
{
    logo: "Assets/images/Menu Category/dimsum.png",
        name: "Ma-Chang",
        price: "$2",
        rating: "3.5",
        isItemInCart: false,
        category: "Dimsum",
},
// Beverages menu
{
    logo: "Assets/images/Menu Category/drinks.png",
        name: "Coke beverages (Can)",
        price: "$4.5",
        rating: "5",
        isItemInCart: false,
        category: "Drinks",
},
{
    logo: "Assets/images/Menu Category/drinks.png",
        name: "Coke beverages (Liter)",
        price: "$7",
        rating: "4.2",
        isItemInCart: false,
        category: "Drinks",
},
{
    logo: "Assets/images/Menu Category/drinks.png",
        name: "Bottled Water",
        price: "$3",
        rating: "4.5",
        isItemInCart: false,
        category: "Drinks",
},
{
    logo: "Assets/images/Menu Category/drinks.png",
        name: "Juice (Pineapple)",
        price: "$7",
        rating: "4.5",
        isItemInCart: false,
        category: "Drinks",
},
{
    logo: "Assets/images/Menu Category/drinks.png",
        name: "San Miguel Pale Pilsen",
        price: "$3",
        rating: "4.7",
        isItemInCart: false,
        category: "Drinks",
},
{
    logo: "Assets/images/Menu Category/drinks.png",
        name: "San Miguel Light",
        price: "$4",
        rating: "3.5",
        isItemInCart: false,
        category: "Drinks",
},
];

let cart = [];

// Check menu category name in log
const menuname = document.getElementById("menucat_id").innerText;
console.log("Menu Title: ", menuname);

// Sort meal by categories retrieve data generate HTML Cards
const menucat = meal.filter((food) => food.category === menuname);
displayMenuList(menucat);



// Inner HTML generator for meal items
function displayMenuList(menucat)
{
    const menuCard = document.getElementById("menu-card");
    menuCard.innerHTML = ""; 
    menucat.forEach((item) => {
        const card = document.createElement("div");
        card.className = "card food-item-card col-md-3";

        const headerDiv = document.createElement("div");
        headerDiv.className = "row card-header-row";

        const ratingDiv = document.createElement("div");
        ratingDiv.className = "rating-card col-md-6";
        const ratingStar = document.createElement("i");
        ratingStar.className = "fa-solid fa-star";
        const ratingSpan = document.createElement("span");
        ratingSpan.textContent = item.rating;

        const addToCartDiv = document.createElement("div");
        addToCartDiv.className = "add-to-cart-logo round-logo col-md-6";
        addToCartDiv.id = item.name;

        if (cart.find((cartItem) => item.name === cartItem.name)) 
        {
            // Check if item is already in cart
            item.isItemInCart = true;
            addToCartDiv.classList.add("item-in-cart");
        }
        const addToCartIcon = document.createElement("i");
        addToCartIcon.className = "fa-regular fa-heart";

        const image = document.createElement("img");
        image.src = item.logo;
        image.className = "card-img-top food-item-logo";
        image.alt = "Food Logo";

        const cardBody = document.createElement("div");
        cardBody.className = "card-body";

        const title = document.createElement("h5");
        title.className = "card-title";
        title.textContent = item.name;

        const price = document.createElement("p");
        price.className = "card-text";
        price.textContent = "Price: " + item.price;

        ratingDiv.appendChild(ratingStar);
        ratingDiv.appendChild(ratingSpan);

        addToCartDiv.appendChild(addToCartIcon);

        headerDiv.appendChild(ratingDiv);
        headerDiv.appendChild(addToCartDiv);

        card.appendChild(headerDiv);
        card.appendChild(image);
        card.appendChild(cardBody);

        card.onclick = () => addItemToCart(item.name);

        cardBody.appendChild(title);
        cardBody.appendChild(price);

        menuCard.appendChild(card);
    });
}

// provides type,description of a function parameter
/**
 * 
 * @param {string} catselect 
 */

// Receive trigger from HTML
function receivetrgr(catselect)
{
    document.getElementById("menucat_id").innerText=catselect;

    const mealil = meal.filter((food) => food.category === category);
    displayMenuList(mealil);
}

// provides type,description of a function parameter
/**
 * 
 * @param {string} _itn 
 * @returns 
 */

function addToCart(_itn)
{
    console.log(_itn);

    mealselect=meal.find((item) => item.name === _itn);//locates itame name
    if (!mealselect?.name)
    {
        alert("Meal is not found!");
        return;
    }


}





