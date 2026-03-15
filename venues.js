// ============================================================
//  POUR VANCOUVER — VENUE DATA
//
//  STRUCTURE: each happy hour window now has "categories"
//  instead of a flat "deals" list.
//
//  CATEGORIES: "Drinks" | "Appetizers" | "Mains" | "Desserts"
//  Add only the categories that apply — empty ones are skipped.
//
//  ITEM FORMAT: "Item name — $price"  (em dash, Title Case)
//
//  DAYS:  'mon' 'tue' 'wed' 'thu' 'fri' 'sat' 'sun'
//  TIMES: 24-hour — 3pm = "15:00", 9pm = "21:00", midnight = "24:00"
//  TYPE:  "bar" | "restaurant" | "brewery" | "lounge"
// ============================================================

const neighbourhoods = [
  "Gastown",
  "Yaletown",
  "Kitsilano",
  "Downtown",
  "Mount Pleasant",
  "East Van",
  "West End",
  "Cambie",
  "Richmond",
  "Kerrisdale",
  "Burnaby",
  "North Vancouver",
  "New Westminster",
  "South Granville",
  "Coal Harbour",
];

const venues = [

  {
    name: "Capo and The Spritz",
    neighbourhood: "Yaletown",
    type: "restaurant",
    emoji: "🍸",
    days: ["mon", "tue", "wed", "thu", "fri", "sat", "sun"],
    notes: "",
    featured: false,
    phone: "",
    website: "https://www.capoandspritz.com",
    hours: [
      {
        startTime: "15:00",
        endTime: "17:30",
        categories: [
          {
            name: "Drinks",
            items: [
              "House Bianco / House Rosso — $1/oz",
              "Classic Negroni — $10",
              "Cello Spritz — $10",
              "Campari Spritz — $10",
              "Aperol Spritz — $10",
              "Prosecco — $10",
              "Local Draft — $9",
              "Peroni — $10"
            ]
          },
          {
            name: "Appetizers",
            items: [
              "Gnocco Fritto & Bomba — $7",
              "Olive Miste — $7",
              "Meatballs — $16",
              "Calamari — $15",
              "Salumi Plate — $17",
              "Cheese Plate — $17"
            ]
          },
          {
            name: "Mains",
            items: [
              "Margherita — $14",
              "Rebel — $15",
              "Classic — $16",
              "Rigatoni alla Norma — $20"
            ]
          },
          {
            name: "Desserts",
            items: [
              "Gnocco Sweeto — $7"
            ]
          }
        ]
      }
    ]
  },

  

  {
  name: "The Flying Pig Yaletown",
  neighbourhood: "Yaletown",
  type: "restaurant",
  emoji: "🐖",
  days: ["tue", "wed", "thu", "fri", "sat", "sun"],
  notes: "See also: Monday hours differ — open 3pm to close",
  featured: false,
  phone: "",
  website: "https://theflyingpigvan.com/menu/#appy-hour",
  hours: [
    {
      startTime: "15:00",
      endTime: "18:00",
      categories: [
      {
        name: "Drinks",
        items: [
              "TFP Lager — $5.75",
              "TFP Pale Ale — $5.75",
              "SOMA Apple Cider — $9.50",
              "Starlino Spritz — $9.75",
              "Highballs — $6.25",
              "Pinot Gris — $6.75",
              "Merlot — $6.75",
              "Rosé — $9.75",
              "Sparkling Rosé — $9",
              "Grenache/Syrah — $9.25",
              "Pineapple Guava Waltz — $7.75",
              "Ginger Cherry Cola — $7.75",
              "Heineken — $5.75"
        ]
      },
      {
        name: "Appetizers",
        items: [
              "Classic Poutine — $11",
              "Jumbo Mac + Cheese — $11",
              "Braised Meatballs — $13.50",
              "Wild Salmon Cakes — $10.50",
              "Bison Carpaccio — $14.75",
              "Parmesan Truffle Fries — $9.75",
              "Coconut Prawns — $14.75",
              "Organic Beet + Arugula Salad — $14.75",
              "Cous Cous Salad a la Greque — $12.50"
        ]
      },
      {
        name: "Mains",
        items: [
              "PEI Mussels + Fries — $19.50",
              "Veal Milanaise Sandwich — $19",
              "Smash Burger — $16.50",
              "Crusted Ling Cod — $22",
              "Spaghetti + Meatballs — $19.50"
        ]
      }
      ]
    },
    {
      startTime: "21:00",
      endTime: "23:00",
      categories: [
      {
        name: "Drinks",
        items: [
              "TFP Lager — $5.75",
              "TFP Pale Ale — $5.75",
              "SOMA Apple Cider — $9.50",
              "Starlino Spritz — $9.75",
              "Highballs — $6.25",
              "Pinot Gris — $6.75",
              "Merlot — $6.75",
              "Rosé — $9.75",
              "Sparkling Rosé — $9",
              "Grenache/Syrah — $9.25",
              "Pineapple Guava Waltz — $7.75",
              "Ginger Cherry Cola — $7.75",
              "Heineken — $5.75"
        ]
      },
      {
        name: "Appetizers",
        items: [
              "Classic Poutine — $11",
              "Jumbo Mac + Cheese — $11",
              "Braised Meatballs — $13.50",
              "Wild Salmon Cakes — $10.50",
              "Bison Carpaccio — $14.75",
              "Parmesan Truffle Fries — $9.75",
              "Coconut Prawns — $14.75",
              "Organic Beet + Arugula Salad — $14.75",
              "Cous Cous Salad a la Greque — $12.50"
        ]
      },
      {
        name: "Mains",
        items: [
              "PEI Mussels + Fries — $19.50",
              "Veal Milanaise Sandwich — $19",
              "Smash Burger — $16.50",
              "Crusted Ling Cod — $22",
              "Spaghetti + Meatballs — $19.50"
        ]
      }
      ]
    }
  ]
  },

  {
  name: "The Flying Pig Yaletown",
  neighbourhood: "Yaletown",
  type: "restaurant",
  emoji: "🐖",
  days: ["mon"],
  notes: "See also: Tuesday through Sunday hours differ — open 3pm to 6pm and 9pm to 11pm",
  featured: false,
  phone: "",
  website: "https://theflyingpigvan.com/menu/#appy-hour",
  hours: [
    {
      startTime: "15:00",
      endTime: "23:00",
      categories: [
      {
        name: "Drinks",
        items: [
              "TFP Lager — $5.75",
              "TFP Pale Ale — $5.75",
              "SOMA Apple Cider — $9.50",
              "Starlino Spritz — $9.75",
              "Highballs — $6.25",
              "Pinot Gris — $6.75",
              "Merlot — $6.75",
              "Rosé — $9.75",
              "Sparkling Rosé — $9",
              "Grenache/Syrah — $9.25",
              "Pineapple Guava Waltz — $7.75",
              "Ginger Cherry Cola — $7.75",
              "Heineken — $5.75"
        ]
      },
      {
        name: "Appetizers",
        items: [
              "Classic Poutine — $11",
              "Jumbo Mac + Cheese — $11",
              "Braised Meatballs — $13.50",
              "Wild Salmon Cakes — $10.50",
              "Bison Carpaccio — $14.75",
              "Parmesan Truffle Fries — $9.75",
              "Coconut Prawns — $14.75",
              "Organic Beet + Arugula Salad — $14.75",
              "Cous Cous Salad a la Greque — $12.50"
        ]
      },
      {
        name: "Mains",
        items: [
              "PEI Mussels + Fries — $19.50",
              "Veal Milanaise Sandwich — $19",
              "Smash Burger — $16.50",
              "Crusted Ling Cod — $22",
              "Spaghetti + Meatballs — $19.50"
        ]
      }
      ]
    }
  ]
  },

{
  name: "Social Corner Yaletown",
  neighbourhood: "Yaletown",
  type: "restaurant",
  emoji: "🤵",
  days: ["mon", "tue", "wed", "thu", "sun"],
  notes: "See also: Friday & Saturday Late night hours differ — 10pm to close",
  featured: false,
  phone: "",
  website: "https://persesocialcorner.com/home/menu-social-corner/",
  hours: [
    {
      startTime: "14:30",
      endTime: "17:30",
      categories: [
      {
        name: "Drinks",
        items: [
              "Rosalinda Lager — $5",
              "Powell \"Ode de Citra\" Pale Ale — $5",
              "Punch Bowl IPA — $5",
              "Corona — $5",
              "Pink Radler — $5",
              "Sangria Blanco — $12",
              "Sangria Rosa — $12",
              "Sangria Tinta — $12",
              "Oaked Aged Negroni (Yaletown only) — $15",
              "The Old Fashioned — $15",
              "The Negroni — $15",
              "Ciclo Espresso Martini — $15",
              "Vivo Reserva Sauvignon Blanc (5oz) — $10",
              "Avenue Rosé (5oz) — $10",
              "Vivo Reserva Malbec (5oz) — $10"
        ]
      },
      {
        name: "Appetizers",
        items: [
              "Bombón (Yaletown only) — $9",
              "Costolette Greco — $9",
              "Hummus — $9",
              "Truffle Fries — $9",
              "Patatas Bravas — $9",
              "Warm Mixed Mediterranean Olives — $9",
              "Wagyu Beef Carpaccio — $19",
              "Calamari — $19",
              "Goat Cheese Salad — $19",
              "Social Corner Caesar — $19"
        ]
      },
      {
        name: "Mains",
        items: [
              "Gnocchi al Pomodoro — $19",
              "Margherita Pizza — $19",
              "Medaglioni al Tartufo e Funghi — $29",
              "Criminale Pizza — $29",
              "Sriracha e Brasato Pizza — $29",
              "The Burger — $29",
              "Pepperoni e Ricotta Pizza — $29",
              "Rigatone Bolognese — $29",
              "Lobster & Crab Ravioli — $39",
              "Risotto Burro e Sablefish — $39"
        ]
      }
      ]
    },
    {
      startTime: "21:00",
      endTime: "00:00",
      categories: [
      {
        name: "Drinks",
        items: [
              "Rosalinda Lager — $5",
              "Powell \"Ode de Citra\" Pale Ale — $5",
              "Punch Bowl IPA — $5",
              "Corona — $5",
              "Pink Radler — $5",
              "Sangria Blanco — $12",
              "Sangria Rosa — $12",
              "Sangria Tinta — $12",
              "Oaked Aged Negroni (Yaletown only) — $15",
              "The Old Fashioned — $15",
              "The Negroni — $15",
              "Ciclo Espresso Martini — $15",
              "Vivo Reserva Sauvignon Blanc (5oz) — $10",
              "Avenue Rosé (5oz) — $10",
              "Vivo Reserva Malbec (5oz) — $10"
        ]
      },
      {
        name: "Appetizers",
        items: [
              "Bombón (Yaletown only) — $9",
              "Costolette Greco — $9",
              "Hummus — $9",
              "Truffle Fries — $9",
              "Patatas Bravas — $9",
              "Warm Mixed Mediterranean Olives — $9",
              "Wagyu Beef Carpaccio — $19",
              "Calamari — $19",
              "Goat Cheese Salad — $19",
              "Social Corner Caesar — $19"
        ]
      },
      {
        name: "Mains",
        items: [
              "Gnocchi al Pomodoro — $19",
              "Margherita Pizza — $19",
              "Medaglioni al Tartufo e Funghi — $29",
              "Criminale Pizza — $29",
              "Sriracha e Brasato Pizza — $29",
              "The Burger — $29",
              "Pepperoni e Ricotta Pizza — $29",
              "Rigatone Bolognese — $29",
              "Lobster & Crab Ravioli — $39",
              "Risotto Burro e Sablefish — $39"
        ]
      }
      ]
    }
  ]
},
  
  // ── ADD NEW VENUES ABOVE THIS LINE ───────────────────────

  ];