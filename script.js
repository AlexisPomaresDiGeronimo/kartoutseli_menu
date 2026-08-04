const menu = document.getElementById("menu");
const categories = document.getElementById("categories");

Object.keys(menuData).forEach(category => {

    const btn = document.createElement("button");

    btn.textContent = category;

    btn.addEventListener("click", () => {

        document
            .getElementById(category)
            .scrollIntoView({
                behavior: "smooth"
            });

    });

    categories.appendChild(btn);

    const section = document.createElement("section");

    section.className = "category";
    section.id = category;

    section.innerHTML =
        <h2>${category}</h2>;

    menuData[category].forEach(item => {

        section.innerHTML += 
            <div class="item">
                <span>${item[0]}</span>
                <span>${item[1]}</span>
            </div>
        ;

    });

    menu.appendChild(section);

});

document
.getElementById("menuBtn")
.addEventListener("click", () => {

    document
    .getElementById("menu")
    .scrollIntoView({
        behavior: "smooth"
    });

});
