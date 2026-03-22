MediSetu – Smart Medicine Waste Reduction & Inventory Management System 🩺 Overview MediSetu is an AI and IoT-powered healthcare solution designed to reduce medicine wastage and improve availability of temperature-sensitive drugs like vaccines, insulin, and biologics. The system provides real-time inventory tracking, expiry alerts, and intelligent redistribution support for pharmacies and healthcare facilities.

🚨 Problem Statement A large number of life-saving medicines expire in medical stores due to poor demand forecasting, lack of real-time inventory visibility, and uneven distribution. At the same time, nearby pharmacies face shortages of the same medicines, leading to medical waste, higher costs, and reduced accessibility.

💡 Our Solution MediSetu monitors medicine inventory, predicts demand, and sends automated expiry alerts while enabling timely redistribution of near-expiry medicines with cold-chain awareness.

✨ Key Features 📊 AI-based demand forecasting for medicines

⏰ Automated email alerts (2 months, 1 month, 7 days before expiry)

📁 CSV/Excel inventory upload system for pharmacies

🌡️ IoT-based temperature monitoring (cold-chain safety)

📦 Smart dashboard for stock, expiry, and risk tracking

🧠 AI & ML Integration Simple demand forecasting model (JS-based logic / ML-ready)

Risk detection for near-expiry medicines

Smart alerts based on expiry timeline

Future scope: Predictive redistribution using ML models

(Current version uses rule-based + lightweight forecasting logic for fast deployment.)

🛠️ Tech Stack Frontend: HTML, CSS, JavaScript Backend (optional/expandable): Node.js, Express.js Database (scalable): MongoDB / Firebase (Future Integration) AI/Logic: JavaScript Forecasting Functions Email Alerts: EmailJS / SMTP Deployment: Vercel Hardware: IoT Sensors (Temperature Monitoring)

📂 Project Structure MediSetu/ │── index.html │── style.css │── script.js │── inventory.csv (sample) │── /assets │── /iot (hardware integration files) 📥 Inventory Management (CSV/Excel Upload) Store owners can upload inventory files containing:

Medicine Name

Quantity

Expiry Date

Storage Type

Supported Formats:

.csv

.xlsx

The system automatically:

Reads inventory data

Detects near-expiry medicines

Updates dashboard analytics

📧 Email Alert System (Expiry Notifications) Automated alerts are triggered:

60 days before expiry

30 days before expiry

7 days before expiry

Used Service: EmailJS This helps pharmacy owners take timely action and reduce wastage.

🌡️ IoT Hardware Integration We integrated IoT sensors to monitor refrigerator temperature for cold-chain medicines. If temperature goes out of the safe range, the system flags high-risk stock.
