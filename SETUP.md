# HODLife Website Setup Guide

## Quick Start

### Option 1: Direct Browser (Simplest)
1. Open `index.html` directly in your web browser
2. The website will load and be fully functional

### Option 2: Python HTTP Server (Recommended)

**macOS/Linux:**
```bash
cd /Users/coderbd/Repositories/Rivermap/hodlife-website
python3 -m http.server 8000
```

**Windows (Command Prompt):**
```cmd
cd C:\path\to\hodlife-website
python -m http.server 8000
```

Then open http://localhost:8000 in your browser.

### Option 3: Using the Bash Script (macOS/Linux)

```bash
cd /Users/coderbd/Repositories/Rivermap/hodlife-website
chmod +x server.sh
./server.sh
```

### Option 4: Using Node.js (if installed)

```bash
cd /Users/coderbd/Repositories/Rivermap/hodlife-website
npm install
npm start
```

## Project Files Explained

| File | Purpose |
|------|---------|
| `index.html` | Main website page with all sections |
| `privacy-policy.html` | Data privacy policy page |
| `styles.css` | All styling and responsive design rules |
| `script.js` | JavaScript for interactivity and animations |
| `package.json` | Node.js dependencies (optional) |
| `server.sh` | Bash script to start a local server |
| `README.md` | Project documentation |
| `SETUP.md` | This setup guide |

## Features Implemented

### ✅ Core Sections
- Hero section with call-to-action
- About HODLife company information
- Three solutions (Innovation, Security, Transparency)
- Four key benefits for digital asset holders
- Contact form with validation
- Company address and contact info
- Regulatory notice section
- Footer with links

### ✅ Design Features
- Professional color scheme (dark blue and red accents)
- Responsive grid layouts
- Smooth scroll navigation
- Hover effects and transitions
- Mobile-responsive design (320px - 1920px)
- Semantic HTML structure

### ✅ Functionality
- Form validation (name, email, message)
- Smooth scroll navigation to sections
- Active navigation link highlighting
- Intersection observer animations
- Keyboard accessibility support

## Customization Guide

### Change Colors
Edit variables in `styles.css` (lines 8-16):
```css
:root {
    --primary-color: #1a1a2e;      /* Dark blue */
    --highlight-color: #e94560;    /* Red accent */
    /* ... other colors ... */
}
```

### Add/Edit Content
- Main page: Edit `index.html`
- Privacy policy: Edit `privacy-policy.html`
- Both files use the same `styles.css`

### Modify Styling
- Global styles: Edit `styles.css`
- Responsive breakpoints: Lines 350+
- Animations: Search for `@keyframes` in `styles.css`

### Add Form Handling
The contact form (in `script.js`) currently shows an alert. To send emails:

1. **Backend Option** (Recommended):
   - Set up a backend service (Node.js, Python, PHP, etc.)
   - Update `script.js` to POST to your backend endpoint
   - Backend sends email or stores in database

2. **Email Service** (Simple):
   - Use Formspree (https://formspree.io/)
   - Use Netlify Forms
   - Update form action attribute in HTML

Example with Formspree:
```html
<form action="https://formspree.io/f/YOUR_FORM_ID" method="POST" class="contact-form">
    <!-- form fields -->
</form>
```

## Browser Testing

Test the website on:
- ✅ Chrome/Chromium
- ✅ Firefox
- ✅ Safari
- ✅ Edge
- ✅ Mobile browsers (iOS Safari, Chrome Mobile)

## Responsive Breakpoints

The website is optimized for:
- **1200px+**: Desktop (full layout)
- **768px - 1199px**: Tablet (adapted grid)
- **480px - 767px**: Mobile (single column)
- **Below 480px**: Small phone (optimized text and buttons)

## Deployment Options

### GitHub Pages (Free)
1. Create GitHub repository
2. Push files to `main` branch
3. Enable GitHub Pages in settings
4. Website available at `https://username.github.io/hodlife-website`

### Netlify (Free)
1. Create Netlify account
2. Drag and drop folder to Netlify
3. Website automatically deployed

### Vercel (Free)
1. Create Vercel account
2. Import repository or upload folder
3. Automatic deployment

### Traditional Hosting
- Upload all files via FTP to your web host
- Ensure web server is configured for static files
- Website will be available at your domain

## Troubleshooting

### Server won't start
- Ensure Python 3 or Node.js is installed
- Check if port 8000 is already in use
- Try using a different port: `python3 -m http.server 9000`

### Website looks wrong
- Clear browser cache (Ctrl+Shift+Delete or Cmd+Shift+Delete)
- Disable browser extensions
- Test in a different browser

### Form not working
- Check browser console for errors (F12 → Console tab)
- Ensure JavaScript is enabled
- Try submitting from a fresh page load

### Navigation not smooth scrolling
- Ensure JavaScript is enabled
- Check if `script.js` is loading (inspect page source)

## Performance Tips

1. **Optimize images** if you add any
2. **Minify CSS and JavaScript** for production
3. **Use lazy loading** for images
4. **Enable GZIP compression** on your server
5. **Cache static assets** appropriately

## Security Considerations

1. **HTTPS**: Use HTTPS when deployed (most hosting provides this)
2. **Form Validation**: Currently client-side only - add server-side validation
3. **Contact Form**: Currently shows alert - implement actual email sending
4. **Privacy Policy**: Keep up-to-date with legal requirements

## Support & Help

For questions or issues:
1. Check the README.md file
2. Review the code comments in HTML, CSS, and JavaScript
3. Verify all files are in the correct location
4. Test in multiple browsers

## Next Steps

1. **Test locally** - Open in browser or run server
2. **Customize content** - Edit text to match your needs
3. **Add images** - Include company logos and product images
4. **Set up form handling** - Configure email or database storage
5. **Deploy** - Push to GitHub Pages, Netlify, or your hosting

## License

© 2025 by HODLife. This replica is for educational and demonstration purposes.

---

**Ready to go?** Start a server and visit http://localhost:8000!
