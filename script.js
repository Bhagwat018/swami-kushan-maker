/**
 * Shri Swami Samartha Kushan Maker — Client-Side Logic & Bilingual Engine
 * Nashik, Maharashtra
 * Phone/WhatsApp: +91 92712 53505
 */

document.addEventListener('DOMContentLoaded', () => {
  const WHATSAPP_PHONE = '919271253505';

  // =========================================================================
  // 1. BILINGUAL TRANSLATION DICTIONARY (English & Marathi)
  // =========================================================================
  const i18n = {
    en: {
      langLabelToggle: 'मराठी',
      top_announcement: 'Doorstep Measurement & Fabric Catalog Visit Available Across Nashik',
      top_call_label: 'Call Now:',
      top_address: 'M.bad Link Rd, Vaiduwadi, Mhasrul Gaon',
      brand_sub: 'Kushan & Gadi Maker • Nashik',
      nav_services: 'Services',
      nav_spec: 'Custom Order Guide',
      nav_materials: 'Craftsmanship & Foam',
      nav_gallery: 'Work Showcase',
      nav_process: 'How It Works',
      nav_faq: 'FAQ',
      nav_contact: 'Location',
      nav_call: 'Call Now',
      nav_whatsapp: 'WhatsApp Us',

      // Hero Section
      hero_badge: "Nashik's Premier Custom Cushion & Mattress Workshop",
      hero_title_1: 'Custom Comfort Crafted to Perfection',
      hero_title_2: 'Cushions, Mattresses (Gadi) & Sofa Upholstery in Nashik',
      hero_desc: 'Tailored to your exact wooden frames, diwans, and luxury sofas. Handcrafted using high-density PU & orthopedic foam, pure cotton (kapus), and durable premium upholstery fabrics. Convenient doorstep measurement and fabric selection across Nashik.',
      hero_cta_measurement: 'Book Free Home Measurement',
      hero_cta_call: 'Call +91 92712 53505',
      trust_1: '100% Custom Dimensions',
      trust_2: 'Doorstep Visit in Nashik',
      trust_3: 'High-Density Foam & Cotton',
      trust_4: 'Prompt Local Delivery',
      craft_overlay_badge: 'Master Craftsmanship',
      craft_overlay_title: 'Custom Fit Guarantee',
      craft_overlay_desc: 'Every inch cut, stitched & verified by hand',
      badge_mhasrul: 'Mhasrul Workshop',
      badge_mhasrul_sub: 'Serving Panchavati & All Nashik',

      // Live Status
      status_open: 'Open Now • 9:00 AM – 9:00 PM',
      status_closed: 'Closed for the Night • Opens 9:00 AM',
      status_open_sub: 'Call directly or book home measurement visit',
      status_closed_sub: 'Message on WhatsApp anytime, we reply at 9 AM',

      // Services Section
      services_tag: 'Our Specialties',
      services_title: 'Tailored Furnishing Solutions',
      services_desc: 'From traditional heirloom cotton mattresses to modern modular sofa upholstery, we craft every piece with dedicated attention to comfort, longevity, and aesthetics.',
      
      s1_title: 'Custom Cushions (Kushan) & Sofa Sets',
      s1_desc: 'Made-to-order sofa cushions, chair pads, backrest pillows, diwan sets, and bay window seating tailored to exact wooden frames and room decor.',
      s1_t1: 'Exact Fit', s1_t2: 'High-Resilience Foam', s1_t3: 'Washable Covers',
      
      s2_title: 'Traditional & Modern Mattresses (Gadi)',
      s2_desc: 'Handcrafted pure cotton (kapus) gadi, high-density orthopedic foam mattresses, bonded foam cores, and custom cot sizing.',
      s2_t1: 'Pure Kapus', s2_t2: 'Orthopedic Firm', s2_t3: 'Any Bed Size',

      s3_title: 'Sofa Repair & Upholstery',
      s3_desc: 'Complete sofa foam replacement, webbing & spring repair, tear restoration, and fabric/leatherette reupholstering to make old furniture brand new.',
      s3_t1: 'Foam Renewal', s3_t2: '500+ Fabrics', s3_t3: 'Spring Tightening',

      s4_title: 'Cotton Gadi Recarding (Kapus Pinjne)',
      s4_desc: 'Bring flat or compressed cotton mattresses back to fluffy life. Machine carding, dust removal, extra pure cotton addition, and durable new cloth casing stitching.',
      s4_t1: 'Fresh Carding', s4_t2: 'Fluffy Rebuild', s4_t3: 'New Outer Fabric',

      s5_title: 'Pillows, Bolsters (Takya) & Diwans',
      s5_desc: 'Round and square bolsters (takya), diwan backrest wedges, tufted pillow sets, and mattress protectors in coordinated patterns.',
      s5_t1: 'Round Bolsters', s5_t2: 'Diwan Sets', s5_t3: 'Microfiber & Cotton',

      s6_title: 'Custom Designer Curtains & Seating',
      s6_desc: 'Tailored window and door curtains, sheer drapery, eyelet pleats, clinic exam beds, and heavy-duty office seating reupholstery.',
      s6_t1: 'Designer Curtains', s6_t2: 'Precision Pleats', s6_t3: 'Clinic Rexine',

      card_cta: 'Get Quote on WhatsApp',

      // Custom Order Builder
      spec_tag: 'Quick Specification Assistant',
      spec_title: 'Tell Us Your Furniture Sizing & Requirements',
      spec_desc: 'Choose your preferred materials and enter your locality. We will generate a structured specification sheet and send it directly to our master artisan on WhatsApp for immediate review and consultation.',
      spec_lbl_1: '1. Furniture / Product Needed',
      spec_lbl_2: '2. Approximate Size or Setup',
      spec_lbl_3: '3. Preferred Core Filling',
      spec_lbl_4: '4. Fabric / Cover Style',
      spec_lbl_5: '5. Your Locality in Nashik',
      spec_lbl_6: '6. Doorstep Measurement Visit',
      spec_opt_home: 'Yes, Visit Home',
      spec_opt_self: 'I Have Sizes',
      spec_lbl_name: 'Your Name',
      spec_lbl_phone: 'Mobile Number',
      spec_lbl_notes: 'Any Special Instructions or Existing Frame Details',
      spec_btn: 'Send Specification via WhatsApp',
      spec_subtext: 'Opens WhatsApp directly with your filled details. No waiting, no spam.',

      // Materials & Why Choose Us
      craft_tag: 'The Artisan Standard',
      craft_title: 'Why Nashik Families & Decorators Rely On Us',
      craft_desc: 'Unlike generic store-bought furniture where foam sags within months, our custom-built cushions and mattresses are tailored to your physical comfort and exact wooden frames.',
      craft_overlay_left_title: 'Unmatched Durability',
      craft_overlay_left_desc: 'We select heavy gsm jacquards, tear-resistant threads, and high-density foam that retains shape year after year.',
      why_1_title: '100% Custom Dimensions',
      why_1_desc: 'Non-standard bed lengths, antique teakwood chairs, L-shaped sectional sofas, or deep diwans — we hand-cut every foam block to millimeter accuracy.',
      why_2_title: 'Premium Fillings & Fabrics',
      why_2_desc: 'Choose between 32D, 40D, and 50D high-density PU foams, natural organic cotton, breathable linens, royal velvet, and scratch-resistant rexine.',
      why_3_title: 'Doorstep Measurement Visit',
      why_3_desc: 'No need to haul heavy sofas or worry about wrong tape measurements. We visit your home in Nashik with fabric sample swatches.',
      why_4_title: 'Skilled Local Craftsmanship',
      why_4_desc: 'Deep roots in Mhasrul and Panchavati. Trusted workshop serving Nashik households with reinforced double stitching and tailored edge piping.',
      craft_link: 'Ask for Fabric & Foam Catalog on WhatsApp',

      // Process Section
      proc_tag: 'Simple & Hassle-Free',
      proc_title: 'How It Works in 3 Easy Steps',
      proc_desc: 'Getting custom-fit cushions or refurbishing your living room sofa is seamless with our direct doorstep service in Nashik.',
      step1_title: 'Contact & Share Requirements',
      step1_desc: 'Send us a photo of your sofa, diwan, or cot on WhatsApp along with rough dimensions or call us directly at +91 92712 53505.',
      step1_badge: 'Instant WhatsApp replies',
      step2_title: 'Measurement & Fabric Selection',
      step2_desc: 'We arrange a doorstep visit across Nashik. We measure your frames accurately, help you touch and feel fabric catalogs, and select the optimal foam firmness.',
      step2_badge: 'Home visit with physical swatches',
      step3_title: 'Artisan Crafting & Delivery',
      step3_desc: 'Your cushions, gadi, or sofa upholstery is hand-stitched at our Mhasrul workshop and delivered right to your doorstep, perfectly fitted into your home.',
      step3_badge: 'Precision fit & on-time handover',
      proc_cta: 'Share Photos on WhatsApp & Get Started',

      // Showcase Section
      gallery_tag: 'Our Portfolio',
      gallery_title: 'Real Projects & Finished Craftsmanship',
      gallery_desc: 'Explore 100% authentic finished projects photographed directly from our workshop and customer living rooms across Nashik. Click any photo to view full details.',
      flt_all: 'All Real Works',
      flt_cushions: 'Sofa Cushions (Kushan)',
      flt_mattress: 'Gadi & Mattresses',
      flt_upholstery: 'Sofa Repair & Upholstery',
      flt_diwan: 'Wooden Sofa & Diwans',
      flt_curtains: 'Designer Curtains (पडदे)',
      gallery_inspect_btn: 'Click to Inspect',

      // Localities
      loc_tag: 'Local Doorstep Service',
      loc_title: 'Doorstep Measurement & Delivery Across Nashik',
      loc_desc: 'Our workshop is centrally located in Mhasrul Gaon, serving all major residential and commercial sectors:',

      // Reviews
      rev_tag: 'Real Local Feedback',
      rev_title: 'Trusted by Nashik Households',
      rev_desc: 'See why our custom craftsmanship and personalized doorstep measurement have made us a household name in Mhasrul and across Nashik.',

      // FAQ
      faq_tag: 'Got Questions?',
      faq_title: 'Frequently Asked Questions',
      faq_desc: 'Everything you need to know about our custom cushions, mattress refilling, and doorstep measurement process.',
      faq_q1: 'Do you offer doorstep measurement visits across Nashik?',
      faq_a1: 'Yes! For custom sofa sets, diwan beds, and large mattress orders, we visit your home across Mhasrul, Panchavati, Gangapur Road, CIDCO, Indira Nagar, and all of Nashik with measuring tools and physical fabric swatch books so you can touch the textures in your own living room lighting.',
      faq_q2: 'Can you refurbish my old sofa instead of buying a new one?',
      faq_a2: 'Absolutely. If your solid wood or metal frame is intact, we strip out the collapsed foam, tighten or replace sagging webbings and springs, install high-density 40D/50D PU foam, and reupholster with your choice of modern fabric or premium leatherette. It looks and feels brand new while preserving your cherished furniture piece.',
      faq_q3: 'What is the process for Cotton Gadi Recarding (Kapus Pinjne)?',
      faq_a3: 'We inspect your old cotton gadi, unpack the cotton, pass it through carding machines to fluff the fibers and remove compressed dust, add extra pure fresh cotton if you want greater thickness, and restitch it into fresh, heavy-duty cloth casings with precise tufting.',
      faq_q4: 'What foam densities do you use for sofa cushions?',
      faq_a4: 'We work with certified high-resilience foams ranging from 32D (medium-soft back cushions), 40D (standard firm for long-term daily seating), and 50D/bonded foam for heavy orthopedic support. We also provide hybrid combinations with soft fiber wraps for a plush feel.',
      faq_q5: 'How do I get a custom consultation or measurement booked?',
      faq_a5: 'Simply send a WhatsApp message to +91 92712 53505 with a photo of your furniture and your area in Nashik, or use our quick form below. We will coordinate a convenient date and time to visit your premises.',

      // Contact & Location
      cnt_tag: 'Visit or Contact Workshop',
      cnt_title: 'Shri Swami Samartha Kushan Maker',
      cnt_desc: 'We welcome customers to visit our workshop to see live mattress carding and foam fabrication, or contact us to schedule a doorstep home measurement visit.',
      addr_h: 'Workshop Address',
      addr_text: 'Makhmalabad Link Road, Opposite Soham Misal, Hari Har Colony, Vaiduwadi, Mhasrul Gaon, Nashik, Maharashtra 422004',
      addr_btn: 'Open in Google Maps & Get Directions',
      phone_h: 'Phone & WhatsApp Direct',
      phone_btn: 'Chat on WhatsApp',
      phone_hours: 'Available Monday to Sunday: 9:00 AM – 9:00 PM',
      turnaround_h: 'Measurement Turnaround',
      turnaround_desc: 'Same-day or next-day home measurement appointments available for Mhasrul, Panchavati, Makhmalabad, and surrounding Nashik localities.',
      map_tag: 'Mhasrul Gaon Workshop Location',
      map_status: 'Google Maps Verified Workshop',
      map_landmark: 'Opposite Soham Misal, Makhmalabad Link Road, Mhasrul, Nashik 422004',
      map_btn: 'Open in Google Maps & Get Directions',
      shop_badge: 'Authentic Workshop & Signboard',
      shop_title: 'Shri Swami Samartha Gadi & Kushan Maker',
      shop_prop: 'Proprietor: S. A. Rahatal • Mo. +91 92712 53505',
      shop_front_lbl: 'Live Workshop & Hand-Stitching',
      shop_banner_lbl: 'Official Signboard & Visiting Card',

      // Quick Lead Form
      form_tag: 'Fast Response',
      form_title: 'Send a Direct Message',
      form_desc: 'Fill this quick form and click submit. It directly opens a formatted chat on WhatsApp with our workshop master artisan.',
      form_name: 'Full Name *',
      form_phone: 'Phone Number *',
      form_locality: 'Your Locality in Nashik *',
      form_service: 'Service Category *',
      form_notes: 'Your Requirements / Notes',
      form_btn: 'Send via WhatsApp Chat',
      form_trust: 'Direct consultation • No intermediaries • Fast doorstep booking',

      // Footer
      footer_desc: 'Handcrafted custom cushions (kushan), traditional cotton mattresses (gadi), sofa repair, and upholstery workshop based in Mhasrul Gaon, Nashik. Dedicated to long-lasting home comfort and meticulous craftsmanship.',
      footer_links_h: 'Our Specialties',
      footer_contact_h: 'Direct Connect',
      footer_hours: 'Open 7 Days a Week: 9:00 AM – 9:00 PM',
      footer_rights: 'All rights reserved.',

      // Bottom Bar & Floating
      bot_call: 'Call Workshop',
      bot_wa: 'WhatsApp Us',
      float_wa: 'WhatsApp Consultation',
      modal_ask: 'Want similar craftsmanship for your home?',
      modal_inquire: 'Inquire About This Design'
    },

    mr: {
      langLabelToggle: 'English',
      top_announcement: 'पंचवटी, म्हसरूळ आणि संपूर्ण नाशिकमध्ये घरपोच माप व कापड सॅम्पल सुविधा उपलब्ध',
      top_call_label: 'कॉल करा:',
      top_address: 'मखमलाबाद लिंक रोड, वैदूवाडी, म्हसरूळ गाव, नाशिक',
      brand_sub: 'कुशन आणि गादी मेकर • नाशिक',
      nav_services: 'सेवा व वैशिष्ट्ये',
      nav_spec: 'ऑर्डर व मापाची माहिती',
      nav_materials: 'मटेरिअल्स व फोम',
      nav_gallery: 'कामाचे फोटो (गॅलरी)',
      nav_process: 'पद्धत',
      nav_faq: 'प्रश्नोत्तरे',
      nav_contact: 'पत्ता व संपर्क',
      nav_call: 'कॉल करा',
      nav_whatsapp: 'व्हॉट्सॲप करा',

      // Hero Section
      hero_badge: 'नाशिकमधील अग्रगण्य व विश्वासू कुशन आणि गादी कार्यशाळा',
      hero_title_1: 'अचूक मापाचे आणि परिपूर्ण कम्फर्ट',
      hero_title_2: 'कुशन, कापूस गादी व सोफा अपहोल्स्ट्री — नाशिक',
      hero_desc: 'आपल्या लाकडी सोफा, दिवाण आणि बेडसाठी खास अचूक मापाने तयार केलेले कुशन, शुद्ध कापूस (कापूस गादी) आणि ऑर्थोपेडिक हाय-डेन्सिटी फोम मॅट्रेस. नाशिकमध्ये घरपोच माप व कापड निवडीची विशेष सोय.',
      hero_cta_measurement: 'घरपोच मोफत माप नोंदवा (WhatsApp)',
      hero_cta_call: 'कॉल करा: +91 92712 53505',
      trust_1: '१००% अचूक मोजमाप',
      trust_2: 'नाशिकमध्ये घरपोच व्हिजिट',
      trust_3: 'उच्च दर्जाचा फोम व शुद्ध कापूस',
      trust_4: 'वेळेवर घरपोच डिलिव्हरी',
      craft_overlay_badge: 'अनुभवी कारागिरी',
      craft_overlay_title: 'परफेक्ट फिटिंगची खात्री',
      craft_overlay_desc: 'प्रत्येक कुशन आणि गादी हाताने व्यवस्थित मापून तयार केली जाते',
      badge_mhasrul: 'म्हसरूळ कार्यशाळा',
      badge_mhasrul_sub: 'पंचवटी व संपूर्ण नाशिक शहरात सेवा',

      // Live Status
      status_open: 'सुरू आहे • सकाळी ९:०० ते रात्री ९:००',
      status_closed: 'आज बंद आहे • उद्या सकाळी ९:०० वाजता सुरू होईल',
      status_open_sub: 'थेट कॉल करा किंवा घरपोच माप बुक करा',
      status_closed_sub: 'व्हॉट्सॲपवर मेसेज करा, सकाळी उत्तर मिळेल',

      // Services Section
      services_tag: 'आमच्या प्रमुख सेवा',
      services_title: 'घराच्या शोभेनुसार दर्जेदार फर्निचर कामे',
      services_desc: 'पारंपरिक शुद्ध कापूस गादीपासून ते आधुनिक सोफा कुशन व कव्हर बदलापर्यंत, आम्ही प्रत्येक काम मजबूत आणि आरामदायी पद्धतीने करतो.',
      
      s1_title: 'सोफा सेट कुशन (कुशन मेकिंग)',
      s1_desc: 'सोफा कुशन, लाकडी खुर्च्यांचे पॅड्स, पाठीचे कुशन, दिवाण सेट आणि खिडकीच्या सिटिंगसाठी खास मोजमापानुसार तयार केलेले कुशन.',
      s1_t1: 'अचूक माप', s1_t2: 'हाय-रेझिलियन्स फोम', s1_t3: 'धुण्यायोग्य कव्हर्स',

      s2_title: 'पारंपरिक कापूस गादी व फोम मॅट्रेस',
      s2_desc: '१००% शुद्ध कापसाची मऊ व आरामदायी गादी, ऑर्थोपेडिक कडक फोम गाद्या, बॉन्डेड फोम आणि कोणत्याही आकाराच्या कॉटसाठी गाद्या.',
      s2_t1: 'शुद्ध कापूस', s2_t2: 'ऑर्थोपेडिक सपोर्ट', s2_t3: 'सर्व साईझ',

      s3_title: 'सोफा दुरुस्ती व नवीन कव्हर (अपहोल्स्ट्री)',
      s3_desc: 'सोफ्याचा खचलेला फोम बदलणे, स्प्रिंग व पट्टे घट्ट करणे, फाटलेले कापड बदलून नवीन आधुनिक कापड किंवा लेदरेट बसवून सोफा नव्यासारखा करणे.',
      s3_t1: 'नवीन फोम फिटिंग', s3_t2: '५००+ फॅब्रिक पर्याय', s3_t3: 'स्प्रिंग दुरुस्ती',

      s4_title: 'कापूस पिंजणे व गादी भरणे (कापूस पिंजणे)',
      s4_desc: 'जुन्या गादीचा चपटा झालेला कापूस मशिनने पिंजून, धूळ काढून, गरज असल्यास नवा शुद्ध कापूस मिसळून नवीन कापडात नव्याने गादी शिवून देणे.',
      s4_t1: 'मशिन पिंजणे', s4_t2: 'मऊ गादी', s4_t3: 'नवीन मजबूत कापड',

      s5_title: 'दिवाण सेट, लोड व गोल तक्के (तकिया)',
      s5_desc: 'दिवाणसाठी गादी, गोल लोड (तक्के), पाठीचे चौकोनी कुशन, लोड कव्हर आणि मॅट्रेस प्रोटेक्टर डिझायनर मॅचिंगमध्ये तयार करून मिळतील.',
      s5_t1: 'गोल लोड (तक्के)', s5_t2: 'दिवाण सेट', s5_t3: 'मायक्रोफायबर व कापूस',

      s6_title: 'कस्टम डिझायनर पडदे व सिटिंग',
      s6_desc: 'खिडक्या व दरवाजांसाठी कस्टमाइझ केलेले आकर्षक पडदे, प्लेट्स, क्लिनिक बेड्स आणि ऑफिस सिटिंगचे काम.',
      s6_t1: 'डिझायनर पडदे', s6_t2: 'अचूक प्लेट्स', s6_t3: 'क्लिनिक रेक्झिन',

      card_cta: 'व्हॉट्सॲपवर चौकशी करा',

      // Custom Order Builder
      spec_tag: 'माप व माहिती सहाय्यक',
      spec_title: 'तुमच्या फर्निचरचे माप आणि आवश्यकता निवडा',
      spec_desc: 'खालील पर्यायांमधून फर्निचर प्रकार, फोम व कापड निवडा. ही माहिती थेट व्हॉट्सॲपवर पाठवून त्वरित योग्य सल्ला व घरपोच मापाची वेळ निश्चित करा.',
      spec_lbl_1: '१. वस्तू किंवा सेवा निवडा',
      spec_lbl_2: '२. साधारण आकार किंवा फर्निचर माहिती',
      spec_lbl_3: '३. फोम किंवा कापसाचा प्रकार',
      spec_lbl_4: '४. कापड / कव्हरची निवड',
      spec_lbl_5: '५. नाशिकमधील तुमचा परिसर / कॉलनी',
      spec_lbl_6: '६. घरी येऊन माप घेण्याची गरज आहे का?',
      spec_opt_home: 'होय, घरी येऊन माप घ्या',
      spec_opt_self: 'माझ्याकडे माप आहे / कार्यशाळेत येईल',
      spec_lbl_name: 'तुमचे नाव',
      spec_lbl_phone: 'मोबाईल नंबर',
      spec_lbl_notes: 'काही विशेष सूचना किंवा जुन्या सोफ्याविषयी माहिती',
      spec_btn: 'व्हॉट्सॲपवर संपूर्ण माहिती पाठवा',
      spec_subtext: 'बटण दाबल्यावर थेट व्हॉट्सॲप मेसेज उघडेल. कोणताही त्रास नाही.',

      // Materials & Why Choose Us
      craft_tag: 'कामाची गुणवत्ता व परंपरा',
      craft_title: 'नाशिकमधील कुटुंबे आमच्यावर विश्वास का ठेवतात?',
      craft_desc: 'बाजारातील रेडिमेड कुशन काही महिन्यांत खचतात. आम्ही उच्च दर्जाचा ३२D, ४०D, ५०D फोम आणि अस्सल कापूस वापरून प्रत्येक काम दीर्घकाळ टिकेल असे करतो.',
      craft_overlay_left_title: 'दीर्घायुषी मजबूती',
      craft_overlay_left_desc: 'मजबूत नायलॉन धाग्याची दुहेरी शिलाई आणि भारी दर्जाचे जकार्ड फॅब्रिक, ज्यामुळे वर्षानुवर्षे आकार टिकून राहतो.',
      why_1_title: '१००% अचूक मोजमाप',
      why_1_desc: 'जुने लाकडी कॉट, सागवानी सोफा, L-आकाराचा सोफा किंवा खिडकीची जागा — आम्ही अचूक मिलिमीटर मापाने फोम कटिंग करतो.',
      why_2_title: 'उत्कृष्ट फोम आणि कापड पर्याय',
      why_2_desc: '३२D, ४०D, ५०D हाय-डेन्सिटी फोम, नैसर्गिक शुद्ध कापूस, मखमली वेल्वेट, ज्यूट-लिनन आणि सहज स्वच्छ होणारे रेक्झिन पर्याय.',
      why_3_title: 'घरपोच माप व कापड सॅम्पल',
      why_3_desc: 'सोफा किंवा कॉट उचलून आणण्याची गरज नाही. आम्ही स्वतः नाशिकमध्ये घरी येऊन अचूक माप घेतो आणि कापडाचे नमुने दाखवतो.',
      why_4_title: 'स्थानिक अनुभवी कारागीर',
      why_4_desc: 'म्हसरूळ व पंचवटीत अनेक वर्षांची विश्वासार्हता. प्रत्येक कुशनवर कुशल हातांची मजबूत शिलाई आणि फिनिशिंग.',
      craft_link: 'व्हॉट्सॲपवर फॅब्रिक व फोम कॅटलॉग पहा',

      // Process Section
      proc_tag: 'सोपी व विश्वासू पद्धत',
      proc_title: 'काम कसे होते? — फक्त ३ सोप्या पायऱ्या',
      proc_desc: 'घरबसल्या फर्निचरचे कुशन किंवा सोफा अपहोल्स्ट्री करून घेणे आता अगदी सोपे आहे.',
      step1_title: '१. फोटो व माहिती व्हॉट्सॲप करा',
      step1_desc: 'तुमच्या सोफा, कॉट किंवा दिवाणचा फोटो व्हॉट्सॲपवर पाठवा किंवा थेट +91 92712 53505 वर फोन करा.',
      step1_badge: 'त्वरित व्हॉट्सॲप उत्तर',
      step2_title: '२. घरपोच माप व कापड निवड',
      step2_desc: 'आम्ही तुमच्या घरी येऊन अचूक माप घेतो, कापडाचे कॅटलॉग दाखवतो आणि तुमच्या सोयीनुसार योग्य फोमची निवड करतो.',
      step2_badge: 'घरी बसून कापड सॅम्पल पाहण्याची सोय',
      step3_title: '३. कार्यशाळेत तयार करून घरपोच डिलिव्हरी',
      step3_desc: 'म्हसरूळ कार्यशाळेत अचूक शिलाईने फर्निचर तयार करून तुमच्या घरी योग्य वेळेत आणून फिटिंग करून दिले जाते.',
      step3_badge: 'परफेक्ट फिटिंग आणि वेळेवर डिलिव्हरी',
      proc_cta: 'फोटो पाठवून आताच सुरुवात करा',

      // Showcase Section
      gallery_tag: 'आमचे काम',
      gallery_title: 'प्रत्यक्ष पूर्ण केलेल्या कामांचे फोटो',
      gallery_desc: 'आमच्या म्हसरूळ कार्यशाळेत आणि नाशिकमधील ग्राहकांच्या घरी प्रत्यक्ष तयार केलेल्या फर्निचर, गादी व पडद्यांचे अस्सल फोटो खाली पहा. फोटोवर क्लिक करून संपूर्ण माहिती मिळवा.',
      flt_all: 'सर्व कामे',
      flt_cushions: 'सोफा कुशन (कुशन)',
      flt_mattress: 'गादी व मॅट्रेस',
      flt_upholstery: 'सोफा दुरुस्ती व अपहोल्स्ट्री',
      flt_diwan: 'लाकडी सोफा व दिवाण',
      flt_curtains: 'डिझायनर पडदे (Curtains)',
      gallery_inspect_btn: 'फोटो पहा',

      // Localities
      loc_tag: 'स्थानिक घरपोच सेवा',
      loc_title: 'नाशिकच्या सर्व भागांत घरपोच माप व डिलिव्हरी',
      loc_desc: 'आमची कार्यशाळा म्हसरूळ गावात असून आम्ही नाशिकच्या सर्व प्रमुख परिसरांमध्ये सेवा देतो:',

      // Reviews
      rev_tag: 'ग्राहकांचे खरे अभिप्राय',
      rev_title: 'नाशिककरांचा विश्वास व समाधान',
      rev_desc: 'म्हसरूळ, पंचवटी, गंगापूर रोड आणि संपूर्ण नाशिकमधील ग्राहकांनी आमच्या सेवेबद्दल व्यक्त केलेले अनुभव खाली वाचा.',

      // FAQ
      faq_tag: 'काही शंका आहेत?',
      faq_title: 'वारंवार विचारले जाणारे प्रश्न (FAQ)',
      faq_desc: 'घरपोच माप, सोफा दुरुस्ती आणि कापूस गादी पिंजणे याविषयीची सर्व माहिती येथे वाचा.',
      faq_q1: 'तुम्ही संपूर्ण नाशिकमध्ये घरी येऊन माप घेता का?',
      faq_a1: 'होय! सोफा सेट, दिवाण आणि गादीच्या कामासाठी आम्ही म्हसरूळ, पंचवटी, मखमलाबाद, गंगापूर रोड, सिडको, इंदिरानगर आणि संपूर्ण नाशिकमध्ये कापडाचे सॅम्पल घेऊन स्वतः घरी येतो.',
      faq_q2: 'नवा सोफा घेण्याऐवजी जुनाच सोफा दुरुस्त करून घेता येतो का?',
      faq_a2: 'नक्कीच! तुमच्या सोफ्याचा लाकडी किंवा लोखंडी सांगाडा चांगला असेल, तर जुना खचलेला फोम काढून नवीन ४०D/५०D फोम, स्प्रिंग दुरुस्ती आणि नवीन कापड बसवून सोफा अगदी शोरूमसारखा नवीन बनवता येतो.',
      faq_q3: 'कापूस गादी पिंजणे (कार्डिंग) कसे केले जाते?',
      faq_a3: 'आम्ही जुन्या गादीतील कापूस काढून मशिनद्वारे पिंजतो, त्यातील साचलेली धूळ काढली जाते, आणि गरज असल्यास नवा शुद्ध कापूस घालून मजबूत नवीन कापडात योग्य गाठी मारून गादी पुन्हा मऊ व टवटवीत केली जाते.',
      faq_q4: 'सोफा कुशनसाठी कोणत्या प्रकारचा फोम वापरता?',
      faq_a4: 'आम्ही ३२D (मध्यम मऊ), ४०D (दीर्घकाळ टिकणारा स्टँडर्ड कडक), आणि ५०D बॉन्डेड (पाठीच्या मणक्याला आधार देणारा) असे प्रमाणित हाय-रेझिलियन्स फोम वापरतो.',
      faq_q5: 'घरपोच मापासाठी किंवा सल्ल्यासाठी संपर्क कसा करावा?',
      faq_a5: 'फक्त +91 92712 53505 वर तुमच्या सोफ्याचा फोटो व्हॉट्सॲप करा किंवा थेट कॉल करा. आम्ही तुमच्या सोयीनुसार वेळ ठरवून घरी भेट देऊ.',

      // Contact & Location
      cnt_tag: 'कार्यशाळेला भेट द्या किंवा संपर्क करा',
      cnt_title: 'श्री स्वामी समर्थ कुशन मेकर',
      cnt_desc: 'तुम्ही थेट आमच्या म्हसरूळ कार्यशाळेत येऊन गादी पिंजणे व फोमचे काम पाहू शकता, किंवा घरी माप घेण्यासाठी फोन करू शकता.',
      addr_h: 'कार्यशाळेचा पत्ता',
      addr_text: 'सोहम मिसळ समोर, मखमलाबाद लिंक रोड, हरी हर कॉलनी, वैदूवाडी, म्हसरूळ गाव, नाशिक, महाराष्ट्र ४२२००४',
      addr_btn: 'गुगल मॅपवर दिशा (Directions) पहा',
      phone_h: 'थेट फोन व व्हॉट्सॲप',
      phone_btn: 'व्हॉट्सॲपवर चॅट करा',
      phone_hours: 'सोमवार ते रविवार: सकाळी ९:०० ते रात्री ९:००',
      turnaround_h: 'माप घेण्याची वेळ',
      turnaround_desc: 'म्हसरूळ, पंचवटी, मखमलाबाद आणि आसपासच्या परिसरासाठी त्याच दिवशी किंवा दुसऱ्या दिवशी घरपोच भेट शक्य आहे.',
      map_tag: 'म्हसरूळ गाव कार्यशाळा स्थान',
      map_status: 'गुगल मॅप्स व्हेरिफाइड कार्यशाळा',
      map_landmark: 'सोहम मिसळ समोर, मखमलाबाद लिंक रोड, म्हसरूळ, नाशिक ४२२००४',
      map_btn: 'गुगल मॅप्सवर रस्ता व पत्ता पहा',
      shop_badge: 'प्रत्यक्ष कार्यशाळा व अधिकृत फलक',
      shop_title: 'श्री स्वामी समर्थ गादी ॲण्ड कुशन मेकर',
      shop_prop: 'प्रोप्रा. एस. ए. रहाटळ • मो. ९२७१२५३५०५',
      shop_front_lbl: 'थेट कार्यशाळा व हातशिलाई',
      shop_banner_lbl: 'अधिकृत बोर्ड व व्हिजिटिंग कार्ड',

      // Quick Lead Form
      form_tag: 'त्वरित प्रतिसाद',
      form_title: 'थेट संदेश पाठवा',
      form_desc: 'खालील माहिती भरून बटण दाबा. थेट आमच्या कारागिरासोबत व्हॉट्सॲप चॅट सुरू होईल.',
      form_name: 'पूर्ण नाव *',
      form_phone: 'मोबाईल नंबर *',
      form_locality: 'नाशिकमधील परिसर *',
      form_service: 'हवी असलेली सेवा *',
      form_notes: 'तुमची आवश्यकता किंवा फर्निचर माहिती',
      form_btn: 'व्हॉट्सॲपवर पाठवा',
      form_trust: 'थेट कारागिराशी संवाद • मध्यस्थ नाही • जलद घरपोच सेवा',

      // Footer
      footer_desc: 'नाशिकमधील म्हसरूळ गावातील विश्वासू कुशन मेकर, पारंपरिक कापूस गादी, सोफा दुरुस्ती व अपहोल्स्ट्री कार्यशाळा. दर्जेदार काम आणि घराच्या आरामासाठी समर्पित.',
      footer_links_h: 'आमच्या सेवा',
      footer_contact_h: 'थेट संपर्क',
      footer_hours: 'आठवड्याचे सातही दिवस: सकाळी ९:०० ते रात्री ९:००',
      footer_rights: 'सर्व हक्क राखीव.',

      // Bottom Bar & Floating
      bot_call: 'कॉल करा',
      bot_wa: 'व्हॉट्सॲप करा',
      float_wa: 'व्हॉट्सॲप सल्ला',
      modal_ask: 'आपल्या घरासाठी अशाच डिझाईनची माहिती हवी आहे का?',
      modal_inquire: 'या डिझाईनविषयी चौकशी करा'
    }
  };

  // State Management for Active Language
  let currentLang = localStorage.getItem('ss_kushan_lang') || 'en';

  // Service WhatsApp message templates
  const serviceWhatsAppTemplates = {
    s1: {
      en: 'Namaskar Shri Swami Samartha Kushan Maker, I am interested in Custom Cushions (Kushan) and Sofa Sets. Please share fabric options and measurement details.',
      mr: 'नमस्कार श्री स्वामी समर्थ कुशन मेकर, मी आपल्या सोफा सेट कुशन (कुशन मेकिंग) सेवेबद्दल चौकशी करत आहे. कृपया कापड पर्याय आणि घरपोच मापाविषयी माहिती द्यावी.'
    },
    s2: {
      en: 'Namaskar Shri Swami Samartha Kushan Maker, I am inquiring about Traditional & Modern Mattresses (Gadi). Please share cotton and foam options.',
      mr: 'नमस्कार श्री स्वामी समर्थ कुशन मेकर, मला पारंपरिक कापूस गादी व फोम मॅट्रेस संदर्भात माहिती हवी आहे. कृपया गादीचे पर्याय व कापड सॅम्पलविषयी सांगावे.'
    },
    s3: {
      en: 'Namaskar Shri Swami Samartha Kushan Maker, I have an old sofa needing foam replacement or reupholstery. Please guide me on inspection.',
      mr: 'नमस्कार श्री स्वामी समर्थ कुशन मेकर, माझ्या जुन्या सोफ्याचा फोम बदलणे व नवीन कव्हर बसवणे (अपहोल्स्ट्री) करायचे आहे. कृपया घरपोच तपासणीसाठी वेळ द्यावी.'
    },
    s4: {
      en: 'Namaskar Shri Swami Samartha Kushan Maker, I want to recard and refill my cotton gadi (Kapus Pinjne). Please provide details.',
      mr: 'नमस्कार श्री स्वामी समर्थ कुशन मेकर, मला कापूस गादी पिंजून (कापूस पिंजणे) नव्याने भरून घ्यायची आहे. कृपया माहिती द्यावी.'
    },
    s5: {
      en: 'Namaskar Shri Swami Samartha Kushan Maker, I am interested in custom pillows, bolsters (takya), and diwan sets.',
      mr: 'नमस्कार श्री स्वामी समर्थ कुशन मेकर, मला दिवाण सेट, लोड व गोल तक्के (तकिया) तयार करून घ्यायचे आहेत. कृपया डिझाईन पर्याय सांगावेत.'
    },
    s6: {
      en: 'Namaskar Shri Swami Samartha Kushan Maker, I have a commercial/clinic seating requirement. Please contact me for specifications.',
      mr: 'नमस्कार श्री स्वामी समर्थ कुशन मेकर, मला दवाखाना / क्लिनिक / ऑफिस सिटिंगसाठी हेवी ड्युटी रेक्झिन अपहोल्स्ट्री करून हवी आहे. कृपया संपर्क साधावा.'
    }
  };

  function updateDynamicLinks() {
    // 1. Service card buttons
    document.querySelectorAll('.service-wa-btn').forEach(btn => {
      const sId = btn.getAttribute('data-service-id');
      if (sId && serviceWhatsAppTemplates[sId]) {
        const msg = encodeURIComponent(serviceWhatsAppTemplates[sId][currentLang]);
        btn.href = `https://wa.me/${WHATSAPP_PHONE}?text=${msg}`;
      }
    });

    // 2. Hero measurement button
    const heroMeasurementBtn = document.getElementById('heroMeasurementBtn');
    if (heroMeasurementBtn) {
      const msg = currentLang === 'mr'
        ? 'नमस्कार श्री स्वामी समर्थ कुशन मेकर, मला नाशिकमध्ये घरपोच माप आणि कापड निवडीसाठी वेळ निश्चित करायची आहे.'
        : 'Namaskar Shri Swami Samartha Kushan Maker, I would like to book a home measurement and fabric catalog visit in Nashik.';
      heroMeasurementBtn.href = `https://wa.me/${WHATSAPP_PHONE}?text=${encodeURIComponent(msg)}`;
    }

    // 3. Header WhatsApp button
    const headerWaBtn = document.getElementById('headerWaBtn');
    if (headerWaBtn) {
      const msg = currentLang === 'mr'
        ? 'नमस्कार श्री स्वामी समर्थ कुशन मेकर, मला नाशिकमधील कुशन व गादी संदर्भात चौकशी करायची आहे.'
        : 'Namaskar Shri Swami Samartha Kushan Maker, I am inquiring from your website about custom cushions and mattresses in Nashik.';
      headerWaBtn.href = `https://wa.me/${WHATSAPP_PHONE}?text=${encodeURIComponent(msg)}`;
    }

    // 4. Floating WhatsApp button
    const floatingWaBtn = document.getElementById('floatingWaBtn');
    if (floatingWaBtn) {
      const msg = currentLang === 'mr'
        ? 'नमस्कार श्री स्वामी समर्थ कुशन मेकर, मला सल्ल्यासाठी संपर्क साधायचा आहे.'
        : 'Namaskar Shri Swami Samartha Kushan Maker, I would like to consult regarding custom cushions or mattresses.';
      floatingWaBtn.href = `https://wa.me/${WHATSAPP_PHONE}?text=${encodeURIComponent(msg)}`;
    }

    // 5. Mobile bottom bar WhatsApp button
    const mobileBottomWaBtn = document.getElementById('mobileBottomWaBtn');
    if (mobileBottomWaBtn) {
      const msg = currentLang === 'mr'
        ? 'नमस्कार, मला नाशिकमध्ये कुशन व सोफा कामाची चौकशी करायची आहे.'
        : 'Namaskar, I would like to inquire about custom cushions and mattresses in Nashik.';
      mobileBottomWaBtn.href = `https://wa.me/${WHATSAPP_PHONE}?text=${encodeURIComponent(msg)}`;
    }
  }

  function applyLanguage(lang) {
    if (!i18n[lang]) lang = 'en';
    currentLang = lang;
    localStorage.setItem('ss_kushan_lang', lang);

    document.documentElement.lang = lang;
    if (lang === 'mr') {
      document.body.classList.add('lang-mr');
    } else {
      document.body.classList.remove('lang-mr');
    }

    // Update text for all elements with data-i18n
    document.querySelectorAll('[data-i18n]').forEach(el => {
      const key = el.getAttribute('data-i18n');
      if (i18n[lang][key]) {
        el.textContent = i18n[lang][key];
      }
    });

    // Update form select dropdown options
    document.querySelectorAll('option[data-en]').forEach(opt => {
      opt.textContent = lang === 'mr' ? opt.getAttribute('data-mr') : opt.getAttribute('data-en');
    });

    // Update form input placeholders
    document.querySelectorAll('[data-placeholder-en]').forEach(input => {
      input.placeholder = lang === 'mr' ? input.getAttribute('data-placeholder-mr') : input.getAttribute('data-placeholder-en');
    });

    // Update gallery card visible titles, descriptions & categories
    document.querySelectorAll('.gallery-card').forEach(card => {
      const catEl = card.querySelector('[data-gallery-cat]');
      const titleEl = card.querySelector('[data-gallery-title]');
      const descEl = card.querySelector('[data-gallery-desc]');
      if (catEl) {
        catEl.textContent = lang === 'mr' ? (card.getAttribute('data-category-label-mr') || card.getAttribute('data-category-label')) : card.getAttribute('data-category-label');
      }
      if (titleEl) {
        titleEl.textContent = lang === 'mr' ? (card.getAttribute('data-title-mr') || card.getAttribute('data-title')) : card.getAttribute('data-title');
      }
      if (descEl) {
        descEl.textContent = lang === 'mr' ? (card.getAttribute('data-desc-mr') || card.getAttribute('data-desc')) : card.getAttribute('data-desc');
      }
    });

    // Update language toggle button labels & active states
    const langLabelDesktop = document.getElementById('langLabelDesktop');
    const langLabelMobile = document.getElementById('langLabelMobile');
    const btnLangEn = document.getElementById('btnLangEn');
    const btnLangMr = document.getElementById('btnLangMr');

    if (langLabelDesktop) langLabelDesktop.textContent = i18n[lang].langLabelToggle;
    if (langLabelMobile) langLabelMobile.textContent = i18n[lang].langLabelToggle;

    if (btnLangEn && btnLangMr) {
      if (lang === 'mr') {
        btnLangMr.classList.add('bg-terracotta', 'text-white', 'shadow');
        btnLangMr.classList.remove('bg-white', 'text-walnut-900');
        btnLangEn.classList.add('bg-white', 'text-walnut-900');
        btnLangEn.classList.remove('bg-terracotta', 'text-white', 'shadow');
      } else {
        btnLangEn.classList.add('bg-terracotta', 'text-white', 'shadow');
        btnLangEn.classList.remove('bg-white', 'text-walnut-900');
        btnLangMr.classList.add('bg-white', 'text-walnut-900');
        btnLangMr.classList.remove('bg-terracotta', 'text-white', 'shadow');
      }
    }

    // Refresh dynamic links
    updateDynamicLinks();
    updateLiveStatus();
  }

  // Language switch triggers
  const langToggleDesktop = document.getElementById('langToggleDesktop');
  const langToggleMobile = document.getElementById('langToggleMobile');
  const btnLangEn = document.getElementById('btnLangEn');
  const btnLangMr = document.getElementById('btnLangMr');

  function toggleLanguage() {
    const nextLang = currentLang === 'en' ? 'mr' : 'en';
    applyLanguage(nextLang);
  }

  if (langToggleDesktop) langToggleDesktop.addEventListener('click', toggleLanguage);
  if (langToggleMobile) langToggleMobile.addEventListener('click', toggleLanguage);
  if (btnLangEn) btnLangEn.addEventListener('click', () => applyLanguage('en'));
  if (btnLangMr) btnLangMr.addEventListener('click', () => applyLanguage('mr'));


  // =========================================================================
  // 2. LIVE WORKSHOP OPEN/CLOSED STATUS WIDGET
  // =========================================================================
  function updateLiveStatus() {
    const statusDot = document.getElementById('liveStatusDot');
    const statusText = document.getElementById('liveStatusText');
    const statusSub = document.getElementById('liveStatusSub');

    if (!statusText) return;

    // Workshop hours: 9:00 AM to 9:00 PM (Nashik / IST)
    const now = new Date();
    // Use local hours (assuming browser or IST)
    const hour = now.getHours();
    const isOpen = hour >= 9 && hour < 21;

    if (isOpen) {
      if (statusDot) {
        statusDot.className = 'inline-block w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse shrink-0';
      }
      statusText.textContent = i18n[currentLang].status_open;
      statusText.className = 'font-bold text-emerald-700 text-xs sm:text-sm';
      if (statusSub) statusSub.textContent = i18n[currentLang].status_open_sub;
    } else {
      if (statusDot) {
        statusDot.className = 'inline-block w-2.5 h-2.5 rounded-full bg-amber-500 shrink-0';
      }
      statusText.textContent = i18n[currentLang].status_closed;
      statusText.className = 'font-bold text-amber-700 text-xs sm:text-sm';
      if (statusSub) statusSub.textContent = i18n[currentLang].status_closed_sub;
    }
  }


  // =========================================================================
  // 3. MOBILE MENU DRAWER TOGGLE
  // =========================================================================
  const mobileMenuBtn = document.getElementById('mobileMenuBtn');
  const closeMobileMenuBtn = document.getElementById('closeMobileMenuBtn');
  const mobileMenu = document.getElementById('mobileMenu');
  const mobileMenuBackdrop = document.getElementById('mobileMenuBackdrop');
  const mobileNavLinks = document.querySelectorAll('.mobile-nav-link');

  function openMobileMenu() {
    if (mobileMenu && mobileMenuBackdrop) {
      mobileMenu.classList.remove('translate-x-full');
      mobileMenuBackdrop.classList.remove('hidden');
      document.body.style.overflow = 'hidden';
    }
  }

  function closeMobileMenu() {
    if (mobileMenu && mobileMenuBackdrop) {
      mobileMenu.classList.add('translate-x-full');
      mobileMenuBackdrop.classList.add('hidden');
      document.body.style.overflow = '';
    }
  }

  if (mobileMenuBtn) mobileMenuBtn.addEventListener('click', openMobileMenu);
  if (closeMobileMenuBtn) closeMobileMenuBtn.addEventListener('click', closeMobileMenu);
  if (mobileMenuBackdrop) mobileMenuBackdrop.addEventListener('click', closeMobileMenu);

  mobileNavLinks.forEach(link => {
    link.addEventListener('click', closeMobileMenu);
  });


  // =========================================================================
  // 4. STICKY NAVBAR SHADOW & SCROLLSPY ACTIVE LINK
  // =========================================================================
  const mainNav = document.getElementById('mainNav');
  const navSections = document.querySelectorAll('section[id]');
  const desktopNavLinks = document.querySelectorAll('#mainNav nav a');

  function onScroll() {
    const scrollY = window.scrollY;

    // Sticky shadow
    if (scrollY > 30) {
      mainNav?.classList.add('shadow-md');
    } else {
      mainNav?.classList.remove('shadow-md');
    }

    // ScrollSpy active link
    let currentSectionId = '';
    navSections.forEach(section => {
      const sectionTop = section.offsetTop - 120;
      const sectionHeight = section.offsetHeight;
      if (scrollY >= sectionTop && scrollY < sectionTop + sectionHeight) {
        currentSectionId = section.getAttribute('id');
      }
    });

    desktopNavLinks.forEach(link => {
      const href = link.getAttribute('href');
      if (href === `#${currentSectionId}`) {
        link.classList.add('nav-link-active');
      } else {
        link.classList.remove('nav-link-active');
      }
    });

    // Scroll to Top Button toggle
    const scrollToTopBtn = document.getElementById('scrollToTopBtn');
    if (scrollToTopBtn) {
      if (scrollY > 400) {
        scrollToTopBtn.classList.remove('hidden-btn');
        scrollToTopBtn.classList.add('visible-btn');
      } else {
        scrollToTopBtn.classList.add('hidden-btn');
        scrollToTopBtn.classList.remove('visible-btn');
      }
    }
  }

  window.addEventListener('scroll', onScroll, { passive: true });

  const scrollToTopBtn = document.getElementById('scrollToTopBtn');
  if (scrollToTopBtn) {
    scrollToTopBtn.addEventListener('click', () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }


  // =========================================================================
  // 5. INTERACTIVE GALLERY FILTERING
  // =========================================================================
  const filterBtns = document.querySelectorAll('.gallery-filter-btn');
  const galleryItems = document.querySelectorAll('.gallery-card');

  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => {
        b.classList.remove('bg-[#9E472A]', 'text-white', 'shadow-sm');
        b.classList.add('bg-white', 'text-[#554740]', 'hover:bg-[#F2ECE4]');
      });
      btn.classList.add('bg-[#9E472A]', 'text-white', 'shadow-sm');
      btn.classList.remove('bg-white', 'text-[#554740]', 'hover:bg-[#F2ECE4]');

      const filterValue = btn.getAttribute('data-filter');

      galleryItems.forEach(item => {
        const itemCategory = item.getAttribute('data-category');
        if (filterValue === 'all' || itemCategory === filterValue) {
          item.style.display = 'block';
          setTimeout(() => {
            item.style.opacity = '1';
            item.style.transform = 'scale(1)';
          }, 40);
        } else {
          item.style.opacity = '0';
          item.style.transform = 'scale(0.96)';
          setTimeout(() => {
            item.style.display = 'none';
          }, 200);
        }
      });
    });
  });


  // =========================================================================
  // 6. GALLERY LIGHTBOX MODAL WITH PREV / NEXT BROWSING
  // =========================================================================
  const galleryModal = document.getElementById('galleryModal');
  const modalImg = document.getElementById('modalImage');
  const modalTitle = document.getElementById('modalTitle');
  const modalDesc = document.getElementById('modalDesc');
  const modalCounter = document.getElementById('modalCounter');
  const modalWhatsAppBtn = document.getElementById('modalWhatsAppBtn');
  const closeModalBtn = document.getElementById('closeModalBtn');
  const modalOverlay = document.getElementById('modalOverlay');
  const modalPrevBtn = document.getElementById('modalPrevBtn');
  const modalNextBtn = document.getElementById('modalNextBtn');

  let currentGalleryIndex = 0;
  const galleryCardsArray = Array.from(galleryItems);

  function loadGalleryIndex(idx) {
    if (idx < 0) idx = galleryCardsArray.length - 1;
    if (idx >= galleryCardsArray.length) idx = 0;
    currentGalleryIndex = idx;

    const card = galleryCardsArray[idx];
    const img = card.querySelector('img');
    const title = (currentLang === 'mr' ? card.getAttribute('data-title-mr') : card.getAttribute('data-title')) || card.getAttribute('data-title') || 'Custom Craftsmanship';
    const desc = (currentLang === 'mr' ? card.getAttribute('data-desc-mr') : card.getAttribute('data-desc')) || card.getAttribute('data-desc') || 'Tailored to exact dimensions with premium materials.';
    const tag = (currentLang === 'mr' ? card.getAttribute('data-category-label-mr') : card.getAttribute('data-category-label')) || card.getAttribute('data-category-label') || 'Custom Furniture';
    const imgSrc = img ? img.src : '';

    modalImg.src = imgSrc;
    modalTitle.textContent = title;
    modalDesc.textContent = desc;
    if (modalCounter) {
      modalCounter.textContent = `${idx + 1} / ${galleryCardsArray.length}`;
    }

    let message;
    if (currentLang === 'mr') {
      message = encodeURIComponent(
        `नमस्कार श्री स्वामी समर्थ कुशन मेकर,\n\nमी आपल्या वेबसाईटवरील गॅलरीमधील हे काम पाहिले आहे:\n• वस्तू: *${title}*\n• प्रकार: ${tag}\n• माहिती: ${desc}\n\nकृपया मला फॅब्रिक पर्याय व नाशिकमध्ये घरी येऊन माप घेण्याविषयी माहिती द्या.`
      );
    } else {
      message = encodeURIComponent(
        `Namaskar Shri Swami Samartha Kushan Maker,\n\nI was browsing your work gallery on your website and I am interested in:\n• Item: *${title}*\n• Category: ${tag}\n• Reference: ${desc}\n\nPlease let me know about fabric options and scheduling a home measurement in Nashik.`
      );
    }
    modalWhatsAppBtn.href = `https://wa.me/${WHATSAPP_PHONE}?text=${message}`;
  }

  function openModal(idx) {
    if (!galleryModal) return;
    loadGalleryIndex(idx);
    galleryModal.classList.remove('hidden');
    document.body.style.overflow = 'hidden';
  }

  function closeModal() {
    if (!galleryModal) return;
    galleryModal.classList.add('hidden');
    document.body.style.overflow = '';
  }

  galleryCardsArray.forEach((card, index) => {
    card.addEventListener('click', (e) => {
      if (e.target.closest('a')) return;
      openModal(index);
    });
  });

  if (modalPrevBtn) modalPrevBtn.addEventListener('click', () => loadGalleryIndex(currentGalleryIndex - 1));
  if (modalNextBtn) modalNextBtn.addEventListener('click', () => loadGalleryIndex(currentGalleryIndex + 1));
  if (closeModalBtn) closeModalBtn.addEventListener('click', closeModal);
  if (modalOverlay) modalOverlay.addEventListener('click', closeModal);

  document.addEventListener('keydown', (e) => {
    if (!galleryModal || galleryModal.classList.contains('hidden')) return;
    if (e.key === 'Escape') closeModal();
    if (e.key === 'ArrowLeft') loadGalleryIndex(currentGalleryIndex - 1);
    if (e.key === 'ArrowRight') loadGalleryIndex(currentGalleryIndex + 1);
  });


  // =========================================================================
  // 7. INTERACTIVE CUSTOM FIT SPECIFICATION BUILDER (Strictly No Prices!)
  // =========================================================================
  const specBuilderForm = document.getElementById('specBuilderForm');
  if (specBuilderForm) {
    specBuilderForm.addEventListener('submit', (e) => {
      e.preventDefault();

      const itemType = document.getElementById('specItemType')?.value || 'Custom Cushions / Mattresses';
      const sizeNote = document.getElementById('specSizeNote')?.value || 'To be measured at home';
      const foamChoice = document.getElementById('specFoamChoice')?.value || 'Recommended High-Density';
      const fabricChoice = document.getElementById('specFabricChoice')?.value || 'To view fabric catalog';
      const locality = document.getElementById('specLocality')?.value || 'Nashik';
      const visitRequired = document.querySelector('input[name="homeVisit"]:checked')?.value || 'Yes, need doorstep measurement';
      const customerName = document.getElementById('specCustomerName')?.value.trim() || 'Valued Customer';
      const customerPhone = document.getElementById('specCustomerPhone')?.value.trim() || 'Not specified';
      const extraRemarks = document.getElementById('specRemarks')?.value.trim() || 'None';

      let message;
      if (currentLang === 'mr') {
        message = 
`*फर्निचर मोजमाप व ऑर्डर चौकशी*
*श्री स्वामी समर्थ कुशन मेकर, नाशिक*
----------------------------------------
👤 *ग्राहकाचे नाव:* ${customerName}
📞 *फोन नंबर:* ${customerPhone}
📍 *नाशिकमधील परिसर:* ${locality}

🛋️ *वस्तू / काम:* ${itemType}
📐 *साधारण आकार:* ${sizeNote}
🪵 *पसंतीचा फोम / कापूस:* ${foamChoice}
🎨 *कापड / कव्हर पसंती:* ${fabricChoice}
🏠 *घरी येऊन माप हवे आहे का:* ${visitRequired}
📝 *विशेष सूचना:* ${extraRemarks}
----------------------------------------
नमस्कार! कृपया या माहितीनुसार सल्ला द्या व ${locality} येथे कापड सॅम्पलसह भेट देण्याची वेळ ठरवा.`;
      } else {
        message = 
`*Custom Requirement Specification Inquiry*
*Shri Swami Samartha Kushan Maker, Nashik*
----------------------------------------
👤 *Customer Name:* ${customerName}
📞 *Phone / Contact:* ${customerPhone}
📍 *Nashik Locality:* ${locality}

🛋️ *Furniture / Product:* ${itemType}
📐 *Size / Dimensions:* ${sizeNote}
🪵 *Preferred Foam / Filling:* ${foamChoice}
🎨 *Fabric / Outer Cover:* ${fabricChoice}
🏠 *Doorstep Measurement Needed:* ${visitRequired}
📝 *Special Notes:* ${extraRemarks}
----------------------------------------
Namaskar! Please let me know when we can discuss this specification and if you can bring fabric swatches for measurement in ${locality}.`;
      }

      const encodedMessage = encodeURIComponent(message);
      const waUrl = `https://wa.me/${WHATSAPP_PHONE}?text=${encodedMessage}`;
      window.open(waUrl, '_blank');
    });
  }


  // =========================================================================
  // 8. DIRECT QUICK INQUIRY FORM (Contact Section)
  // =========================================================================
  const quickInquiryForm = document.getElementById('quickInquiryForm');
  if (quickInquiryForm) {
    quickInquiryForm.addEventListener('submit', (e) => {
      e.preventDefault();

      const name = document.getElementById('contactName')?.value.trim() || 'Customer';
      const phone = document.getElementById('contactPhone')?.value.trim() || 'Not specified';
      const service = document.getElementById('contactService')?.value || 'General Inquiry';
      const locality = document.getElementById('contactLocality')?.value.trim() || 'Nashik';
      const messageText = document.getElementById('contactMessage')?.value.trim() || 'Please arrange a measurement or consultation.';

      let text;
      if (currentLang === 'mr') {
        text = 
`*वेबसाईट थेट संदेश (चौकशी)*
*श्री स्वामी समर्थ कुशन मेकर, नाशिक*
----------------------------------------
👤 *नाव:* ${name}
📞 *फोन:* ${phone}
📍 *परिसर:* ${locality}
🛠️ *हवी असलेली सेवा:* ${service}
💬 *माहिती / संदेश:* ${messageText}
----------------------------------------
कृपया घरपोच माप व योग्य सल्ल्यासाठी संपर्क साधावा.`;
      } else {
        text = 
`*Quick Website Inquiry*
*Shri Swami Samartha Kushan Maker*
----------------------------------------
👤 *Name:* ${name}
📞 *Phone:* ${phone}
📍 *Locality / Area:* ${locality}
🛠️ *Service Required:* ${service}
💬 *Message / Requirement:* ${messageText}
----------------------------------------
Looking forward to your guidance on materials and doorstep measurement.`;
      }

      const waUrl = `https://wa.me/${WHATSAPP_PHONE}?text=${encodeURIComponent(text)}`;
      window.open(waUrl, '_blank');
    });
  }


  // =========================================================================
  // 9. FAQ ACCORDION TOGGLE
  // =========================================================================
  const faqButtons = document.querySelectorAll('.faq-btn');
  faqButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      const isExpanded = btn.getAttribute('aria-expanded') === 'true';
      const answer = btn.nextElementSibling;

      faqButtons.forEach(otherBtn => {
        if (otherBtn !== btn) {
          otherBtn.setAttribute('aria-expanded', 'false');
          const otherAnswer = otherBtn.nextElementSibling;
          if (otherAnswer) {
            otherAnswer.classList.add('hidden');
          }
        }
      });

      btn.setAttribute('aria-expanded', !isExpanded);
      if (answer) {
        if (isExpanded) {
          answer.classList.add('hidden');
        } else {
          answer.classList.remove('hidden');
        }
      }
    });
  });


  // =========================================================================
  // 10. DYNAMIC YEAR IN FOOTER
  // =========================================================================
  const yearEl = document.getElementById('currentYear');
  if (yearEl) {
    yearEl.textContent = new Date().getFullYear();
  }

  // Initialize Language on first load
  applyLanguage(currentLang);
});
