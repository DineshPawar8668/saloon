// All site content lives here. Later, swap these exports for API/CMS calls.
import hero from "./assets/images/hero.jpg";
import stylist from "./assets/images/stylist.jpg";
import akshayStyling from "./assets/images/akshay-styling.jpg";
import reception from "./assets/images/reception.jpg";
import interior from "./assets/images/interior.jpg";
import foils from "./assets/images/foils.jpg";
import balayageBA from "./assets/images/look-balayage-ba.jpg";
import smoothBA from "./assets/images/look-smooth-ba.jpg";
import keratin from "./assets/images/look-keratin.jpg";
import gloss from "./assets/images/look-gloss.jpg";
import chestnut from "./assets/images/look-chestnut.jpg";
import waves from "./assets/images/look-waves.jpg";
import ombreFix from "./assets/images/look-ombre-fix.jpg";
import ashBA from "./assets/images/look-ash-ba.jpg";
import clientHappy from "./assets/images/client-happy.jpg";

export const IMAGES = { hero, stylist, akshayStyling, reception, interior, foils, clientHappy };

export const SALON = {
  name: "Akshaay",
  devanagari: "अक्षयं",
  full: "Akshaay’s Unisex Salon & Academy",
  phone: "093719 99355",
  tel: "+919371999355",
  whatsapp: "919371999355",
  addressLines: [
    "Shop no.1, Ishwar Pratishtha Building",
    "Pujya Sri Sri Ravishankar Marg, Vidhate Nagar",
    "Wadala Gaon, Nashik, Maharashtra 422006",
  ],
  rating: 4.7,
  reviewCount: 226,
  mapsUrl:
    "https://www.google.com/maps/search/?api=1&query=Akshaay+Salon+Ravishankar+Marg+Nashik",
  instagram: "#", // TODO: add Instagram handle
};

export const NAV = [
  { label: "About", id: "about" },
  { label: "Services", id: "services" },
  { label: "Looks", id: "looks" },
  { label: "Academy", id: "academy" },
  { label: "Reviews", id: "reviews" },
  { label: "Visit", id: "visit" },
];

export const SERVICES = [
  {
    group: "Cut & style",
    items: [
      { name: "Signature haircut", desc: "Cut planned around your face shape, hair texture and how you style it at home." },
      { name: "Short cuts & pixie", desc: "Bobs, pixies and crops, the cuts most salons in Nashik shy away from." },
      { name: "Men’s cut & beard", desc: "Clean fades, textured crops and beard shaping." },
      { name: "Kids’ haircut", desc: "Patient, quick and fuss-free for little ones." },
    ],
  },
  {
    group: "Colour",
    items: [
      { name: "Balayage", desc: "Hand-painted, soft-grown dimension, often done without bleach." },
      { name: "Highlights & lowlights", desc: "Fine foils or chunky panels, matched to your skin tone." },
      { name: "Global colour", desc: "Full coverage, grey blending and shade refresh." },
      { name: "Fashion colour", desc: "Copper, burgundy, ash and pastel shades." },
    ],
  },
  {
    group: "Treatments",
    items: [
      { name: "Keratin & smoothening", desc: "Frizz-free, glossy hair that stays manageable for months." },
      { name: "Hair botox", desc: "Deep repair for dry, damaged and colour-treated lengths." },
      { name: "Protein treatment", desc: "Restores strength and shine to weak hair." },
      { name: "Facials & skin", desc: "Cleanups and facials with professional-grade products." },
    ],
  },
];

export const LOOKS = [
  { img: balayageBA, title: "Balayage", note: "Before and after", tall: true },
  { img: keratin, title: "Glass-finish keratin", note: "Smoothening" },
  { img: waves, title: "Soft bronde waves", note: "Colour and style", tall: true },
  { img: smoothBA, title: "Frizz to sleek", note: "Before and after" },
  { img: chestnut, title: "Chestnut gloss", note: "Colour and botox", tall: true },
  { img: ombreFix, title: "Faded ends corrected", note: "Before and after", tall: true },
  { img: gloss, title: "Mirror shine", note: "Treatment" },
  { img: ashBA, title: "Ash brown refresh", note: "Before and after" },
];

export const ACADEMY = [
  { title: "Foundation cutting", desc: "Sectioning, elevation, classic men’s and women’s cuts." },
  { title: "Advanced cutting", desc: "Layers, bobs, pixies and texturising." },
  { title: "Colour theory & balayage", desc: "Formulation, foils, painting and toning." },
  { title: "Treatments", desc: "Keratin, smoothening, botox and protein work." },
];

export const REVIEWS = [
  { name: "Priyanka P", when: "8 months ago", text: "With a hair length up to my waist, I was definitely hesitant to get it cut. But Akshay did a fabulous job of not just giving a haircut but changing my look. Very honest, polite and professional artist." },
  { name: "Medha", tag: "Local Guide", when: "3 months ago", text: "I wanted a pixie cut. Not everyone can pull it off and even I was a bit skeptical. I’m very happy with the haircut. I must say Akshaay is very talented." },
  { name: "Aditi More", when: "3 months ago", text: "The haircut was exactly what I wanted, and it really suited my face and hair type. My hair feels healthier, looks more stylish, and is much easier to manage after every visit." },
  { name: "Zainab Rangwala", tag: "Local Guide", when: "3 years ago", text: "I went for balayage hair colour. He did it much better than my expectations, didn’t use any bleach on my hair and still gave me the look that I wanted." },
  { name: "Kushal Jadhav", when: "9 months ago", text: "I’ve always had a great haircut. Akshay really understands the face shape and structure and recommends the haircut. Totally recommended." },
  { name: "Heena Sheikh", tag: "Local Guide", when: "3 years ago", text: "Akshay listened to all my hair requirements. As a curly girl, I always needed a salon I can trust for all kinds of services." },
  { name: "Tany", when: "5 months ago", text: "The best salon I’ve tried, not just in Nashik but India. Perfect cut, loved it." },
  { name: "Nitish Nair", when: "4 years ago", text: "I have been their customer for the past 8 years and I can’t even think about going somewhere else. Akshay understands every bit of the customer requirement." },
];

export const SLOTS = ["11:00 AM", "12:30 PM", "2:00 PM", "3:30 PM", "5:00 PM", "6:30 PM", "8:00 PM", "9:00 PM"];
