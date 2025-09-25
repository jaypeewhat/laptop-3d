# Laptop 3D Learning Guide - GitHub Pages Setup

## Quick Setup Instructions

1. **Initialize Git Repository** (if not already done):
   ```bash
   git init
   ```

2. **Add all files**:
   ```bash
   git add .
   ```

3. **Create initial commit**:
   ```bash
   git commit -m "Initial commit: Laptop 3D Learning Guide website"
   ```

4. **Create GitHub Repository**:
   - Go to [github.com](https://github.com) and create a new repository
   - Name it something like `laptop-3d-guide` or `laptop-learning-app`
   - Don't initialize with README (we already have one)

5. **Connect to GitHub**:
   ```bash
   git branch -M main
   git remote add origin https://github.com/YOURUSERNAME/YOURREPONAME.git
   git push -u origin main
   ```

6. **Enable GitHub Pages**:
   - Go to your repository settings
   - Scroll down to "Pages" section
   - Select source: "Deploy from a branch"
   - Select branch: "main"
   - Select folder: "/ (root)"
   - Save

7. **Your site will be live at**:
   `https://YOURUSERNAME.github.io/YOURREPONAME`

## Features of this website:

✅ **Android-focused**: Single download for Android APK  
✅ **Educational focus**: Emphasizes learning, not repair  
✅ **Developer credits**: Features Eiron Reyes, Laurence Jalbuena, and Dondon Garcillar  
✅ **Working download link**: Connected to your MediaFire APK  
✅ **Responsive design**: Works on desktop and mobile  
✅ **Professional appearance**: Modern UI with 3D-themed animations  

## Files included:
- `index.html` - Main webpage
- `styles.css` - Styling and animations
- `script.js` - Interactive functionality
- `README.md` - Documentation
- This setup guide

## Next steps:
1. Test the website locally by opening `index.html` in a browser
2. Upload to GitHub following the instructions above
3. Share your GitHub Pages URL with users
4. Update the MediaFire link in `script.js` if needed