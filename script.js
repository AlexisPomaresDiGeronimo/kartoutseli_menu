const menuData = {

    "Καφέδες":[
        ["Espresso","2,00€"],
        ["Freddo Espresso","3,50€"],
        ["Freddo Cappuccino","4,00€"],
        ["Cappuccino","3,00€"],
        ["Φραπές","3,50€"]
    ],

    "Αναψυκτικά":[
        ["Coca Cola","2,50€"],
        ["Sprite","2,50€"],
        ["Τόνικ","2,50€"],
        ["Σόδα","2,50€"]
    ],

    "Μπύρες":[
        ["Άλφα","3,50€"],
        ["Μάμος","3,50€"],
        ["Fix","3,50€"],
        ["Φίσερ","4,00€"]
    ],

    "Μεζέδες":[
        ["Χωριάτικη","9,50€"],
        ["Ντάκος","9,00€"],
        ["Τζατζίκι","5,00€"],
        ["Πατάτες","4,50€"],
        ["Καλαμαράκια","14,00€"],
        ["Γαρίδες Σαγανάκι","14,00€"]
    ]

};

const menu = document.getElementById("menu");
const categories = document.getElementById("categories");

for(const category in menuData){

    const button = document.createElement("button");
    button.textContent = category;

    categories.appendChild(button);

    const section = document.createElement("section");
    section.className = "category";

    const id = category
        .toLowerCase()
        .replaceAll(" ","-");

    section.id = id;

    button.onclick = () => {
        section.scrollIntoView({
            behavior:"smooth"
        });
    };

    let html = <h2>${category}</h2>;

    menuData[category].forEach(item => {

        html += 
        <div class="item">
            <span>${item[0]}</span>
            <span class="price">${item[1]}</span>
        </div>
        ;

    });

    section.innerHTML = html;

    menu.appendChild(section);
}
