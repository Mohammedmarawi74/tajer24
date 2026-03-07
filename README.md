# 📍 رادار المستثمر - صانع الشرائح

منصة تفاعلية لإنشاء شرائح عرض احترافية للمستثمرين.

## 🚀 النشر على Vercel

### الطريقة 1: الربط مع GitHub (موصى به)

1. ارفع المشروع على مستودع GitHub
2. اذهب إلى [vercel.com](https://vercel.com)
3. سجل الدخول بحسابك
4. اضغط على **"Add New Project"**
5. اختر المستودع من GitHub
6. اضغط **"Deploy"**

### الطريقة 2: استخدام Vercel CLI

```bash
# تثبيت Vercel CLI عالمياً
npm install -g vercel

# تسجيل الدخول
vercel login

# معاينة النشر
vercel

# النشر للإنتاج
vercel --prod
```

## 🛠️ التطوير المحلي

```bash
# تثبيت التبعيات
npm install

# تشغيل خادم التطوير
npm run dev

# بناء المشروع للإنتاج
npm run build

# معاينة النسخة الإنتاجية
npm run preview
```

## 📁 بنية المشروع

```
├── App.tsx                 # المكون الرئيسي
├── components/             # المكونات
│   ├── CanvasPreview.tsx   # معاينة الشريحة
│   ├── EditorSidebar.tsx   # شريط التحرير
│   ├── Marquee.tsx         # شريط التمرير
│   └── SlideNavigator.tsx  # متصفح الشرائح
├── utils/                  # أدوات مساعدة
│   └── export.ts           # تصدير الصور
├── index.css               # الأنماط العامة
├── index.html              # نقطة الدخول
├── index.tsx               # ملف الدخول الرئيسي
├── types.ts                # تعريفات TypeScript
├── constants.ts            # الثوابت
└── vercel.json             # إعدادات Vercel
```

## 🎨 الميزات

- ✏️ محرر شرائح تفاعلي
- 🎨 ثيمات متعددة
- 📤 تصدير عالي الدقة
- 🔄 معاينة مباشرة
- ⌨️ دعم اللغة العربية

## 📄 الترخيص

جميع الحقوق محفوظة © 2025 رادار المستثمر
