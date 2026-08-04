const menu = document.getElementById("menu");
const categories = document.getElementById("categories");

for (const category in menuData) {

    const section = document.createElement("section");

    section.className = "category";
    section.id = category;

    const button = document.createElement("button");
    button.textContent = category;

    button.onclick = () => {
        section.scrollIntoView({
            behavior: "smooth"
        });
    };

    categories.appendChild(button);

    section.innerHTML = <h2>${category}</h2>;

    menuData[category].forEach(item => {

        section.innerHTML += 
            <div class="item">
                <span>${item[0]}</span>
                <span>${item[1]}</span>
            </div>
        ;

    });

    menu.appendChild(section);
}
