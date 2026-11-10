# หมอบอท (Dr. Bot) — Booth website for the project show

A Thai / English website for primary school kids that explains our AI mango bruise detection project (IATE team, School of Agro-Industry, Mae Fah Luang University).

| File | Page |
|---|---|
| `index.html` | Landing page: the project in 3 picture cards, and links to each activity |
| `learn.html` | How mangoes get bruised, the bruise-darkening slider, how the AI learns, and the "You vs Dr. Bot" mango quiz (`learn.html#game`) |
| `mango.html` | Mango catch game: good mango +1, bruised mango −1, target score wins a prize |

## Run it

Plain HTML, CSS and JavaScript with no build step. Open `index.html` in a browser, or serve the folder:

```bash
cd mango-innofest
python3 -m http.server 8080
# open http://localhost:8080
```

Fonts (Itim, Mali) load from Google Fonts, so the first load needs internet. Without internet the pages fall back to system Thai fonts.

## Booth notes

- **Language:** the ไทย | EN switch is in the header. The choice is saved per device and shared across pages.
- **Mango game settings:** use the "ตั้งค่าสำหรับทีมงาน / Team settings" button below the game to change the target score (default 7), round time, speed and how many bruised mangoes fall. Saved per device.
- All pictures are drawn as cartoons. No camera use on the website.
