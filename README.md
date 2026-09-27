# 🍽️ The Golden Spoon - Restaurant Website

موقع تفاعلي لمطعم فاخر مبني باستخدام **Vanilla JavaScript** و **Webpack** كـ Single Page Application (SPA). يعتمد المشروع على نظام الـ DOM Manipulation الديناميكي لتنقل سلس بين الصفحات دون الحاجة لإعادة تحميل الصفحة.

🔗 **رابط المعاينة المباشرة (Live Demo):** 
[اضغط هنا لمشاهدة الموقع](https://alialkousa442.github.io/Resturant-page/)
🚀 المميزات (Features)
Single Page Application (SPA): تنقل فوري وديناميكي بين الصفحات (Home, Menu, Contact).

Modular JavaScript Architecture: تقسيم الكود إلى ES6 Modules مستقلة لتسهيل الصيانة.

Responsive & Luxury Design: تصميم داكن وأنيق باستعمال CSS Grid & Flexbox ومخصص تماماً للشاشات المختلفة.

Webpack Bundling: تجميع تحزيمي مخصص للـ JavaScript والـ CSS لزيادة سرعة الأداء.

🛠️ التقنيات المستخدمة (Tech Stack)
Language: HTML5, CSS3, JavaScript (ES6+)

Bundler: Webpack

Deployment: GitHub Pages (gh-pages)

💻 خطوات التشغيل محلياً (Local Setup)
لتشغيل المشروع على جهازك المحلي، اتبع الخطوات التالية:

تثبيت الحزم والاعتماديات (Install dependencies):
npm install
تشغيل البناء المباشر للتطوير (Build):
npx webpack
📦 خطوات النشر (Deployment)
تم استخدام حزمة gh-pages لنشر المشروع تلقائياً من مجلد dist:

تحديث بناء الملفات:
npx webpack
رفع النسخة المجمعة إلى GitHub Pages:
npm run deploy