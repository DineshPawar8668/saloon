# Akshaay’s Unisex Salon & Academy — website

Static React (Vite) site. Fully responsive (desktop, tablet, phone).

## Run
```bash
npm install
npm run dev      # local dev at http://localhost:5173
npm run build    # production build in dist/
```

## Where things are
- `src/data.js` — all content (services, reviews, looks, phone, address, slots). Replace with API calls in the dynamic phase.
- `src/components/` — one file per section.
- `src/assets/images/` — salon photos (cropped from Google Maps). Replace with original high-res photos from the salon, same filenames.
- `src/components/Booking.jsx` — form validates and offers WhatsApp confirmation; add your API POST where marked `TODO`.

## Pending from salon
- Original high-resolution photos
- Instagram handle (`SALON.instagram` in `data.js`)
- Opening time and actual slots, academy course details



















<!-- ================================ --> web prompt
Main Akshaay's Unisex Salon & Academy (Nashik) ke liye React (Vite) website bana raha hoon. Abhi website static hai, baad mein dynamic karni hai. Project zip attach kar raha hoon.

Salon details:
- Address: Shop no.1, Ishwar Pratishtha Building, Pujya Sri Sri Ravishankar Marg, Vidhate Nagar, Wadala Gaon, Nashik 422006
- Phone/WhatsApp: 093719 99355 | Open daily till 10 PM, appointment only
- Google rating 4.7 (226 reviews) | LGBTQ+ friendly, wheelchair accessible
- Owner Akshay, 14+ years experience. Specialities: face-shape haircuts, pixie/short cuts, bleach-free balayage, highlights, keratin, hair botox, protein treatment, academy courses

Ab tak kya bana hai:
- v1: Green/rose/brass theme, Bodoni Moda + Jost fonts
- v2 (latest): Dark & gold classic template, Cormorant Garamond + Montserrat fonts. Isme top info bar, sticky nav, 3-slide hero slider, feature cards, about collage, 6 service cards + price list, stats band, gallery with lightbox, academy modules, testimonials slider, booking form (validation + WhatsApp confirm), aur 4-column footer hai
- Saara content src/data.js mein hai, aur har section ka alag component src/components/ mein
- Photos Google Maps screenshots se crop ki hain (low-res), salon se original HD photos milne baaki hain

Pending: Instagram handle, opening time aur exact slots, academy course details, HD photos.

Next step: [yahan likho kya karna hai, jaise v2 final karke dynamic banana / backend + booking API / deploy]