# Portfolio Setup Instructions

## 🚀 Getting Started

Your personalized portfolio has been created in the `kunal-portfolio` directory!

### 1. Install Dependencies

```bash
cd kunal-portfolio
npm install
```

### 2. Add Required Images

Before running the portfolio, you need to add the following images:

#### Logo (Required)
- **Path:** `src/images/logo.png`
- **Description:** Your personal logo or initials (e.g., "KP")
- **Recommended Size:** 64x64px or higher (square)

#### Profile Picture (Optional but recommended)
- **Path:** `src/images/me.jpg`
- **Description:** Your professional photo
- **Recommended Size:** 500x500px or higher

#### Project Screenshots (Optional)
Add screenshots for your featured projects in:
- `content/featured/FitFlow/fitflow.png`
- `content/featured/Medix/medix.png`
- `content/featured/StoreMeter/storemeter.png`

### 3. Start Development Server

```bash
npm start
```

Your site will be running at `http://localhost:8000`

### 4. Build for Production

```bash
npm run build
```

## �� Customization

### Update Personal Information

Edit `src/config.js` to update:
- Email address
- Social media links (GitHub, LinkedIn)
- Navigation links
- Color scheme

### Add/Edit Projects

- **Featured Projects:** Edit markdown files in `content/featured/`
- **Other Projects:** Add markdown files to `content/projects/`

### Edit Content Sections

- **Hero Section:** `src/components/sections/hero.js`
- **About Section:** `src/components/sections/about.js`
- **Education:** Content in `content/jobs/`

## 🎨 Design

This portfolio uses the same clean, minimal design as the v4 template with:
- **Primary Color (Green):** `#64ffda`
- **Navy:** `#0a192f`
- **Dark Navy:** `#020c1b`

## 📦 Tech Stack

- **Framework:** Gatsby.js (React-based)
- **Styling:** Styled Components
- **Animations:** anime.js, ScrollReveal
- **Image Processing:** gatsby-plugin-image
- **Markdown:** gatsby-transformer-remark

## 🚢 Deployment

### Netlify (Recommended)

1. Push your code to GitHub
2. Connect your repository to Netlify
3. Build command: `npm run build`
4. Publish directory: `public`

### Vercel

1. Install Vercel CLI: `npm i -g vercel`
2. Run: `vercel`
3. Follow the prompts

## 📧 Contact

For any issues or questions, refer to the Gatsby documentation:
https://www.gatsbyjs.com/docs/

---

**Note:** This portfolio is based on your resume content. All information has been extracted from your PDF and formatted into portfolio sections. No fictional data has been added.
