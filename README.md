# Shri Swami Samartha Kushan Maker — Website (Bilingual: English & मराठी)

Modern, trustworthy, high-converting business website for **Shri Swami Samartha Kushan Maker**, a custom cushion (_kushan_), traditional cotton mattress (_gadi_), sofa repair, and upholstery workshop located in Nashik, Maharashtra.

---

## 🌟 What's New & Upgraded

1. **100% Real Client Work Showcase (अस्सल काम):**
   - **Replaced All Stock/Internal Imagery:** Every single placeholder has been replaced with authentic, verified photographs of real projects completed by Shri Swami Samartha Kushan Maker in Nashik.
   - **AI-Powered Visual Recognition:** Processed 25 real workshop photos using Google Gemini Vision AI (`gemini-3.5-flash-lite`), categorizing them into Sofa Cushions, Traditional Cotton Mattresses, Reupholstery, and Custom Designer Curtains.
   - **Expanded 12-Item Portfolio Grid:** Filterable by *All Works*, *Sofa Cushions (कुशन)*, *Gadi & Mattresses (गादी)*, *Sofa Repair & Upholstery*, and *Designer Curtains (पडदे)*.
   - **Dual-Language Lightbox Modal:** Full Marathi (देवनागरी) and English titles, descriptions, and dynamic WhatsApp inquiry routing for each real design.

2. **Live Interactive Map & Google Maps Integration:**
   - **Interactive Map Embed:** Clean embedded map of Mhasrul Gaon / Makhmalabad Link Road, Nashik.
   - **Direct Google Maps Navigation:** One-tap button opening Google Maps directions to the exact workshop coordinates in Mhasrul, Nashik (Opposite Soham Misal).
   - **Local Trust Indicators:** Displays ★ 4.9 Rating badge and local neighborhood service coverage across Nashik.

3. **Bilingual Engine (English & मराठी):**
   - **One-Click Instant Toggle:** Switch between English and Marathi seamlessly from the sticky desktop header, mobile header, or the slide-in mobile drawer.
   - **Persistent Language Preference:** Stores choice in `localStorage` so visitors stay in their preferred language.
   - **Authentic Local Marathi Copy:** Professionally crafted Marathi translations reflecting colloquial Nashik terminology (_कुशन, कापूस गादी, कापूस पिंजणे, लोड, तक्के, सोफा अपहोल्स्ट्री_).
   - **Localized Devanagari Typography:** Paired with Google Fonts `Noto Sans Devanagari` and `Yantramanav` for natural readability on all screen resolutions.
   - **Smart WhatsApp Message Routing:** Pre-fills WhatsApp inquiry messages in Marathi or English based on the selected language!

1. **Mobile-First & Ultra-Responsive UX:**
   - **320px to 4K Ultra-Wide Support:** Tested for iPhone SE (320px–375px), modern iPhones/Androids (390px–430px), tablets (768px–1024px), and large desktop monitors.
   - **iOS Safe-Area Optimization:** Bottom action bar respects notch/home-bar safe-area insets (`env(safe-area-inset-bottom)`).
   - **No Auto-Zoom Input Glitches:** Form inputs calibrated to 16px font-size on mobile viewports to prevent unwanted Safari zooming.
   - **Dual Mobile Sticky Actions:** Fixed bottom bar offering immediate 1-tap **"Call Workshop"** (`tel:+919271253505`) and **"WhatsApp Consultation"** (`wa.me/919271253505`).
   - **Slide-Out Mobile Drawer:** Includes language switcher, full navigation links, and fast contact actions.

1. **Strict Zero-Pricing Policy Maintained:**
   - Zero currency symbols (`₹`/`$`), rate cards, discount tags, or cost estimates. All traffic is routed directly to doorstep measurement and personalized WhatsApp consultation.

1. **Core Capabilities Featured:**
   - Custom Cushions (_Kushan_) & Sofa Sets
   - Traditional & Modern Mattresses (_Gadi_ — Pure Organic Cotton & Orthopedic Foam)
   - Sofa Repair, Refurbishing & Reupholstery
   - Cotton _Gadi_ Recarding & Machine Beating (_Kapus Pinjne_)
   - Pillows, Bolsters (_Takya_) & Diwan Sets
   - Commercial, Clinic & Hospital Rexine Seating
   - Interactive Sizing & Requirement Builder
   - Filterable Photo Showcase with Lightbox Modal
   - Nashik Neighborhood Service Coverage & Interactive FAQ

---

## 📁 Project Structure

```
├── index.html        # Semantic HTML5 page with Tailwind CSS CDN & Devanagari fonts
├── styles.css        # Custom artisan styling, safe-area paddings & Marathi typography
├── script.js         # Bilingual translation engine (EN/MR), lightbox & WhatsApp generator
└── README.md         # Documentation & deployment guide
```

---

## 🚀 How to Run Locally

```bash
# Using Python 3
python3 -m http.server 8080

# Or using Node.js
npx serve .
```

Visit `http://localhost:8080` in your browser.
