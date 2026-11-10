# mango-innofest: Dr. Bot (หมอบอท) booth website

## What this is
A kid-friendly website for our university project show (Innofest) at a primary school. Our project is an AI bruise detection system. The site explains it to kids aged about 6–12 and has two games. Mascot: a robot called "หมอบอท" (TH) / "Dr. Bot" (EN).

## Files
- index.html: landing page. Hero with Dr. Bot, the project in 3 cards (problem / our idea: camera + AI / who it helps), 3 big links to the activities, safety notes.
- learn.html: what a bruise is (skin diagram), colour-change slider (day 0–14: red → blue-purple → green → yellow-brown → gone), how AI learns (look → think → answer, cat analogy, skin tones), "You vs Dr. Bot" quiz at learn.html#game (8 cartoon cards; Dr. Bot gets the shadow and marker ink wrong ON PURPOSE to teach that AI makes mistakes), bruise care tips.
- mango.html: canvas mango catch game. Good mango +1, bruised mango −1, score never below 0, 30 s rounds that speed up, target 7 points = prize (mango candy). Hidden "Team settings" panel changes target, round time, speed and bruised-mango ratio (saved in localStorage key "mango-cfg").

## Tech rules
- Plain HTML/CSS/JS, one self-contained file per page, no build step, no frameworks. Keep it that way.
- Fonts: Google Fonts "Itim" (display) and "Mali" (body), with Thai system font fallbacks.
- Bilingual Thai/English: a ไทย | EN toggle in every header. Language is saved in localStorage key "drbot-lang", shared across pages. Static text uses data-i18n (index/learn) or data-k (mango) attributes with an EN dictionary in the page script; Thai is the default and lives in the HTML. Any new text MUST get both Thai and English.
- Design: "sticker-book" style (3px navy outlines, offset hard shadows, rounded corners), colours as CSS tokens on :root with a dark-mode version. Keep big touch targets for small hands, and make it work on tablets and phones.
- Content rules: cartoon drawings only, never real injury photos. Keep the "Dr. Bot is not a real doctor" and "we don't keep your photos" messages. Simple words a 7-year-old understands.
- Each page has a "← หน้าแรก / ← Home" link back to index.html.

## Run locally
python3 -m http.server 8080, then open http://localhost:8080

## Still to do
- Check the 3 project cards on index.html match what our real system does.
- Add team member names / university / logo ("Meet the team").
- Test the mango game with real kids and tune the target score.
- Optional: host on GitHub Pages and put a QR code on the poster.
