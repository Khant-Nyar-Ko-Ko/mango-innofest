# บอทมะม่วง (Mango Bot) — Booth website for the project show

A Thai / English website for primary school kids that explains our AI mango bruise detection research website (IATE team, School of Agro-Industry, Mae Fah Luang University) in easy words. Mango Bot is only a cartoon helper for the booth; the real project is a research tool for MFU, so this site does not link to it.

| File | Page |
|---|---|
| `index.html` | Landing page: the project in 3 picture cards, and links to each activity |
| `learn.html` | How mangoes get bruised, the bruise-darkening slider, how the AI learns, and the 6 steps of the research website, and the "You vs Mango Bot" mango quiz (`learn.html#game`) |
| `mango.html` | Mango catch game: good mango +1, bruised mango −1, target score wins a prize |
| `assets/` | Mango Bot icons and the share preview picture (`og-image.png`) |
| `sitemap.xml`, `robots.txt`, `site.webmanifest` | Search engine sitemap, robots rules, and home-screen app settings for https://mango-innofest.vercel.app |

## Run it

Plain HTML, CSS and JavaScript with no build step. Open `index.html` in a browser, or serve the folder:

```bash
cd mango-innofest
python3 -m http.server 8080
# open http://localhost:8080
```

Everything (fonts included) is inside this folder, so the site does not need any online resources.

## Works offline (booth tablet)

`sw.js` saves the whole site on the device the first time it opens with internet. Before the show, open `https://mango-innofest.vercel.app` once on the booth tablet while you have Wi-Fi (opening any one page saves all 3). After that it works with no internet. When the site is updated, the tablet picks up the new version the next time it is opened with internet, and shows it on the visit after that.

## Booth notes

- **Language:** the ไทย | EN switch is in the header. The choice is saved per device and shared across pages.
- **Mango game:** no settings panel. Target 15 points in 30 seconds, speed and bruised-mango share are fixed in `mango.html` (`cfg`, `SPEED`, `BAD`).
- All pictures are drawn as cartoons. No camera use on the website.
