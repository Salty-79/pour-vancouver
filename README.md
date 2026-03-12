# Pour Vancouver 🍺

Your Vancouver happy hour finder. Live in minutes.

---

## Files in this folder

| File | What it does |
|------|-------------|
| `index.html` | The entire website — design, layout, filters |
| `venues.js` | Your venue data — **this is the only file you edit** |

---

## How to go live (free, 10 minutes)

### Step 1 — Upload to GitHub
1. Go to github.com and sign in
2. Click the **+** icon (top right) → **New repository**
3. Name it: `pour-vancouver`
4. Set it to **Public**
5. Click **Create repository**
6. Click **uploading an existing file**
7. Drag both `index.html` and `venues.js` into the upload box
8. Click **Commit changes**

### Step 2 — Turn on GitHub Pages (free hosting)
1. In your repository, click **Settings**
2. Click **Pages** in the left sidebar
3. Under "Source" select **Deploy from a branch**
4. Set branch to **main**, folder to **/ (root)**
5. Click **Save**
6. Wait 2 minutes, then visit:
   **https://YOUR-GITHUB-USERNAME.github.io/pour-vancouver**

That's it. Your site is live. 🎉

---

## How to add venues (no coding needed)

Open `venues.js` in any text editor (Notepad, TextEdit, or VS Code).

Copy this block and fill it in:

```
{
  name: "The Revel Room",
  neighbourhood: "Gastown",
  type: "bar",
  emoji: "🍺",
  days: ["mon", "tue", "wed", "thu", "fri"],
  startTime: "15:00",
  endTime: "18:00",
  deals: [
    "$5 domestic beers",
    "Half-price nachos"
  ],
  featured: false
},
```

Paste it before the last `];` line, save the file, and re-upload to GitHub.

### Days reference
| Code | Day |
|------|-----|
| mon | Monday |
| tue | Tuesday |
| wed | Wednesday |
| thu | Thursday |
| fri | Friday |
| sat | Saturday |
| sun | Sunday |

### Time format (24-hour)
| Display | Code |
|---------|------|
| 3:00 PM | "15:00" |
| 5:30 PM | "17:30" |
| 6:00 PM | "18:00" |
| 9:00 PM | "21:00" |

---

## Featured listings (your first revenue stream)

To mark a venue as a paid featured listing, change:
```
featured: false
```
to:
```
featured: true
```

Featured venues appear first in results and get a gold ⭐ badge.

---

## Questions?
Built with Pour Vancouver. Ask Claude to help you make any changes.
