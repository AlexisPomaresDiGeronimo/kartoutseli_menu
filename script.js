const menuData = {
  "Πρωινά":[
    {name:"Τοστ με τυρί",price:"2,50€"},
    {name:"Τοστ με τυρί & γαλοπούλα",price:"3,00€"},
    {name:"Κρουασάν βουτύρου",price:"3,00€"},
    {name:"Γιαούρτι με μέλι & καρύδια",price:"6,50€"},
    {name:"Πίτα ημέρας",price:"8,00€"}
  ],

  "Καφέδες":[
    {name:"Ελληνικός μονός",price:"2,00€"},
    {name:"Ελληνικός διπλός",price:"3,00€"},
    {name:"Espresso",price:"2,00€"},
    {name:"Freddo Espresso",price:"3,50€"},
    {name:"Freddo Cappuccino",price:"4,00€"},
    {name:"Flat White",price:"4,00€"}
  ],

  "Ροφήματα":[
    {name:"Φρέσκος χυμός πορτοκάλι",price:"5,00€"},
    {name:"Φρέσκος ανάμεικτος χυμός",price:"6,50€"},
    {name:"Σοκολάτα κρύα/ζεστή",price:"4,00€"},
    {name:"Ζεστό Τσάι",price:"3,50€"}
  ],

  "Αναψυκτικά":[
    {name:"Coca Cola",price:"2,50€"},
    {name:"Sprite",price:"2,50€"},
    {name:"Τόνικ",price:"2,50€"},
    {name:"Νερό 500ml",price:"0,50€"},
    {name:"Νερό 1.5lt",price:"1,50€"}
  ],

  "Τσίπουρο":[
    {name:"Δεκαράκι",price:"12,00€"},
    {name:"Τσιλή",price:"10,00€"},
    {name:"Ηδονικό",price:"12,00€"}
  ],

  "Ούζο":[
    {name:"Βαρβαγιάννη",price:"12,00€"},
    {name:"Πλωμάρι",price:"10,00€"},
    {name:"Μίνι",price:"10,00€"}
  ],

  "Μπύρες":[
    {name:"Άλφα 330ml",price:"3,50€"},
    {name:"Μάμος 330ml",price:"3,50€"},
    {name:"Fix 330ml",price:"3,50€"},
    {name:"Κερκυραϊκή Pilsner",price:"5,00€"}
  ],

  "Μεζέδες":[
    {name:"Χωριάτικη",price:"9,50€"},
    {name:"Ντάκος",price:"9,00€"},
    {name:"Τζατζίκι",price:"5,00€"},
    {name:"Πατάτες τηγανητές",price:"4,50€"},
    {name:"Καλαμαράκια",price:"14,00€"},
    {name:"Γαρίδες σαγανάκι",price:"14,00€"}
  ],

  "Ποτά":[
    {name:"Ρούμι",price:"8,00€"},
    {name:"Τζιν",price:"8,00€"},
    {name:"Βότκα",price:"8,00€"},
    {name:"Ουίσκι",price:"8,00€"}
  ],

  "Επιδόρπια":[
    {name:"Παγωτό",price:"2,50€"}
  ]
};

const menu = document.getElementById("menu");
const categories = document.getElementById("categories");

Object.keys(menuData).forEach(category => {

    const btn = document.createElement("button");
    btn.textContent = category;
    btn.onclick = () =>
      document.getElementById(category)
      .scrollIntoView({behavior:"smooth"});
    categories.appendChild(btn);

    const section = document.createElement("section");
    section.className = "section";
    section.id = category;

    section.innerHTML = <h2>${category}</h2>;

    menuData[category].forEach(item=>{
        section.innerHTML += 
            <div class="item">
                <div>
                    <div class="item-name">${item.name}</div>
                    ${item.desc ? <div class="item-desc">${item.desc}</div>: ""}
                </div>
                <div class="price">${item.price}</div>
            </div>
       ;
    });

    menu.appendChild(section);
});
