# Custom Domain Setup Guide - mihikalicious.co

## ✅ What's Been Configured

### 1. Vite Configuration
- ✅ Changed `base` from `/mihikalicious-portfolio/` to `/` in `vite.config.js`
- ✅ This ensures all assets load correctly from the root domain

### 2. CNAME File
- ✅ Created `public/CNAME` with `mihikalicious.co`
- ✅ This file tells GitHub Pages to use your custom domain

### 3. GitHub Actions Workflow
- ✅ Updated `.github/workflows/deploy.yml` to include `cname: mihikalicious.co`
- ✅ This ensures the CNAME file is preserved during deployment

### 4. Meta Tags
- ✅ Updated Open Graph and Twitter Card URLs to use `https://mihikalicious.co/`
- ✅ This ensures proper social media sharing

## 🔧 DNS Configuration Required

You need to configure your DNS settings with your domain registrar (where you bought mihikalicious.co):

### Option 1: Using A Records (Recommended)

Add these **A records** pointing to GitHub Pages:

```
Type: A
Name: @
Value: 185.199.108.153

Type: A
Name: @
Value: 185.199.109.153

Type: A
Name: @
Value: 185.199.110.153

Type: A
Name: @
Value: 185.199.111.153
```

### Option 2: Using CNAME Record (for www subdomain)

If you want `www.mihikalicious.co` to work:

```
Type: CNAME
Name: www
Value: YOUR-GITHUB-USERNAME.github.io
```

## 📋 GitHub Pages Settings

1. Go to your repository on GitHub
2. Navigate to **Settings** → **Pages**
3. Under **Custom domain**, enter: `mihikalicious.co`
4. Click **Save**
5. Wait for DNS check to complete (can take up to 48 hours)
6. Once verified, check **Enforce HTTPS**

## 🚀 Deployment Steps

1. **Commit all changes**:
   ```bash
   git add .
   git commit -m "Configure custom domain mihikalicious.co"
   git push origin main
   ```

2. **Wait for GitHub Actions** to complete the deployment

3. **Configure DNS** at your domain registrar (see above)

4. **Verify DNS propagation**:
   ```bash
   dig mihikalicious.co
   ```
   
   Or use online tools:
   - https://dnschecker.org/
   - https://www.whatsmydns.net/

5. **Enable HTTPS** in GitHub Pages settings (after DNS verification)

## ✅ Verification Checklist

After DNS propagation (24-48 hours):

- [ ] `http://mihikalicious.co` redirects to `https://mihikalicious.co`
- [ ] `https://mihikalicious.co` loads the website
- [ ] Profile picture shows in Hero section
- [ ] All brand logos display correctly
- [ ] Gallery images and videos load
- [ ] SSL certificate is active (padlock icon in browser)
- [ ] Social media preview works (test on Facebook/Twitter)

## 🔍 Troubleshooting

### DNS not propagating?
- Wait 24-48 hours for full propagation
- Clear your browser cache
- Try accessing from different devices/networks
- Use incognito/private browsing mode

### HTTPS not working?
- Make sure DNS is fully propagated first
- In GitHub Pages settings, uncheck and re-check "Enforce HTTPS"
- Wait a few minutes and try again

### Images not loading?
- Clear browser cache (Ctrl+Shift+R or Cmd+Shift+R)
- Check browser console for errors
- Verify the build completed successfully in GitHub Actions

### 404 errors?
- Verify CNAME file exists in the `gh-pages` branch
- Check GitHub Pages settings show the correct custom domain
- Ensure DNS A records are pointing to correct GitHub IPs

## 📱 Testing

Test your site on:
- Desktop browsers (Chrome, Firefox, Safari, Edge)
- Mobile browsers (iOS Safari, Android Chrome)
- Different networks (WiFi, mobile data)
- Social media link previews (Facebook, Twitter, LinkedIn)

## 🔐 Security

Once HTTPS is enabled:
- ✅ All traffic is encrypted
- ✅ SSL certificate is automatically managed by GitHub
- ✅ Certificate auto-renews every 90 days
- ✅ HTTP automatically redirects to HTTPS

## 📊 Analytics

Your Google Analytics will track visitors at:
- `mihikalicious.co` (primary domain)
- All page paths will be relative to root (`/`, `/about`, etc.)

## 🎉 Success!

Once everything is configured, your site will be live at:
- **Primary**: https://mihikalicious.co
- **GitHub Pages**: https://YOUR-USERNAME.github.io/YOUR-REPO-NAME/ (will redirect to custom domain)

---

**Domain**: mihikalicious.co  
**Last Updated**: February 2026  
**Status**: Ready for DNS configuration
