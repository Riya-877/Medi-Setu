/**
 * MediSetu — i18n.js
 * Multi-language support: English, Hindi, Bengali, Odia, Telugu
 *
 * HOW IT WORKS:
 * 1. Add  data-i18n="key"  to any HTML element
 * 2. Call  I18n.init()  on page load (already done if you include this file)
 * 3. Language is saved in localStorage — persists across pages
 *
 * HOW TO ADD A NEW KEY:
 * Add it to every language block below, then use  data-i18n="your.key"  in HTML
 *
 * HOW TO ADD A NEW LANGUAGE:
 * Copy an existing language block, change the code, translate values
 */

const TRANSLATIONS = {

  /* ─── ENGLISH ─── */
  en: {
    /* Nav */
    "nav.home":         "Home",
    "nav.features":     "Features",
    "nav.how":          "How it Works",
    "nav.dashboard":    "Dashboard",
    "nav.team":         "Team",
    "nav.contact":      "Contact",
    "nav.login":        "Login",
    "nav.try":          "Try Demo",

    /* Hero */
    "hero.badge":       "AI + IoT Powered Healthcare Platform",
    "hero.title1":      "Smart Medicine",
    "hero.title2":      "Monitoring & Redistribution",
    "hero.title3":      "for Modern Healthcare",
    "hero.sub":         "MediSetu bridges the gap between medicine surplus and scarcity — using IoT sensors, AI intelligence, and real-time alerts to prevent wastage and protect cold-chain integrity.",
    "hero.cta1":        "Get Started",
    "hero.cta2":        "Watch Demo",
    "hero.chip1.main":  "Cold Chain OK",
    "hero.chip1.sub":   "All units normal",
    "hero.chip2.main":  "AI Alert Sent",
    "hero.chip2.sub":   "3 doctors notified",

    /* Stats */
    "stats.1.num":  "24/7",
    "stats.1.lbl":  "Real-time IoT monitoring",
    "stats.2.num":  "94%",
    "stats.2.lbl":  "Reduction in medicine wastage",
    "stats.3.num":  "<3min",
    "stats.3.lbl":  "Average AI alert response time",
    "stats.4.num":  "500+",
    "stats.4.lbl":  "Medicines tracked per facility",

    /* Problem */
    "problem.label":    "Problem We Solve",
    "problem.title":    "Healthcare is Losing Life-Saving Medicines Daily",
    "problem.sub":      "Billions in vaccines, insulin, and biologics are wasted each year due to poor monitoring, expiry mismanagement, and cold-chain failures.",
    "problem.c1.title": "Massive Medicine Wastage",
    "problem.c1.body":  "Near-expiry medicines are discarded daily while nearby facilities face critical shortages — a completely preventable crisis.",
    "problem.c2.title": "Cold-Chain Failures",
    "problem.c2.body":  "Temperature-sensitive drugs lose potency when refrigeration fails without real-time monitoring alerts.",
    "problem.c3.title": "Zero Inventory Visibility",
    "problem.c3.body":  "Pharmacies and hospitals have no real-time view of stock levels, leading to over-purchasing, shortages, and financial losses.",
    "solution.title":   "MediSetu Changes Everything",
    "solution.body":    "We bridge the gap between medicine surplus and scarcity using IoT sensors, AI forecasting, and smart redistribution networks — in real time.",
    "solution.p1":      "Real-time temperature alerts before damage occurs",
    "solution.p2":      "AI-predicted expiry & demand forecasting",
    "solution.p3":      "Automated redistribution to nearby facilities",
    "solution.p4":      "Doctor-connected health monitoring dashboard",
    "solution.p5":      "Instant email + SMS alert system",

    /* How */
    "how.label":   "How It Works",
    "how.title":   "3 Simple Steps to Smarter Healthcare",
    "how.sub":     "MediSetu's intelligent pipeline monitors, predicts, and acts — all in real time.",
    "how.s1.h":    "IoT Sensors Monitor",
    "how.s1.p":    "Smart sensors continuously track temperature, humidity, and inventory levels across storage units and send live data to the platform.",
    "how.s2.h":    "AI Analyses & Alerts",
    "how.s2.p":    "Our AI engine processes the data stream, predicts expiry risk, detects cold-chain breaches, and automatically notifies doctors and pharmacists.",
    "how.s3.h":    "Smart Redistribution",
    "how.s3.p":    "Near-expiry medicines are matched with requesting facilities and redistributed through a verified cold-chain network — zero waste, maximum impact.",

    /* Features */
    "feat.label":  "Product Features",
    "feat.title":  "Everything Your Facility Needs",
    "feat.sub":    "Purpose-built tools for modern pharmaceutical inventory management and patient safety.",
    "feat.1.h":    "IoT Temperature Monitoring",
    "feat.1.p":    "Real-time sensor data tracks cold-chain conditions 24/7. Instant alerts when temperature goes out of safe range.",
    "feat.2.h":    "AI Demand Forecasting",
    "feat.2.p":    "Machine learning models predict medicine demand patterns, helping prevent over-stocking and shortages.",
    "feat.3.h":    "Automated Expiry Alerts",
    "feat.3.p":    "Email and SMS alerts triggered 60, 30, and 7 days before expiry give your team ample time to act.",
    "feat.4.h":    "Doctor Connection Portal",
    "feat.4.p":    "Doctors receive AI-driven health insights and patient data directly, enabling faster decisions.",
    "feat.5.h":    "Smart Redistribution Network",
    "feat.5.p":    "Automatically matches near-expiry surplus with facilities in need. Verified cold-chain logistics ensure safe delivery.",
    "feat.6.h":    "Live Analytics Dashboard",
    "feat.6.p":    "Comprehensive inventory analytics, risk scores, temperature graphs, and redistribution history — all in one place.",

    /* CTA */
    "cta.label": "Get Started",
    "cta.title": "Ready to Transform Your Medicine Supply Chain?",
    "cta.sub":   "Join the next generation of smart healthcare. Set up MediSetu for your facility in minutes.",
    "cta.btn1":  "Get Started Free",
    "cta.btn2":  "Request a Demo",

    /* Login */
    "login.signin":     "Sign In",
    "login.register":   "Create Account",
    "login.welcome":    "Welcome back",
    "login.create":     "Create your account",
    "login.email":      "Email Address",
    "login.password":   "Password",
    "login.forgot":     "Forgot?",
    "login.remember":   "Keep me signed in for 30 days",
    "login.submit":     "Sign In",
    "login.register_btn": "Create Account & Verify",
    "login.role.admin": "Admin",
    "login.role.pharmacy": "Pharmacy",
    "login.role.user":  "User",
    "login.role.admin.sub": "Facility Manager",
    "login.role.pharmacy.sub": "Store / Hospital",
    "login.role.user.sub": "Patient / Caregiver",
    "login.or":         "or sign in with",
    "login.aadhaar":    "Aadhaar OTP",
    "login.digilocker": "DigiLocker",
    "login.mobile":     "Mobile OTP",

    /* Dashboard */
    "dash.overview":    "Overview",
    "dash.inventory":   "Inventory",
    "dash.iot":         "IoT Sensors",
    "dash.alerts":      "AI Alerts",
    "dash.redist":      "Redistribution",
    "dash.users":       "Users",
    "dash.settings":    "Settings",
    "dash.logout":      "Logout",

    /* Inventory */
    "inv.title":        "Medicine Inventory",
    "inv.add":          "Add Medicine",
    "inv.export":       "Export CSV",
    "inv.upload":       "Upload CSV/Excel",
    "inv.search":       "Search by name, category, facility…",
    "inv.filter.all":   "All",
    "inv.filter.safe":  "Safe",
    "inv.filter.exp":   "Expiring",
    "inv.filter.crit":  "Critical",
    "inv.filter.breach":"Temp Breach",

    /* Request */
    "req.browse":       "Browse Medicines",
    "req.new":          "New Request",
    "req.mine":         "My Requests",
    "req.nearby":       "Nearby Availability",
    "req.submit":       "Submit Request",
    "req.draft":        "Save as Draft",
    "req.med.name":     "Medicine Name",
    "req.qty":          "Quantity Needed",
    "req.reason":       "Medical Condition / Reason",
    "req.address":      "Delivery Address",
    "req.urgency.low":  "Low",
    "req.urgency.med":  "Medium",
    "req.urgency.high": "High",

    /* Footer */
    "footer.copy":   "© 2026 MediSetu. Built for Smart Healthcare Systems. All rights reserved.",
    "footer.privacy":"Privacy",
    "footer.terms":  "Terms",
  },

  /* ─── HINDI ─── */
  hi: {
    "nav.home":         "होम",
    "nav.features":     "विशेषताएं",
    "nav.how":          "कैसे काम करता है",
    "nav.dashboard":    "डैशबोर्ड",
    "nav.team":         "टीम",
    "nav.contact":      "संपर्क",
    "nav.login":        "लॉगिन",
    "nav.try":          "डेमो देखें",

    "hero.badge":       "AI + IoT संचालित स्वास्थ्य सेवा मंच",
    "hero.title1":      "स्मार्ट दवा",
    "hero.title2":      "निगरानी और पुनर्वितरण",
    "hero.title3":      "आधुनिक स्वास्थ्य सेवा के लिए",
    "hero.sub":         "MediSetu दवाओं की अधिकता और कमी के बीच की खाई को पाटता है — IoT सेंसर, AI बुद्धिमत्ता और रियल-टाइम अलर्ट का उपयोग करके।",
    "hero.cta1":        "शुरू करें",
    "hero.cta2":        "डेमो देखें",
    "hero.chip1.main":  "कोल्ड चेन ठीक है",
    "hero.chip1.sub":   "सभी इकाइयां सामान्य",
    "hero.chip2.main":  "AI अलर्ट भेजा गया",
    "hero.chip2.sub":   "3 डॉक्टरों को सूचित किया",

    "stats.1.num":  "24/7",
    "stats.1.lbl":  "रियल-टाइम IoT निगरानी",
    "stats.2.num":  "94%",
    "stats.2.lbl":  "दवाओं की बर्बादी में कमी",
    "stats.3.num":  "<3 मिनट",
    "stats.3.lbl":  "औसत AI अलर्ट प्रतिक्रिया समय",
    "stats.4.num":  "500+",
    "stats.4.lbl":  "प्रति सुविधा ट्रैक की गई दवाएं",

    "problem.label":    "हम क्या समस्या हल करते हैं",
    "problem.title":    "स्वास्थ्य सेवा रोज जीवन रक्षक दवाएं खो रही है",
    "problem.sub":      "हर साल अरबों रुपए की वैक्सीन, इंसुलिन और बायोलॉजिक्स खराब हो जाते हैं।",
    "problem.c1.title": "दवाओं की भारी बर्बादी",
    "problem.c1.body":  "एक्सपायरी के करीब दवाएं रोज फेंकी जाती हैं जबकि नजदीकी केंद्रों में कमी होती है।",
    "problem.c2.title": "कोल्ड-चेन विफलता",
    "problem.c2.body":  "बिना रियल-टाइम अलर्ट के रेफ्रिजरेशन फेल होने पर तापमान-संवेदनशील दवाएं खराब हो जाती हैं।",
    "problem.c3.title": "इन्वेंटरी की कोई जानकारी नहीं",
    "problem.c3.body":  "फार्मेसी और अस्पतालों को स्टॉक का रियल-टाइम पता नहीं होता, जिससे नुकसान होता है।",
    "solution.title":   "MediSetu सब कुछ बदल देता है",
    "solution.body":    "हम IoT सेंसर, AI पूर्वानुमान और स्मार्ट पुनर्वितरण नेटवर्क का उपयोग करके दवाओं की कमी और अधिकता को जोड़ते हैं।",
    "solution.p1":      "नुकसान से पहले रियल-टाइम तापमान अलर्ट",
    "solution.p2":      "AI-पूर्वानुमानित एक्सपायरी और मांग पूर्वानुमान",
    "solution.p3":      "नजदीकी केंद्रों को स्वचालित पुनर्वितरण",
    "solution.p4":      "डॉक्टर-संचालित स्वास्थ्य निगरानी डैशबोर्ड",
    "solution.p5":      "तत्काल ईमेल + SMS अलर्ट सिस्टम",

    "how.label":   "कैसे काम करता है",
    "how.title":   "स्मार्ट स्वास्थ्य सेवा के लिए 3 सरल चरण",
    "how.sub":     "MediSetu का बुद्धिमान सिस्टम निगरानी करता है, पूर्वानुमान लगाता है और कार्रवाई करता है।",
    "how.s1.h":    "IoT सेंसर निगरानी करते हैं",
    "how.s1.p":    "स्मार्ट सेंसर लगातार तापमान, आर्द्रता और इन्वेंटरी की निगरानी करते हैं।",
    "how.s2.h":    "AI विश्लेषण और अलर्ट",
    "how.s2.p":    "हमारा AI इंजन डेटा प्रोसेस करता है, एक्सपायरी जोखिम का पूर्वानुमान लगाता है।",
    "how.s3.h":    "स्मार्ट पुनर्वितरण",
    "how.s3.p":    "एक्सपायरी के करीब दवाएं सत्यापित कोल्ड-चेन नेटवर्क के माध्यम से भेजी जाती हैं।",

    "feat.label":  "उत्पाद विशेषताएं",
    "feat.title":  "आपकी सुविधा की हर जरूरत",
    "feat.sub":    "आधुनिक फार्मास्युटिकल इन्वेंटरी प्रबंधन के लिए बनाए गए उपकरण।",
    "feat.1.h":    "IoT तापमान निगरानी",
    "feat.1.p":    "रियल-टाइम सेंसर डेटा 24/7 कोल्ड-चेन की निगरानी करता है।",
    "feat.2.h":    "AI मांग पूर्वानुमान",
    "feat.2.p":    "ML मॉडल दवाओं की मांग के पैटर्न का पूर्वानुमान लगाते हैं।",
    "feat.3.h":    "स्वचालित एक्सपायरी अलर्ट",
    "feat.3.p":    "एक्सपायरी से 60, 30 और 7 दिन पहले ईमेल और SMS अलर्ट।",
    "feat.4.h":    "डॉक्टर कनेक्शन पोर्टल",
    "feat.4.p":    "डॉक्टरों को सीधे AI-संचालित स्वास्थ्य जानकारी मिलती है।",
    "feat.5.h":    "स्मार्ट पुनर्वितरण नेटवर्क",
    "feat.5.p":    "एक्सपायरी के करीब स्टॉक को जरूरतमंद केंद्रों से मिलाता है।",
    "feat.6.h":    "लाइव एनालिटिक्स डैशबोर्ड",
    "feat.6.p":    "इन्वेंटरी विश्लेषण, जोखिम स्कोर और तापमान ग्राफ एक जगह।",

    "cta.label": "शुरू करें",
    "cta.title": "अपनी दवा आपूर्ति श्रृंखला को बदलने के लिए तैयार हैं?",
    "cta.sub":   "स्मार्ट स्वास्थ्य सेवा की अगली पीढ़ी से जुड़ें।",
    "cta.btn1":  "मुफ़्त शुरू करें",
    "cta.btn2":  "डेमो का अनुरोध करें",

    "login.signin":     "साइन इन",
    "login.register":   "खाता बनाएं",
    "login.welcome":    "वापस स्वागत है",
    "login.create":     "अपना खाता बनाएं",
    "login.email":      "ईमेल पता",
    "login.password":   "पासवर्ड",
    "login.forgot":     "भूल गए?",
    "login.remember":   "30 दिनों तक साइन इन रहें",
    "login.submit":     "साइन इन करें",
    "login.register_btn": "खाता बनाएं और सत्यापित करें",
    "login.role.admin": "व्यवस्थापक",
    "login.role.pharmacy": "फार्मेसी",
    "login.role.user":  "उपयोगकर्ता",
    "login.role.admin.sub": "सुविधा प्रबंधक",
    "login.role.pharmacy.sub": "स्टोर / अस्पताल",
    "login.role.user.sub": "मरीज / देखभालकर्ता",
    "login.or":         "या इससे साइन इन करें",
    "login.aadhaar":    "आधार OTP",
    "login.digilocker": "डिजीलॉकर",
    "login.mobile":     "मोबाइल OTP",

    "dash.overview":    "अवलोकन",
    "dash.inventory":   "इन्वेंटरी",
    "dash.iot":         "IoT सेंसर",
    "dash.alerts":      "AI अलर्ट",
    "dash.redist":      "पुनर्वितरण",
    "dash.users":       "उपयोगकर्ता",
    "dash.settings":    "सेटिंग्स",
    "dash.logout":      "लॉग आउट",

    "inv.title":        "दवा इन्वेंटरी",
    "inv.add":          "दवा जोड़ें",
    "inv.export":       "CSV निर्यात करें",
    "inv.upload":       "CSV/Excel अपलोड करें",
    "inv.search":       "नाम, श्रेणी, सुविधा से खोजें…",
    "inv.filter.all":   "सभी",
    "inv.filter.safe":  "सुरक्षित",
    "inv.filter.exp":   "एक्सपायरी",
    "inv.filter.crit":  "गंभीर",
    "inv.filter.breach":"तापमान उल्लंघन",

    "req.browse":       "दवाएं देखें",
    "req.new":          "नया अनुरोध",
    "req.mine":         "मेरे अनुरोध",
    "req.nearby":       "नजदीकी उपलब्धता",
    "req.submit":       "अनुरोध सबमिट करें",
    "req.draft":        "ड्राफ्ट सहेजें",
    "req.med.name":     "दवा का नाम",
    "req.qty":          "आवश्यक मात्रा",
    "req.reason":       "बीमारी / कारण",
    "req.address":      "डिलीवरी पता",
    "req.urgency.low":  "कम",
    "req.urgency.med":  "मध्यम",
    "req.urgency.high": "उच्च",

    "footer.copy":   "© 2026 MediSetu. स्मार्ट स्वास्थ्य सेवा प्रणालियों के लिए बनाया गया।",
    "footer.privacy":"गोपनीयता",
    "footer.terms":  "नियम",
  },

  /* ─── BENGALI ─── */
  bn: {
    "nav.home":         "হোম",
    "nav.features":     "বৈশিষ্ট্য",
    "nav.how":          "কীভাবে কাজ করে",
    "nav.dashboard":    "ড্যাশবোর্ড",
    "nav.team":         "দল",
    "nav.contact":      "যোগাযোগ",
    "nav.login":        "লগইন",
    "nav.try":          "ডেমো দেখুন",

    "hero.badge":       "AI + IoT চালিত স্বাস্থ্যসেবা প্ল্যাটফর্ম",
    "hero.title1":      "স্মার্ট ওষুধ",
    "hero.title2":      "পর্যবেক্ষণ ও পুনর্বণ্টন",
    "hero.title3":      "আধুনিক স্বাস্থ্যসেবার জন্য",
    "hero.sub":         "MediSetu ওষুধের উদ্বৃত্ত ও ঘাটতির মধ্যে সেতুবন্ধন করে — IoT সেন্সর, AI বুদ্ধিমত্তা এবং রিয়েল-টাইম সতর্কতার মাধ্যমে।",
    "hero.cta1":        "শুরু করুন",
    "hero.cta2":        "ডেমো দেখুন",
    "hero.chip1.main":  "কোল্ড চেইন ঠিক আছে",
    "hero.chip1.sub":   "সব ইউনিট স্বাভাবিক",
    "hero.chip2.main":  "AI সতর্কতা পাঠানো হয়েছে",
    "hero.chip2.sub":   "৩ জন ডাক্তারকে জানানো হয়েছে",

    "stats.1.num":  "24/7",
    "stats.1.lbl":  "রিয়েল-টাইম IoT পর্যবেক্ষণ",
    "stats.2.num":  "৯৪%",
    "stats.2.lbl":  "ওষুধ অপচয় হ্রাস",
    "stats.3.num":  "<৩ মিনিট",
    "stats.3.lbl":  "গড় AI সতর্কতা প্রতিক্রিয়া সময়",
    "stats.4.num":  "৫০০+",
    "stats.4.lbl":  "প্রতি সুবিধায় ট্র্যাক করা ওষুধ",

    "problem.label":    "আমরা যে সমস্যা সমাধান করি",
    "problem.title":    "স্বাস্থ্যসেবা প্রতিদিন জীবনরক্ষাকারী ওষুধ হারাচ্ছে",
    "problem.sub":      "প্রতি বছর কোটি কোটি টাকার ভ্যাকসিন, ইনসুলিন নষ্ট হয়।",
    "problem.c1.title": "ওষুধের ব্যাপক অপচয়",
    "problem.c1.body":  "মেয়াদ শেষের কাছাকাছি ওষুধ প্রতিদিন ফেলে দেওয়া হয়।",
    "problem.c2.title": "কোল্ড-চেইন ব্যর্থতা",
    "problem.c2.body":  "রিয়েল-টাইম সতর্কতা ছাড়া শীতলীকরণ ব্যর্থ হলে ওষুধ নষ্ট হয়।",
    "problem.c3.title": "ইনভেন্টরির কোনো দৃশ্যমানতা নেই",
    "problem.c3.body":  "ফার্মেসি ও হাসপাতালে স্টকের রিয়েল-টাইম তথ্য থাকে না।",
    "solution.title":   "MediSetu সব বদলে দেয়",
    "solution.body":    "আমরা IoT সেন্সর, AI পূর্বাভাস এবং স্মার্ট পুনর্বণ্টন নেটওয়ার্ক ব্যবহার করি।",
    "solution.p1":      "ক্ষতির আগে রিয়েল-টাইম তাপমাত্রা সতর্কতা",
    "solution.p2":      "AI-পূর্বাভাসিত মেয়াদ ও চাহিদা পূর্বাভাস",
    "solution.p3":      "কাছাকাছি সুবিধায় স্বয়ংক্রিয় পুনর্বণ্টন",
    "solution.p4":      "ডাক্তার-সংযুক্ত স্বাস্থ্য পর্যবেক্ষণ ড্যাশবোর্ড",
    "solution.p5":      "তাৎক্ষণিক ইমেইল + SMS সতর্কতা সিস্টেম",

    "how.label":   "কীভাবে কাজ করে",
    "how.title":   "স্মার্ট স্বাস্থ্যসেবার জন্য ৩টি সহজ ধাপ",
    "how.sub":     "MediSetu-র বুদ্ধিমান সিস্টেম পর্যবেক্ষণ করে, পূর্বাভাস দেয় এবং পদক্ষেপ নেয়।",
    "how.s1.h":    "IoT সেন্সর পর্যবেক্ষণ করে",
    "how.s1.p":    "স্মার্ট সেন্সর ক্রমাগত তাপমাত্রা, আর্দ্রতা এবং ইনভেন্টরি স্তর পর্যবেক্ষণ করে।",
    "how.s2.h":    "AI বিশ্লেষণ ও সতর্কতা",
    "how.s2.p":    "আমাদের AI ইঞ্জিন ডেটা প্রক্রিয়া করে এবং মেয়াদ ঝুঁকি পূর্বাভাস দেয়।",
    "how.s3.h":    "স্মার্ট পুনর্বণ্টন",
    "how.s3.p":    "মেয়াদোত্তীর্ণ হওয়ার কাছাকাছি ওষুধ যাচাইকৃত কোল্ড-চেইন নেটওয়ার্কের মাধ্যমে পাঠানো হয়।",

    "feat.label":  "পণ্যের বৈশিষ্ট্য",
    "feat.title":  "আপনার সুবিধার জন্য সবকিছু",
    "feat.sub":    "আধুনিক ফার্মাসিউটিক্যাল ইনভেন্টরি ব্যবস্থাপনার জন্য তৈরি সরঞ্জাম।",
    "feat.1.h":    "IoT তাপমাত্রা পর্যবেক্ষণ",
    "feat.1.p":    "রিয়েল-টাইম সেন্সর ডেটা 24/7 কোল্ড-চেইন পর্যবেক্ষণ করে।",
    "feat.2.h":    "AI চাহিদা পূর্বাভাস",
    "feat.2.p":    "ML মডেল ওষুধের চাহিদার প্যাটার্ন পূর্বাভাস দেয়।",
    "feat.3.h":    "স্বয়ংক্রিয় মেয়াদ সতর্কতা",
    "feat.3.p":    "মেয়াদ শেষের ৬০, ৩০ এবং ৭ দিন আগে ইমেইল ও SMS সতর্কতা।",
    "feat.4.h":    "ডাক্তার সংযোগ পোর্টাল",
    "feat.4.p":    "ডাক্তাররা সরাসরি AI-চালিত স্বাস্থ্য তথ্য পান।",
    "feat.5.h":    "স্মার্ট পুনর্বণ্টন নেটওয়ার্ক",
    "feat.5.p":    "মেয়াদের কাছাকাছি উদ্বৃত্তকে প্রয়োজনীয় সুবিধায় মিলিয়ে দেয়।",
    "feat.6.h":    "লাইভ অ্যানালিটিক্স ড্যাশবোর্ড",
    "feat.6.p":    "ইনভেন্টরি বিশ্লেষণ, ঝুঁকি স্কোর এবং তাপমাত্রা গ্রাফ এক জায়গায়।",

    "cta.label": "শুরু করুন",
    "cta.title": "আপনার ওষুধ সরবরাহ শৃঙ্খল রূপান্তর করতে প্রস্তুত?",
    "cta.sub":   "স্মার্ট স্বাস্থ্যসেবার পরবর্তী প্রজন্মে যোগ দিন।",
    "cta.btn1":  "বিনামূল্যে শুরু করুন",
    "cta.btn2":  "ডেমোর অনুরোধ করুন",

    "login.signin":     "সাইন ইন",
    "login.register":   "অ্যাকাউন্ট তৈরি করুন",
    "login.welcome":    "স্বাগতম",
    "login.create":     "আপনার অ্যাকাউন্ট তৈরি করুন",
    "login.email":      "ইমেইল ঠিকানা",
    "login.password":   "পাসওয়ার্ড",
    "login.forgot":     "ভুলে গেছেন?",
    "login.remember":   "৩০ দিন সাইন ইন থাকুন",
    "login.submit":     "সাইন ইন করুন",
    "login.register_btn": "অ্যাকাউন্ট তৈরি ও যাচাই করুন",
    "login.role.admin": "অ্যাডমিন",
    "login.role.pharmacy": "ফার্মেসি",
    "login.role.user":  "ব্যবহারকারী",
    "login.role.admin.sub": "সুবিধা ব্যবস্থাপক",
    "login.role.pharmacy.sub": "স্টোর / হাসপাতাল",
    "login.role.user.sub": "রোগী / পরিচর্যাকারী",
    "login.or":         "অথবা এর মাধ্যমে সাইন ইন করুন",
    "login.aadhaar":    "আধার OTP",
    "login.digilocker": "ডিজিলকার",
    "login.mobile":     "মোবাইল OTP",

    "dash.overview":    "সারসংক্ষেপ",
    "dash.inventory":   "ইনভেন্টরি",
    "dash.iot":         "IoT সেন্সর",
    "dash.alerts":      "AI সতর্কতা",
    "dash.redist":      "পুনর্বণ্টন",
    "dash.users":       "ব্যবহারকারী",
    "dash.settings":    "সেটিংস",
    "dash.logout":      "লগ আউট",

    "inv.title":        "ওষুধ ইনভেন্টরি",
    "inv.add":          "ওষুধ যোগ করুন",
    "inv.export":       "CSV রপ্তানি করুন",
    "inv.upload":       "CSV/Excel আপলোড করুন",
    "inv.search":       "নাম, বিভাগ, সুবিধা দিয়ে খুঁজুন…",
    "inv.filter.all":   "সব",
    "inv.filter.safe":  "নিরাপদ",
    "inv.filter.exp":   "মেয়াদোত্তীর্ণ",
    "inv.filter.crit":  "জরুরি",
    "inv.filter.breach":"তাপমাত্রা লঙ্ঘন",

    "req.browse":       "ওষুধ দেখুন",
    "req.new":          "নতুন অনুরোধ",
    "req.mine":         "আমার অনুরোধ",
    "req.nearby":       "কাছাকাছি প্রাপ্যতা",
    "req.submit":       "অনুরোধ জমা দিন",
    "req.draft":        "খসড়া সংরক্ষণ করুন",
    "req.med.name":     "ওষুধের নাম",
    "req.qty":          "প্রয়োজনীয় পরিমাণ",
    "req.reason":       "রোগ / কারণ",
    "req.address":      "ডেলিভারির ঠিকানা",
    "req.urgency.low":  "কম",
    "req.urgency.med":  "মধ্যম",
    "req.urgency.high": "বেশি",

    "footer.copy":   "© 2026 MediSetu. স্মার্ট স্বাস্থ্যসেবা ব্যবস্থার জন্য নির্মিত।",
    "footer.privacy":"গোপনীয়তা",
    "footer.terms":  "শর্তাবলী",
  },

  /* ─── ODIA ─── */
  or: {
    "nav.home":         "ହୋମ",
    "nav.features":     "ବୈଶିଷ୍ଟ୍ୟ",
    "nav.how":          "କିପରି କାମ କରେ",
    "nav.dashboard":    "ଡ୍ୟାଶବୋର୍ଡ",
    "nav.team":         "ଦଳ",
    "nav.contact":      "ଯୋଗାଯୋଗ",
    "nav.login":        "ଲଗଇନ",
    "nav.try":          "ଡେମୋ ଦେଖନ୍ତୁ",

    "hero.badge":       "AI + IoT ଚାଳିତ ସ୍ୱାସ୍ଥ୍ୟ ସେବା ପ୍ଲାଟଫର୍ମ",
    "hero.title1":      "ସ୍ମାର୍ଟ ଔଷଧ",
    "hero.title2":      "ନଜରଦାରି ଓ ପୁଣି ବଣ୍ଟନ",
    "hero.title3":      "ଆଧୁନିକ ସ୍ୱାସ୍ଥ୍ୟ ସେବା ପାଇଁ",
    "hero.sub":         "MediSetu ଔଷଧ ଅଧିକତା ଓ ଅଭାବ ମଧ୍ୟରେ ଯୋଗ ଦେଇଥାଏ — IoT ସେନ୍ସର, AI ଜ୍ଞାନ ଓ ତୁରନ୍ତ ଚେତାବନୀ ଦ୍ୱାରା।",
    "hero.cta1":        "ଆରମ୍ଭ କରନ୍ତୁ",
    "hero.cta2":        "ଡେମୋ ଦେଖନ୍ତୁ",
    "hero.chip1.main":  "କୋଲ୍ଡ ଚେନ ଠିକ ଅଛି",
    "hero.chip1.sub":   "ସବୁ ଏକକ ସ୍ୱାଭାବିକ",
    "hero.chip2.main":  "AI ଚେତାବନୀ ପଠାଯାଇଛି",
    "hero.chip2.sub":   "୩ ଡାକ୍ତରଙ୍କୁ ଜଣାଯାଇଛି",

    "stats.1.num":  "24/7",
    "stats.1.lbl":  "ତୁରନ୍ତ IoT ନଜରଦାରି",
    "stats.2.num":  "94%",
    "stats.2.lbl":  "ଔଷଧ ବର୍ଜ୍ୟ ହ୍ରାସ",
    "stats.3.num":  "<3 ମିନିଟ",
    "stats.3.lbl":  "ହାରାହାରି AI ଚେତାବନୀ ପ୍ରତିକ୍ରିୟା ସମୟ",
    "stats.4.num":  "500+",
    "stats.4.lbl":  "ପ୍ରତ୍ୟେକ ସ୍ଥାନରେ ଟ୍ରାକ ହୋଇଥିବା ଔଷଧ",

    "problem.label":    "ଆମେ କ'ଣ ସମସ୍ୟା ସମାଧାନ କରୁ",
    "problem.title":    "ସ୍ୱାସ୍ଥ୍ୟ ସେବା ପ୍ରତିଦିନ ଜୀବନ ରକ୍ଷାକାରୀ ଔଷଧ ହରାଉଛି",
    "problem.sub":      "ପ୍ରତ୍ୟେକ ବର୍ଷ ଲକ୍ଷ ଲକ୍ଷ ଟଙ୍କାର ଟିକା, ଇନ୍ସୁଲିନ ନଷ୍ଟ ହୁଏ।",
    "problem.c1.title": "ଔଷଧ ବ୍ୟାପକ ଅପଚୟ",
    "problem.c1.body":  "ମିଆଦ ଶେଷ ହୋଇ ଆସୁଥିବା ଔଷଧ ପ୍ରତିଦିନ ଫୋପାଡ଼ା ଯାଉଛି।",
    "problem.c2.title": "କୋଲ୍ଡ-ଚେନ ବ୍ୟର୍ଥ",
    "problem.c2.body":  "ଚେତାବନୀ ବିନା ଶୀତଳ ଭଣ୍ଡାର ନଷ୍ଟ ହୋଇଗଲେ ଔଷଧ ଖରାପ ହୁଏ।",
    "problem.c3.title": "ଭଣ୍ଡାର ସଂପର୍କରେ ଜ୍ଞାନ ନଥିବା",
    "problem.c3.body":  "ଔଷଧ ଭଣ୍ଡାରର ତୁରନ୍ତ ତଥ୍ୟ ଫାର୍ମାସି ଓ ହାସ୍ପାତାଳ ପାଖରେ ନଥାଏ।",
    "solution.title":   "MediSetu ସବୁ ବଦଳାଇ ଦେଉଛି",
    "solution.body":    "ଆମେ IoT ସେନ୍ସର, AI ଅନୁମାନ ଓ ସ୍ମାର୍ଟ ପୁଣି ବଣ୍ଟନ ନେଟୱାର୍କ ବ୍ୟବହାର କରୁ।",
    "solution.p1":      "କ୍ଷତି ପୂର୍ବରୁ ତୁରନ୍ତ ତାପମାତ୍ରା ଚେତାବନୀ",
    "solution.p2":      "AI ଅନୁମାନ ଓ ଚାହିଦା ଅନୁଶୀଳନ",
    "solution.p3":      "ନଜଦୀକ ସ୍ଥାନକୁ ସ୍ୱୟଂ ପୁଣି ବଣ୍ଟନ",
    "solution.p4":      "ଡାକ୍ତର ସଂଯୁକ୍ତ ସ୍ୱାସ୍ଥ୍ୟ ନଜରଦାରି ଡ୍ୟାଶବୋର୍ଡ",
    "solution.p5":      "ତୁରନ୍ତ ଇମେଲ + SMS ଚେତାବନୀ ସିଷ୍ଟେମ",

    "how.label":   "କିପରି କାମ କରେ",
    "how.title":   "ସ୍ମାର୍ଟ ସ୍ୱାସ୍ଥ୍ୟ ସେବା ପାଇଁ ୩ ସରଳ ପଦକ୍ଷେପ",
    "how.sub":     "MediSetu ର ଜ୍ଞାନୀ ସିଷ୍ଟେମ ନଜରଦାରି, ଅନୁମାନ ଓ ପଦକ୍ଷେପ ନିଏ।",
    "how.s1.h":    "IoT ସେନ୍ସର ନଜରଦାରି ରଖନ୍ତି",
    "how.s1.p":    "ସ୍ମାର୍ଟ ସେନ୍ସର ତାପମାତ୍ରା, ଆର୍ଦ୍ରତା ଓ ଭଣ୍ଡାର ସ୍ତର ଅନୁଶୀଳନ କରୁ।",
    "how.s2.h":    "AI ବିଶ୍ଳେଷଣ ଓ ଚେତାବନୀ",
    "how.s2.p":    "ଆମ AI ଇଞ୍ଜିନ ଡାଟା ପ୍ରକ୍ରିୟା କରି ମିଆଦ ବିପଦ ଅନୁମାନ କରେ।",
    "how.s3.h":    "ସ୍ମାର୍ଟ ପୁଣି ବଣ୍ଟନ",
    "how.s3.p":    "ମିଆଦ ନଜଦୀକ ଔଷଧ ଯାଞ୍ଚ ହୋଇଥିବା ନେଟୱାର୍କ ଦ୍ୱାରା ପଠାଯାଏ।",

    "feat.label":  "ଉତ୍ପାଦ ବୈଶିଷ୍ଟ୍ୟ",
    "feat.title":  "ଆପଣଙ୍କ ସ୍ଥାନ ପାଇଁ ସବୁ",
    "feat.sub":    "ଆଧୁନିକ ଔଷଧ ଭଣ୍ଡାର ପ୍ରବନ୍ଧନ ପାଇଁ ନିର୍ମିତ ଉପକରଣ।",
    "feat.1.h":    "IoT ତାପମାତ୍ରା ନଜରଦାରି",
    "feat.1.p":    "ତୁରନ୍ତ ସେନ୍ସର ଡାଟା 24/7 କୋଲ୍ଡ-ଚେନ ନଜରଦାରି ରଖେ।",
    "feat.2.h":    "AI ଚାହିଦା ଅନୁଶୀଳନ",
    "feat.2.p":    "ML ମଡେଲ ଔଷଧ ଚାହିଦା ଅନୁମାନ ଲଗାଏ।",
    "feat.3.h":    "ସ୍ୱୟଂ ମିଆଦ ଚେତାବନୀ",
    "feat.3.p":    "ମିଆଦ ଶେଷ ର ୬୦, ୩୦ ଓ ୭ ଦିନ ଆଗରୁ ଚେତାବନୀ।",
    "feat.4.h":    "ଡାକ୍ତର ସଂଯୋଗ ପୋର୍ଟାଲ",
    "feat.4.p":    "ଡାକ୍ତରଙ୍କୁ ସରାସରି AI ଚାଳିତ ସ୍ୱାସ୍ଥ୍ୟ ତଥ୍ୟ ମିଳେ।",
    "feat.5.h":    "ସ୍ମାର୍ଟ ପୁଣି ବଣ୍ଟନ ନେଟୱାର୍କ",
    "feat.5.p":    "ମିଆଦ ନଜଦୀକ ଅଧିକ ଭଣ୍ଡାର ଆବଶ୍ୟକ ସ୍ଥାନ ସହ ମିଳାଏ।",
    "feat.6.h":    "ଲାଇଭ ଆନ୍ୟାଲୟଟିକ୍ସ ଡ୍ୟାଶବୋର୍ଡ",
    "feat.6.p":    "ଭଣ୍ଡାର ବିଶ୍ଳେଷଣ, ବିପଦ ସ୍କୋର ଓ ତାପ ଗ୍ରାଫ ଏକ ଜାଗାରେ।",

    "cta.label": "ଆରମ୍ଭ କରନ୍ତୁ",
    "cta.title": "ଆପଣଙ୍କ ଔଷଧ ସରବରାହ ଶୃଙ୍ଖଳ ବଦଳାଇବାକୁ ପ୍ରସ୍ତୁତ?",
    "cta.sub":   "ସ୍ମାର୍ଟ ସ୍ୱାସ୍ଥ୍ୟ ସେବାର ଆଗାମୀ ପ୍ରଜନ୍ମ ସହ ଯୋଗ ଦିଅନ୍ତୁ।",
    "cta.btn1":  "ମାଗଣାରେ ଆରମ୍ଭ କରନ୍ତୁ",
    "cta.btn2":  "ଡେମୋ ଅନୁରୋଧ କରନ୍ତୁ",

    "login.signin":     "ସାଇନ ଇନ",
    "login.register":   "ଖାତା ତୈରି କରନ୍ତୁ",
    "login.welcome":    "ପୁଣି ସ୍ୱାଗତ",
    "login.create":     "ଆପଣଙ୍କ ଖାତା ତୈରି କରନ୍ତୁ",
    "login.email":      "ଇ-ମେଲ ଠିକଣା",
    "login.password":   "ପାସୱାର୍ଡ",
    "login.forgot":     "ଭୁଲ ଗଲେ?",
    "login.remember":   "30 ଦିନ ସାଇନ ଇନ ରୁହନ୍ତୁ",
    "login.submit":     "ସାଇନ ଇନ କରନ୍ତୁ",
    "login.register_btn": "ଖାତା ତୈରି ଓ ଯାଞ୍ଚ କରନ୍ତୁ",
    "login.role.admin": "ଅ୍ୟାଡମିନ",
    "login.role.pharmacy": "ଫାର୍ମାସି",
    "login.role.user":  "ଉପଭୋକ୍ତା",
    "login.role.admin.sub": "ସ୍ଥାନ ପ୍ରବନ୍ଧକ",
    "login.role.pharmacy.sub": "ଷ୍ଟୋର / ଆଡ଼ ହାସ୍ପାତାଳ",
    "login.role.user.sub": "ରୋଗୀ / ପ୍ରତ୍ୟୟ",
    "login.or":         "ଅଥବା ଏହା ଦ୍ୱାରା ସାଇନ ଇନ",
    "login.aadhaar":    "ଆଧାର OTP",
    "login.digilocker": "ଡିଜିଲକର",
    "login.mobile":     "ମୋବାଇଲ OTP",

    "dash.overview":    "ସଂକ୍ଷିପ୍ତ ବିବରଣ",
    "dash.inventory":   "ଭଣ୍ଡାର",
    "dash.iot":         "IoT ସେନ୍ସର",
    "dash.alerts":      "AI ଚେତାବନୀ",
    "dash.redist":      "ପୁଣି ବଣ୍ଟନ",
    "dash.users":       "ଉପଭୋକ୍ତା",
    "dash.settings":    "ସେଟିଂ",
    "dash.logout":      "ଲଗ ଆଉଟ",

    "inv.title":        "ଔଷଧ ଭଣ୍ଡାର",
    "inv.add":          "ଔଷଧ ଯୋଗ କରନ୍ତୁ",
    "inv.export":       "CSV ରପ୍ତାନି",
    "inv.upload":       "CSV/Excel ଅପଲୋଡ",
    "inv.search":       "ନାମ, ଶ୍ରେଣୀ, ସ୍ଥାନ ଦ୍ୱାରା ଖୋଜନ୍ତୁ…",
    "inv.filter.all":   "ସବୁ",
    "inv.filter.safe":  "ସୁରକ୍ଷିତ",
    "inv.filter.exp":   "ମିଆଦ ଶେଷ",
    "inv.filter.crit":  "ଗୁରୁତ୍ୱ",
    "inv.filter.breach":"ତାପ ଭଙ୍ଗ",

    "req.browse":       "ଔଷଧ ଦେଖନ୍ତୁ",
    "req.new":          "ନୂଆ ଅନୁରୋଧ",
    "req.mine":         "ମୋ ଅନୁରୋଧ",
    "req.nearby":       "ନଜଦୀକ ଉପଲବ୍ଧ",
    "req.submit":       "ଅନୁରୋଧ ଜମା ଦିଅନ୍ତୁ",
    "req.draft":        "ଡ୍ରାଫ୍ଟ ସଞ୍ଚୟ",
    "req.med.name":     "ଔଷଧ ନାମ",
    "req.qty":          "ଆବଶ୍ୟକ ପରିମାଣ",
    "req.reason":       "ରୋଗ / କାରଣ",
    "req.address":      "ଡିଲିଭରି ଠିକଣା",
    "req.urgency.low":  "କମ",
    "req.urgency.med":  "ମଧ୍ୟମ",
    "req.urgency.high": "ଅଧିକ",

    "footer.copy":   "© 2026 MediSetu. ସ୍ମାର୍ଟ ସ୍ୱାସ୍ଥ୍ୟ ସେବା ପ୍ରଣାଳୀ ପାଇଁ ନିର୍ମିତ।",
    "footer.privacy":"ଗୋପନୀୟତା",
    "footer.terms":  "ସର୍ତ୍ତ",
  },

  /* ─── MARATHI ─── */
  mr: {
    "nav.home":         "होम",
    "nav.features":     "वैशिष्ट्ये",
    "nav.how":          "कसे कार्य करते",
    "nav.dashboard":    "डॅशबोर्ड",
    "nav.team":         "संघ",
    "nav.contact":      "संपर्क",
    "nav.login":        "लॉगिन",
    "nav.try":          "डेमो पहा",

    "hero.badge":       "AI + IoT चालित आरोग्य सेवा व्यासपीठ",
    "hero.title1":      "स्मार्ट औषधे",
    "hero.title2":      "देखरेख आणि पुनर्वितरण",
    "hero.title3":      "आधुनिक आरोग्य सेवेसाठी",
    "hero.sub":         "MediSetu औषधांची जास्तीची मात्रा आणि कमतरता यांच्यात सेतू उभारतो — IoT सेन्सर, AI बुद्धिमत्ता आणि रिअल-टाइम सूचनांद्वारे.",
    "hero.cta1":        "सुरू करा",
    "hero.cta2":        "डेमो पहा",
    "hero.chip1.main":  "कोल्ड चेन ठीक आहे",
    "hero.chip1.sub":   "सर्व युनिट्स सामान्य",
    "hero.chip2.main":  "AI सूचना पाठवली",
    "hero.chip2.sub":   "3 डॉक्टरांना कळवले",

    "stats.1.num":  "24/7",
    "stats.1.lbl":  "रिअल-टाइम IoT देखरेख",
    "stats.2.num":  "94%",
    "stats.2.lbl":  "औषध वाया जाणे कमी",
    "stats.3.num":  "<3 मिनिटे",
    "stats.3.lbl":  "सरासरी AI सूचना प्रतिसाद वेळ",
    "stats.4.num":  "500+",
    "stats.4.lbl":  "प्रति सुविधेत ट्रॅक केलेली औषधे",

    "problem.label":    "आम्ही काय समस्या सोडवतो",
    "problem.title":    "आरोग्य सेवा दररोज जीव वाचवणारी औषधे गमावत आहे",
    "problem.sub":      "दरवर्षी कोट्यवधी रुपयांच्या लसी, इन्सुलिन वाया जातात.",
    "problem.c1.title": "औषधांची प्रचंड नासाडी",
    "problem.c1.body":  "मुदत संपत आलेली औषधे दररोज फेकली जातात जेव्हा जवळच्या केंद्रांमध्ये कमतरता असते.",
    "problem.c2.title": "कोल्ड-चेन बिघाड",
    "problem.c2.body":  "रिअल-टाइम सूचनांशिवाय रेफ्रिजरेशन बिघडल्यास तापमान-संवेदनशील औषधे खराब होतात.",
    "problem.c3.title": "इन्व्हेंटरीची माहिती नाही",
    "problem.c3.body":  "फार्मसी आणि रुग्णालयांना साठ्याची रिअल-टाइम माहिती नसते.",
    "solution.title":   "MediSetu सगळे बदलतो",
    "solution.body":    "आम्ही IoT सेन्सर, AI अंदाज आणि स्मार्ट पुनर्वितरण नेटवर्क वापरतो.",
    "solution.p1":      "नुकसानापूर्वी रिअल-टाइम तापमान सूचना",
    "solution.p2":      "AI-अंदाजित मुदत आणि मागणी अंदाज",
    "solution.p3":      "जवळच्या सुविधांना स्वयंचलित पुनर्वितरण",
    "solution.p4":      "डॉक्टर-जोडलेले आरोग्य देखरेख डॅशबोर्ड",
    "solution.p5":      "त्वरित ईमेल + SMS सूचना प्रणाली",

    "how.label":   "कसे कार्य करते",
    "how.title":   "स्मार्ट आरोग्य सेवेसाठी 3 सोपी पावले",
    "how.sub":     "MediSetu ची बुद्धिमान प्रणाली देखरेख करते, अंदाज लावते आणि कार्य करते.",
    "how.s1.h":    "IoT सेन्सर देखरेख करतात",
    "how.s1.p":    "स्मार्ट सेन्सर सतत तापमान, आर्द्रता आणि इन्व्हेंटरी पातळी ट्रॅक करतात.",
    "how.s2.h":    "AI विश्लेषण आणि सूचना",
    "how.s2.p":    "आमचे AI इंजिन डेटा प्रक्रिया करते आणि मुदत धोका अंदाज लावते.",
    "how.s3.h":    "स्मार्ट पुनर्वितरण",
    "how.s3.p":    "मुदत जवळ असलेली औषधे सत्यापित कोल्ड-चेन नेटवर्कद्वारे पाठवली जातात.",

    "feat.label":  "उत्पादन वैशिष्ट्ये",
    "feat.title":  "तुमच्या सुविधेसाठी सर्व काही",
    "feat.sub":    "आधुनिक फार्मास्युटिकल इन्व्हेंटरी व्यवस्थापनासाठी तयार केलेली साधने.",
    "feat.1.h":    "IoT तापमान देखरेख",
    "feat.1.p":    "रिअल-टाइम सेन्सर डेटा 24/7 कोल्ड-चेन ट्रॅक करतो.",
    "feat.2.h":    "AI मागणी अंदाज",
    "feat.2.p":    "ML मॉडेल औषधांच्या मागणीचे नमुने अंदाज लावतात.",
    "feat.3.h":    "स्वयंचलित मुदत सूचना",
    "feat.3.p":    "मुदत संपण्याच्या 60, 30 आणि 7 दिवस आधी ईमेल आणि SMS सूचना.",
    "feat.4.h":    "डॉक्टर कनेक्शन पोर्टल",
    "feat.4.p":    "डॉक्टरांना थेट AI-चालित आरोग्य माहिती मिळते.",
    "feat.5.h":    "स्मार्ट पुनर्वितरण नेटवर्क",
    "feat.5.p":    "मुदत जवळ असलेला अतिरिक्त साठा गरजू सुविधांशी जुळवतो.",
    "feat.6.h":    "लाइव्ह अॅनालिटिक्स डॅशबोर्ड",
    "feat.6.p":    "इन्व्हेंटरी विश्लेषण, जोखीम स्कोअर आणि तापमान आलेख एकाच ठिकाणी.",

    "cta.label": "सुरू करा",
    "cta.title": "तुमची औषध पुरवठा साखळी बदलण्यास तयार आहात?",
    "cta.sub":   "स्मार्ट आरोग्य सेवेच्या पुढच्या पिढीत सामील व्हा.",
    "cta.btn1":  "मोफत सुरू करा",
    "cta.btn2":  "डेमोची विनंती करा",

    "login.signin":     "साइन इन",
    "login.register":   "खाते तयार करा",
    "login.welcome":    "पुन्हा स्वागत",
    "login.create":     "तुमचे खाते तयार करा",
    "login.email":      "ईमेल पत्ता",
    "login.password":   "पासवर्ड",
    "login.forgot":     "विसरलात?",
    "login.remember":   "30 दिवस साइन इन राहा",
    "login.submit":     "साइन इन करा",
    "login.register_btn": "खाते तयार करा आणि सत्यापित करा",
    "login.role.admin": "प्रशासक",
    "login.role.pharmacy": "फार्मसी",
    "login.role.user":  "वापरकर्ता",
    "login.role.admin.sub": "सुविधा व्यवस्थापक",
    "login.role.pharmacy.sub": "दुकान / रुग्णालय",
    "login.role.user.sub": "रुग्ण / काळजीवाहक",
    "login.or":         "किंवा याद्वारे साइन इन करा",
    "login.aadhaar":    "आधार OTP",
    "login.digilocker": "डिजीलॉकर",
    "login.mobile":     "मोबाइल OTP",

    "dash.overview":    "आढावा",
    "dash.inventory":   "इन्व्हेंटरी",
    "dash.iot":         "IoT सेन्सर",
    "dash.alerts":      "AI सूचना",
    "dash.redist":      "पुनर्वितरण",
    "dash.users":       "वापरकर्ते",
    "dash.settings":    "सेटिंग्ज",
    "dash.logout":      "लॉग आउट",

    "inv.title":        "औषध इन्व्हेंटरी",
    "inv.add":          "औषध जोडा",
    "inv.export":       "CSV निर्यात करा",
    "inv.upload":       "CSV/Excel अपलोड करा",
    "inv.search":       "नाव, श्रेणी, सुविधेनुसार शोधा…",
    "inv.filter.all":   "सर्व",
    "inv.filter.safe":  "सुरक्षित",
    "inv.filter.exp":   "मुदत संपणार",
    "inv.filter.crit":  "गंभीर",
    "inv.filter.breach":"तापमान उल्लंघन",

    "req.browse":       "औषधे पहा",
    "req.new":          "नवीन विनंती",
    "req.mine":         "माझ्या विनंत्या",
    "req.nearby":       "जवळील उपलब्धता",
    "req.submit":       "विनंती सादर करा",
    "req.draft":        "मसुदा जतन करा",
    "req.med.name":     "औषधाचे नाव",
    "req.qty":          "आवश्यक प्रमाण",
    "req.reason":       "आजार / कारण",
    "req.address":      "डिलिव्हरी पत्ता",
    "req.urgency.low":  "कमी",
    "req.urgency.med":  "मध्यम",
    "req.urgency.high": "जास्त",

    "footer.copy":   "© 2026 MediSetu. स्मार्ट आरोग्य सेवा प्रणालींसाठी बनवले.",
    "footer.privacy":"गोपनीयता",
    "footer.terms":  "अटी",
  }
};


/* ══ LANGUAGE PICKER HTML (injected into every page) ══ */
const LANG_PICKER_HTML = `
<div id="lang-picker" style="position:relative;display:inline-flex;align-items:center">
  <button id="lang-btn" onclick="I18n.togglePicker()" style="
    display:flex;align-items:center;gap:7px;
    padding:7px 13px;border-radius:9px;
    border:1.5px solid var(--border,#e2e8f0);
    background:#fff;cursor:pointer;
    font-family:'DM Sans',sans-serif;font-size:.82rem;font-weight:600;
    color:#334155;transition:all .2s;white-space:nowrap;
  ">
    <span id="lang-flag" style="font-size:1rem">🌐</span>
    <span id="lang-name">English</span>
    <svg width="11" height="11" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2.5"><polyline points="6 9 12 15 18 9"/></svg>
  </button>
  <div id="lang-dropdown" style="
    display:none;position:absolute;top:calc(100% + 6px);right:0;
    background:#fff;border:1px solid #e2e8f0;border-radius:12px;
    box-shadow:0 8px 28px rgba(15,23,42,.12);
    min-width:180px;z-index:9999;overflow:hidden;padding:5px;
  ">
    <div onclick="I18n.set('en')" class="lang-opt" data-code="en">🇬🇧 <b>English</b></div>
    <div onclick="I18n.set('hi')" class="lang-opt" data-code="hi">🇮🇳 <b>हिंदी</b> <span style="color:#94a3b8;font-size:.75rem">Hindi</span></div>
    <div onclick="I18n.set('bn')" class="lang-opt" data-code="bn">🇧🇩 <b>বাংলা</b> <span style="color:#94a3b8;font-size:.75rem">Bengali</span></div>
    <div onclick="I18n.set('or')" class="lang-opt" data-code="or">🏛️ <b>ଓଡ଼ିଆ</b> <span style="color:#94a3b8;font-size:.75rem">Odia</span></div>
    <div onclick="I18n.set('mr')" class="lang-opt" data-code="mr">🇮🇳 <b>मराठी</b> <span style="color:#94a3b8;font-size:.75rem">Marathi</span></div>
  </div>
  <style>
    .lang-opt{
      display:flex;align-items:center;gap:8px;
      padding:9px 12px;border-radius:8px;
      font-family:'DM Sans',sans-serif;font-size:.84rem;
      cursor:pointer;transition:background .15s;color:#334155;
    }
    .lang-opt:hover{background:#f1f5f9}
    .lang-opt.selected{background:#f0fdfa;color:#0d9488}
  </style>
</div>
`;

const LANG_META = {
  en: { name: 'English',   flag: '🇬🇧' },
  hi: { name: 'हिंदी',     flag: '🇮🇳' },
  bn: { name: 'বাংলা',     flag: '🇧🇩' },
  or: { name: 'ଓଡ଼ିଆ',     flag: '🏛️' },
  mr: { name: 'मराठी',     flag: '🇮🇳' },
};

/* ══ CORE ENGINE ══ */
window.I18n = {

  current: 'en',

  init() {
    // 1. restore from localStorage
    const saved = localStorage.getItem('medisetu_lang') || 'en';
    this.current = TRANSLATIONS[saved] ? saved : 'en';

    // 2. inject picker into every page
    this._injectPicker();

    // 3. apply translations
    this.apply();
  },

  set(code) {
    if (!TRANSLATIONS[code]) return;
    this.current = code;
    localStorage.setItem('medisetu_lang', code);
    this.apply();
    this._updatePickerUI();
    this._closePicker();
  },

  t(key) {
    return TRANSLATIONS[this.current]?.[key]
        || TRANSLATIONS['en']?.[key]
        || key;
  },

  apply() {
    // translate every element with data-i18n attribute
    document.querySelectorAll('[data-i18n]').forEach(el => {
      const key = el.getAttribute('data-i18n');
      const val = this.t(key);
      if (el.tagName === 'INPUT' || el.tagName === 'TEXTAREA') {
        el.placeholder = val;
      } else {
        el.textContent = val;
      }
    });
    // translate placeholders
    document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
      el.placeholder = this.t(el.getAttribute('data-i18n-placeholder'));
    });
    // set html lang attribute
    document.documentElement.lang = this.current;
    // update picker display
    this._updatePickerUI();
  },

  togglePicker() {
    const d = document.getElementById('lang-dropdown');
    if (!d) return;
    d.style.display = d.style.display === 'block' ? 'none' : 'block';
  },

  _closePicker() {
    const d = document.getElementById('lang-dropdown');
    if (d) d.style.display = 'none';
  },

  _updatePickerUI() {
    const meta = LANG_META[this.current] || LANG_META.en;
    const flagEl = document.getElementById('lang-flag');
    const nameEl = document.getElementById('lang-name');
    if (flagEl) flagEl.textContent = meta.flag;
    if (nameEl) nameEl.textContent = meta.name;
    document.querySelectorAll('.lang-opt').forEach(opt => {
      opt.classList.toggle('selected', opt.dataset.code === this.current);
    });
  },

  _injectPicker() {
    // close picker on outside click
    document.addEventListener('click', e => {
      if (!document.getElementById('lang-picker')?.contains(e.target)) {
        this._closePicker();
      }
    });

    // Try to inject into common navbar containers
    const targets = [
      document.querySelector('.nav-cta'),
      document.querySelector('.topbar-right'),
      document.querySelector('.top-right'),
      document.querySelector('.nav-actions'),
    ];
    for (const target of targets) {
      if (target) {
        const wrapper = document.createElement('div');
        wrapper.innerHTML = LANG_PICKER_HTML;
        target.insertBefore(wrapper.firstElementChild, target.firstChild);
        return;
      }
    }
    // fallback: fixed bottom-right
    const fb = document.createElement('div');
    fb.style.cssText = 'position:fixed;bottom:20px;right:20px;z-index:9998';
    fb.innerHTML = LANG_PICKER_HTML;
    document.body.appendChild(fb.firstElementChild);
  }
};

/* Auto-init when DOM is ready */
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', () => I18n.init());
} else {
  I18n.init();
}
