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
