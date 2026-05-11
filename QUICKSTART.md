# 🎯 Quick Start Guide

## ⚡ Get Started in 30 Seconds

### 1. Start Development Server
```bash
npm run dev
```
Visit: `http://localhost:5173`

### 2. Deploy Production Build
```bash
npm run build
```
Deploy the `dist/` folder to any static host (Netlify, Vercel, GitHub Pages, etc.)

---

## 📋 What You Need to Do

### Immediate (Required)
- [ ] Replace contact email in `Contact.jsx`
- [ ] Update social media links (GitHub, LinkedIn, WhatsApp)
- [ ] Add your profile photo
- [ ] Update project GitHub links
- [ ] Add your CV PDF file

### Important (Recommended)
- [ ] Update your bio in `About.jsx`
- [ ] Personalize project descriptions
- [ ] Add project preview images
- [ ] Update Credly badge link
- [ ] Add AWS certification link

### Nice to Have (Optional)
- [ ] Add project screenshots to projects section
- [ ] Connect form to email service (Formspree, EmailJS, etc.)
- [ ] Add Google Analytics
- [ ] Set up custom domain
- [ ] Add dark/light mode preference persistence

---

## 🔧 Configuration Files

### `src/components/sections/Contact.jsx`
Update contact information:
```javascript
const contactMethods = [
  {
    title: 'Email',
    value: 'YOUR_EMAIL@gmail.com',  // ← Change this
    link: 'mailto:YOUR_EMAIL@gmail.com',
    // ...
  }
]
```

### `src/components/sections/Hero.jsx`
Update hero buttons:
```javascript
<motion.a
  href="https://github.com/YOUR_USERNAME"  // ← Change this
  target="_blank"
  // ...
>
```

### `tailwind.config.js`
Customize colors if desired:
```javascript
colors: {
  nebula: {
    purple: '#8b5cf6',  // Your custom colors
    pink: '#ec4899',
    // ...
  }
}
```

---

## 📝 File Structure Reference

```
src/
├── components/
│   ├── StarField.jsx              ← Background animation
│   ├── Navigation.jsx             ← Top nav
│   └── sections/
│       ├── Hero.jsx               ← Update hero section here
│       ├── About.jsx              ← Update your story
│       ├── Skills.jsx             ← Update skills
│       ├── Projects.jsx           ← Update projects
│       ├── Timeline.jsx           ← Update timeline
│       ├── Certifications.jsx    ← Update certs
│       ├── Contact.jsx            ← Update contact info
│       └── Footer.jsx             ← Update footer links
├── App.jsx                        ← Main app
├── main.jsx                       ← Entry point
└── index.css                      ← Global styles

package.json                       ← Dependencies
tailwind.config.js                ← Colors & animations
```

---

## 🚀 Deployment Commands

### Netlify
```bash
npm run build
# Drag dist/ folder to Netlify
```

### Vercel
```bash
vercel --prod
```

### GitHub Pages
```bash
npm run build
# Push dist/ folder to gh-pages branch
```

---

## 🎨 Customization Cheatsheet

### Change Colors
Edit `tailwind.config.js`:
```javascript
nebula: {
  purple: '#YOUR_COLOR',
  // ...
}
```

### Add Your Photo
1. Place image in `public/` folder
2. Update Hero.jsx:
```javascript
<img src="/your-photo.jpg" alt="Profile" />
```

### Update Projects
Edit `Projects.jsx` array with your projects

### Change Contact Info
Edit `Contact.jsx` contactMethods array

---

## 🧪 Testing

### Local Development
```bash
npm run dev
# Test on http://localhost:5173
```

### Production Build
```bash
npm run build
npm run preview
# Test production build locally
```

### Responsive Testing
- Open DevTools (F12)
- Toggle device toolbar (Ctrl+Shift+M)
- Test on mobile, tablet, desktop

---

## 🔒 Security Checklist

- [ ] Email not exposed in code (use contact form backend)
- [ ] No API keys in frontend code
- [ ] CV link is proper file path
- [ ] Social links use https://
- [ ] Form uses HTTPS
- [ ] No console.log() in production

---

## ⚡ Performance Tips

- Images: Optimize with TinyPNG or similar
- Bundle: Already optimized with Vite
- CDN: Deploy to CDN for fast delivery
- Cache: Set proper cache headers
- Minify: Automatically done on build

---

## 📞 Quick Fixes

### Page not showing?
```bash
npm install
npm run dev
```

### Build errors?
```bash
npm install
npm run build
```

### Want to restart?
```bash
rm -rf node_modules dist
npm install
npm run dev
```

---

## 🎯 Success Criteria

Your portfolio is ready when:

- ✅ All contact info is updated
- ✅ Projects describe YOUR work
- ✅ Photos/images are in place
- ✅ Links all point to YOUR accounts
- ✅ Animations run smoothly
- ✅ Mobile version looks good
- ✅ You're proud to share it

---

## 🚀 Launch!

1. Finalize customizations
2. Run `npm run build`
3. Deploy `dist/` folder
4. Test on production
5. Share with recruiters!

---

**Happy coding! 🎉**
