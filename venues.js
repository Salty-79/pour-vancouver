// ============================================================
//  POUR VANCOUVER — VENUE DATA
//
//  NEW FIELDS AVAILABLE:
//  phone:   "+1 (604) 555-0123"   — optional, shows in drawer
//  website: "https://example.com" — optional, shows in drawer
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

  // ── ADD NEW VENUES ABOVE THIS LINE ───────────────────────
  //
  // {
  //   name: "Venue Name",
  //   neighbourhood: "Gastown",
  //   type: "bar",
  //   emoji: "🍺",
  //   days: ["mon", "tue", "wed", "thu", "fri"],
  //   notes: "",                        // optional
  //   featured: false,
  //   phone: "",                        // optional, e.g. "+1 (604) 555-0123"
  //   website: "",                      // optional, e.g. "https://example.com"
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
