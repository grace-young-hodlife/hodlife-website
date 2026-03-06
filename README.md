# HODLife Website Replica

A professional replica of the HODLife Insurance website (https://hodlife.bm/), built with modern HTML, CSS, and JavaScript.

## Overview

HODLife is an innovative insurance company that integrates digital assets and blockchain technology with regulated life insurance and savings solutions for crypto holders.

## Project Structure

```
hodlife-website/
├── index.html              # Main website page
├── privacy-policy.html     # Data privacy policy page
├── styles.css              # Global styles and responsive design
├── script.js               # JavaScript functionality and interactions
└── README.md               # This file
```

## Features

- **Responsive Design**: Fully responsive layout that works on desktop, tablet, and mobile devices
- **Modern Styling**: Clean, professional design with smooth transitions and hover effects
- **Smooth Navigation**: Navigation links with smooth scrolling to sections
- **Contact Form**: Functional contact form with validation
- **Animation Effects**: Subtle animations and transitions for better user experience
- **Accessibility**: Semantic HTML and keyboard navigation support
- **Privacy Policy**: Comprehensive data privacy page

## Sections

1. **Hero Section**: Eye-catching introduction with call-to-action button
2. **About Section**: Information about HODLife and its mission
3. **Solutions Section**: Three key solutions (Innovation, Security, Transparency)
4. **Benefits Section**: Four key benefits for digital asset holders
5. **Contact Section**: Contact form for inquiries and feedback
6. **Address Section**: Company contact information and location
7. **Regulatory Notice**: Information about Bermuda Monetary Authority sandbox status
8. **Footer**: Copyright and legal information

## How to Use

### Local Development

1. **Clone or download** the project files to your local machine
2. **Open in a browser**: Simply open `index.html` in your web browser
3. **No build process required** - this is a static website

### With a Local Server

For better development experience, use a simple HTTP server:

```bash
# Using Python 3
python -m http.server 8000

# Using Python 2
python -m SimpleHTTPServer 8000

# Using Node.js (with http-server package)
npx http-server
```

Then navigate to `http://localhost:8000` in your browser.

## Customization

### Colors
Edit the CSS variables in `styles.css`:
```css
:root {
    --primary-color: #1a1a2e;
    --secondary-color: #16213e;
    --accent-color: #0f3460;
    --highlight-color: #e94560;
    /* ... other colors ... */
}
```

### Content
Edit text and content directly in the HTML files:
- `index.html` - Main website content
- `privacy-policy.html` - Privacy policy content

### Styling
Modify `styles.css` to adjust:
- Colors and typography
- Spacing and layout
- Responsive breakpoints
- Hover effects and animations

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile, etc.)

## Features Included

- ✅ Semantic HTML5 structure
- ✅ CSS Grid and Flexbox layouts
- ✅ Mobile-first responsive design
- ✅ Form validation
- ✅ Smooth scroll navigation
- ✅ Animation effects
- ✅ Accessibility features
- ✅ Privacy policy page

## Form Submission

The contact form includes validation for:
- Required fields
- Email format validation

Currently, form submissions are handled with a client-side alert. To handle actual submissions, you would need to:

1. Set up a backend endpoint (e.g., with Node.js, Python, or PHP)
2. Update the form submission handler in `script.js` to send data to your backend
3. Implement email sending or database storage on the backend

## Deployment

This static website can be deployed to:
- **GitHub Pages** - Free hosting for static sites
- **Netlify** - Simple drag-and-drop deployment
- **Vercel** - Optimized for static content
- **AWS S3** - With CloudFront distribution
- **Traditional Web Hosting** - Any web server supporting static files

## License

© 2025 by HODLife. This is a replica for educational and demonstration purposes.

## Contact Information

**HODLife Insurance Company Ltd.**
Canon's Court, 22 Victoria Street
Hamilton, Pembroke, HM 12
Bermuda

Email: [info@hodlife.bm](mailto:info@hodlife.bm)

---

**Note**: This is a website replica created for educational purposes. For actual HODLife insurance products and services, visit the official website at https://hodlife.bm/
