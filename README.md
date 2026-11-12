# موقع جينيم (13 صفحة، ثابت وجاهز لـ GitHub Pages)

## النشر على GitHub Pages
1. أنشئ مستودعًا جديدًا (Repository) على GitHub.
2. ارفع كل محتويات هذا المجلد إلى جذر المستودع (index.html في الجذر، مع مجلد assets).
3. من Settings ثم Pages: اختر Branch = main والمجلد / (root) ثم Save.
4. بعد دقائق يظهر الرابط: https://USERNAME.github.io/REPO/

## قبل النشر
- استبدل `https://YOUR-DOMAIN` في `sitemap.xml` و`robots.txt` برابط الموقع الفعلي.
- نموذج التواصل يرسل إلى واتساب 01111094182 ولا يحتاج خادمًا.

## البنية
- الصفحات: ملفات *.html في الجذر. الأنماط: assets/css. السكربت: assets/js.
- الصور في assets/img (مواد الشركة التعريفية)، والفيديو assets/video/intro.mp4.
- شاشة الترحيب تظهر مرة واحدة لكل جلسة في الصفحة الرئيسية.
- ملف `.nojekyll` يمنع معالجة Jekyll. كل المسارات نسبية فتعمل على أي مسار فرعي.
