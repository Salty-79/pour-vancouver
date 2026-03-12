// ============================================================
//  POUR VANCOUVER — VENUE DATA
//  HOW TO ADD A VENUE:
//  1. Copy one of the entries below
//  2. Paste it at the end of the list (before the last ] )
//  3. Fill in the details
//  4. Save the file — that's it!
//
//  DAYS: use any combo of: 'mon' 'tue' 'wed' 'thu' 'fri' 'sat' 'sun'
//  TIMES: use 24-hour format  e.g. 3pm = "15:00",  5:30pm = "17:30"
//  TYPE: "bar" | "restaurant" | "brewery" | "lounge"
//  FEATURED: set to true if the venue is a paid featured listing
//  EMOJI: pick one that fits the vibe 🍺🍷🍸🍹🥃🍻🍔🌮🍕
// ============================================================

const venues = [
// ============================================================
//  POUR VANCOUVER — VENUE DATA
//
//  HOW TO ADD A VENUE:
//  Copy one entry block, paste it before the final ];
//  Fill in the details and save.
//
//  DAYS:  'mon' 'tue' 'wed' 'thu' 'fri' 'sat' 'sun'
//  TIMES: 24-hour format — 3pm = "15:00", 9pm = "21:00", midnight = "24:00"
//  TYPE:  "bar" | "restaurant" | "brewery" | "lounge"
//  FEATURED: true = paid featured listing (shows first, gold badge)
//
//  MULTIPLE HAPPY HOUR WINDOWS:
//  Use the "hours" array — each window has startTime, endTime, and its own deals.
//
//  NOTES: Optional — use for things like "Lounge only" or "Bar seating only"
// ============================================================

// ── NEIGHBOURHOODS ──────────────────────────────────────────
// To add a new neighbourhood: just add a line here.
// It will automatically appear in the filter dropdown on the site.
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

// ── VENUES ──────────────────────────────────────────────────
const venues = [

  {
    name: "Chop Steakhouse & Bar",
    neighbourhood: "Richmond",
    type: "lounge",
    emoji: "🥩",
    days: ["mon", "tue", "wed", "thu", "fri", "sat", "sun"],
    notes: "Lounge only — not available in main dining room",
    featured: false,
    hours: [
      {
        startTime: "15:00",
        endTime: "18:00",
        deals: [
          "Happy hour drinks & appetizers",
          "Ask your server for current specials"
        ]
      },
      {
        startTime: "21:00",
        endTime: "24:00",
        deals: [
          "Late night happy hour drinks & bites",
          "Ask your server for current specials"
        ]
      }
    ]
  },

  // ADD MORE VENUES ABOVE THIS LINE
  // Copy the block below, fill it in, paste above:
  //
  // {
  //   name: "Venue Name",
  //   neighbourhood: "Gastown",
  //   type: "bar",
  //   emoji: "🍺",
  //   days: ["mon", "tue", "wed", "thu", "fri"],
  //   notes: "",
  //   featured: false,
  //   hours: [
  //     {
  //       startTime: "15:00",
  //       endTime: "18:00",
  //       deals: [
  //         "$5 domestic beers",
  //         "Half-price appetizers",
  //       ]
  //     }
  //   ]
  // },

];

  // ── EXAMPLE ENTRY (delete this and add real ones) ──────────
  {
    name: "Example Bar & Grill",
    neighbourhood: "Gastown",
    type: "bar",
    emoji: "🍺",
    days: ["mon", "tue", "wed", "thu", "fri"],
    startTime: "15:00",
    endTime: "18:00",
    deals: [
      "$5 domestic beers",
      "$6 house wine",
      "Half-price appetizers"
    ],
    featured: false
  },

  // ── ADD YOUR REAL VENUES BELOW THIS LINE ──────────────────

  // {
  //   name: "Venue Name Here",
  //   neighbourhood: "Gastown",        // Gastown | Yaletown | Kitsilano | Downtown | Mount Pleasant | East Van | West End | Cambie
  //   type: "bar",                     // bar | restaurant | brewery | lounge
  //   emoji: "🍺",
  //   days: ["mon", "tue", "wed", "thu", "fri"],
  //   startTime: "15:00",              // 3:00 PM in 24hr format
  //   endTime: "18:00",                // 6:00 PM in 24hr format
  //   deals: [
  //     "$5 domestic beers",
  //     "Half-price apps",
  //   ],
  //   featured: false                  // Change to true for paid featured listings
  // },
name: "Chop Steakhouse & Bar",
    neighbourhood: "Richmond",
    type: "lounge",
    emoji: "🍺",
    days: ["mon", "tue", "wed", "thu", "fri"],
    startTime: "15:00",
    endTime: "18:00",
    deals: [
      "$5 domestic beers",
      "$6 house wine",
      "Half-price appetizers"
    ],
    featured: false
  },
];
