# mango-innofest: Mango Bot (บอทมะม่วง) booth website

## What this is
A kid-friendly website for our university project show (Innofest) at a primary school. Our project is an AI **mango** bruise detection system (team IATE, School of Agro-Industry, Mae Fah Luang University). The real system takes a photo of a mango on a plain background, removes the background, marks bruised areas orange and healthy areas green, gives fruit area / bruise area (cm²) / bruise %, and predicts the damage type: pendulum impact ("bumped") or transport vibration ("shaken"). The site explains it to kids aged about 6–12 and has two games. Mascot: a cartoon helper robot called "บอทมะม่วง" (TH) / "Mango Bot" (EN). It is NOT part of the real project and is not a doctor: the site must say it is just a cartoon helper and that the real project is the website https://iate-fruitbruise.com/ ("Fruit Bruising Detection"). Things the system does are done by "our website / the computer", not by Mango Bot. The site is about bruises on MANGOES, not on people.

## Files
- index.html: landing page. Hero about our website with Mango Bot saying hi, the project in 3 cards (problem: mangoes bruise easily / our idea: camera + AI paints bruise orange, healthy green, gives bruise % / who it helps: researchers, farmers, fruit sellers), a link to the real system (https://iate-fruitbruise.com/), 3 big links to the activities, safety notes.
- learn.html: what a mango bruise is (cut-mango diagram: skin, flesh, seed, brown bruised flesh), bruise-darkening slider (day 0–7: hard to see → light brown → brown → dark brown; mangoes can't heal), how our website works (the 6 real steps: upload → tidy up (resize/crop) → remove background → find the bruise (orange/green, %) → look closely (bump or shake) → save results; cat analogy with mango colours, plus the "white table = bumped, grey table = shaken" background mistake from our real training data), "You vs Mango Bot" quiz at learn.html#game (8 cartoon mango cards: brown / bump / shake bruises vs shadow, dirt, natural dots, unripe green, marker ink; Mango Bot (answering like the computer) gets the shadow and marker ink wrong ON PURPOSE to teach that AI makes mistakes), tips to keep mangoes from bruising.
- mango.html: canvas mango catch game. Good mango +1, bruised mango −1, score never below 0, 30 s rounds that speed up, target 7 points = prize (mango candy). Full screen is automatic (no button): tapping Start or Play again puts the HUD + stage in browser full screen (browsers only allow it after a tap, so it cannot start on page load). Staff exit with Esc; the end screen has a "← Back to home" link (falls back to filling the window where the Fullscreen API is blocked, e.g. iPhone Safari); the stage always keeps 4:3. Hidden "Team settings" panel changes target, round time, speed and bruised-mango ratio (saved in localStorage key "mango-cfg").

## Tech rules
- Plain HTML/CSS/JS, one self-contained file per page, no build step, no frameworks. Keep it that way.
- Fonts: Google Fonts "Itim" (display) and "Mali" (body), with Thai system font fallbacks.
- Bilingual Thai/English: a ไทย | EN toggle in every header. Language is saved in localStorage key "drbot-lang", shared across pages. Static text uses data-i18n (index/learn) or data-k (mango) attributes with an EN dictionary in the page script; Thai is the default and lives in the HTML. Any new text MUST get both Thai and English.
- Design: "sticker-book" style (3px navy outlines, offset hard shadows, rounded corners), colours as CSS tokens on :root with a dark-mode version. Keep big touch targets for small hands, and make it work on tablets and phones.
- Content rules: cartoon drawings only. Keep the "Mango Bot is just a cartoon; the real project is the website; computers can make mistakes so people check" and "be gentle with mangoes" messages. Facts about the system must match the live system at https://iate-fruitbruise.com/ and the user manual (~/Downloads/Mango_Bruise_Detection_System__User_Manual.pdf). Simple words a 7-year-old understands.
- Each page has a "← หน้าแรก / ← Home" link back to index.html.

## Run locally
python3 -m http.server 8080, then open http://localhost:8080

## Still to do
- Check the 3 project cards on index.html match what our real system does.
- Add team member names / university / logo ("Meet the team").
- Test the mango game with real kids and tune the target score.
- Optional: host on GitHub Pages and put a QR code on the poster.
