# Deployment Guide 🚀

## Quick Start - Vercel (Recommended - 2 Minutes)

1. **Push to GitHub**:
   ```bash
   cd "E:\Random\My Identity\Portfolio\portfolio-website"
   git init
   git add .
   git commit -m "Initial portfolio commit"
   git remote add origin https://github.com/YOUR_USERNAME/Portfolio.git
   git push -u origin main
   ```

2. **Deploy on Vercel**:
   - Go to https://vercel.com
   - Click "New Project"
   - Import your GitHub repository
   - Click "Deploy" (Vercel auto-detects Next.js)
   - Done! Your site is live in ~2 minutes

## GitHub Pages Deployment (Free Forever)

### Step 1: Update Repository Name
If your GitHub username is different from the repo name, update `next.config.ts`:
```typescript
basePath: process.env.NODE_ENV === 'production' ? '/YOUR-REPO-NAME' : '',
assetPrefix: process.env.NODE_ENV === 'production' ? '/YOUR-REPO-NAME/' : '',
```

### Step 2: Push to GitHub
```bash
cd "E:\Random\My Identity\Portfolio\portfolio-website"
git init
git add .
git commit -m "Initial portfolio commit"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/YOUR-REPO-NAME.git
git push -u origin main
```

### Step 3: Enable GitHub Pages
1. Go to your repository on GitHub
2. Click **Settings** > **Pages**
3. Under "Build and deployment":
   - Source: Select **GitHub Actions**
4. The workflow will automatically run and deploy your site

Your site will be live at: `https://YOUR_USERNAME.github.io/YOUR-REPO-NAME/`

## Local Development

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Preview production build
npm start
```

## Customization Tips

### Update Personal Information
1. **Projects**: Edit `app/components/Projects.tsx`
2. **Experience**: Edit `app/components/Experience.tsx`
3. **Skills**: Edit `app/components/Skills.tsx`
4. **About**: Edit `app/components/About.tsx`
5. **Contact Info**: Edit `app/components/Contact.tsx` and `app/components/Hero.tsx`

### Change Colors
Modify Tailwind classes in components:
- `bg-blue-600` → Change to any color
- `text-blue-600` → Change text color
- Update gradients: `from-blue-50 to-indigo-100`

### Add New Sections
Create a new component in `app/components/` and import it in `app/page.tsx`

## Troubleshooting

### Build Fails
```bash
# Clear cache and rebuild
rm -rf .next out node_modules
npm install
npm run build
```

### GitHub Pages Not Working
1. Check that GitHub Actions is enabled in repository settings
2. Verify the workflow file exists at `.github/workflows/deploy.yml`
3. Check the Actions tab for error messages
4. Ensure Pages is set to deploy from "GitHub Actions"

### Vercel Deployment Issues
- Vercel auto-detects Next.js
- No configuration needed
- Check build logs in Vercel dashboard

## Environment Variables

For Vercel:
1. Go to Project Settings > Environment Variables
2. Add any API keys or secrets
3. Redeploy

For GitHub Pages:
1. Go to Settings > Secrets and variables > Actions
2. Add repository secrets
3. Update `.github/workflows/deploy.yml` to use secrets

## Custom Domain

### Vercel
1. Go to Project Settings > Domains
2. Add your custom domain
3. Follow DNS configuration instructions

### GitHub Pages
1. Go to Settings > Pages
2. Add custom domain
3. Add CNAME record to your DNS provider

## Performance Optimization

The site is already optimized with:
- ✅ Static Site Generation (SSG)
- ✅ Image optimization disabled for GitHub Pages
- ✅ Minified CSS and JS
- ✅ Fast load times

## Support

For issues:
- Check [Next.js Documentation](https://nextjs.org/docs)
- GitHub Actions logs
- Vercel build logs

---

Need help? Contact: sudipto64.sust@gmail.com

