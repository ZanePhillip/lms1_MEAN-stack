
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


// Food menu
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

let ccart = [];

// Check menu category name in log
const menuname = document.getElementById("menucat_id").innerText;
console.log("Menu Title: ", menuname);

// Sort meal by categories retrieve data from list, generate HTML Cards
const menucat = meal.filter((food) => food.category === menuname);
displayMenuList(menucat);



// Inner HTML generator for meal items
function displayMenuList(menucat)
{
    const menuCard = document.getElementById("menucrd");
    menuCard.innerHTML = ""; 
    
    menucat.forEach((item) => 
    {
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

        if (ccart.find((cartItem) => item.name === cartItem.name)) 
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

        card.onclick = () => addToCart(item.name);

        cardBody.appendChild(title);
        cardBody.appendChild(price);

        menuCard.appendChild(card);
    });
}

// provides type,description of a function parameter
/**
 * 
 * @param {string} category 
 */

// Receive trigger from HTML
function receivetrgr(category)
{
    document.getElementById("menucat_id").innerText=category;
    console.log("Menu Title: ",category);

    const menucat = meal.filter((food) => food.category === category);
    console.log("menucat is: ",menucat)
    displayMenuList(menucat);
}

// provides type,description of a function parameter
/**
 * 
 * @param {string} itn 
 * @returns 
 */

function addToCart(itn)
{
    console.log(itn);
    mealselect=meal.find((item) => item.name === itn);//locates item name
    if (!mealselect?.name)
    {
        alert("Meal is not found!");
        return;
    }
    const addToCartDiv = document.getElementById(mealselect.name);
    if (!mealselect.isItemInCart)
    {
        mealselect.isItemInCart = true;
        if (addToCartDiv)
        {
            addToCartDiv.classList.add("item-in-cart");
            ccart.push(mealselect);
            document.getElementById("total-cart-items").innerText = ccart.length
            ? ccart.length: "";
        }
    }else
    {
        removecartitem(mealselect, addToCartDiv);
    }
}

// Param provides type description for the function parameter
/**
 * @param {MealSelect} mealselect
 * @param {HtmlElement} addToCartDiv
 */
function removecartitem(mealselect, addToCartDiv)
{
    mealselect.isItemInCart = false;
    ccart.splice(ccart.indexOf(mealselect),1);
    addToCartDiv.classList.remove("item-in-cart");
    document.getElementById("total-cart-items").innerText = ccart.length? ccart.length: "";
}


function cartempty()
{
    ccart = [];    
}

function cartdisp()
{
    const cardmen = document.getElementById("menucrd");
    cardmen.innerHTML = "";

    document.getElementById("menucat_id").innerText = '';

    const cartbod = document.createElement("div");
    cartbod.className = "cart-body";

    // Create the heading
    const heading = document.createElement("h2");
    heading.textContent = "Items Added in Your Cart";
    cartbod.appendChild(heading);

    // Create the table
    const table = document.createElement("table");
    table.className = "table table-borderless";

    // Create the table head
    const thead = document.createElement("thead");
    const headRow = document.createElement("tr");

    const headItem1 = document.createElement("th");
    headItem1.scope = "col";
    headItem1.textContent = "Item";

    const headItem2 = document.createElement("th");
    headItem2.scope = "col";
    headItem2.textContent = "Name";

    const headItem3 = document.createElement("th");
    headItem3.scope = "col";
    headItem3.textContent = "Price ($)";

    headRow.appendChild(headItem1);
    headRow.appendChild(headItem2);
    headRow.appendChild(headItem3);
    thead.appendChild(headRow);
    table.appendChild(thead);

    // Create the table body
    const tbody = document.createElement("tbody");

    // Adding items in cart dynamically
    ccart.forEach((item) => {
        const row = document.createElement("tr");

        const logoCell = document.createElement("td");
        const logoImg = document.createElement("img");
        logoImg.src = item.logo;
        logoImg.className = "cart-img-logo";
        logoImg.alt = "Food Logo";
        logoCell.appendChild(logoImg);

        const nameCell = document.createElement("td");
        nameCell.textContent = item.name;

        const priceCell = document.createElement("td");
        priceCell.textContent = item.price;

        row.appendChild(logoCell);
        row.appendChild(nameCell);
        row.appendChild(priceCell);

        tbody.appendChild(row);
    });

    // Create the total row
    const totalRow = document.createElement("tr");

    const emptyCell = document.createElement("td");
    const emptyCell2 = document.createElement("td");
    const totalCell = document.createElement("td");

    const totalAmt = ccart.reduce(
        (total, item) => total + Number(item.price.substring(1)),
        0
    );
    totalCell.textContent = "Total Amount : $" + totalAmt;

    totalRow.appendChild(emptyCell);
    totalRow.appendChild(emptyCell2);
    totalRow.appendChild(totalCell);

    tbody.appendChild(totalRow);

    table.appendChild(tbody);
    cartbod.appendChild(table);
    cardmen.appendChild(cartbod);
}








