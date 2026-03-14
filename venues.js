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
    name: "Chop Steakhouse & Bar",
    neighbourhood: "Richmond",
    type: "lounge",
    emoji: "🥩",
    days: ["mon", "tue", "wed", "thu", "fri", "sat", "sun"],
    notes: "Lounge only — not available in main dining room",
    featured: false,
    phone: "",
    website: "https://www.chopsteakhouse.com",
    hours: [
      {
        startTime: "15:00",
        endTime: "18:00",
        categories: [
          {
            name: "Drinks",
            items: ["Ask your server for current drink specials"]
          },
          {
            name: "Appetizers",
            items: ["Ask your server for current food specials"]
          }
        ]
      },
      {
        startTime: "21:00",
        endTime: "24:00",
        categories: [
          {
            name: "Drinks",
            items: ["Ask your server for current late night drink specials"]
          },
          {
            name: "Appetizers",
            items: ["Ask your server for current late night food specials"]
          }
        ]
      }
    ]
  },

  // ── ADD NEW VENUES ABOVE THIS LINE ───────────────────────