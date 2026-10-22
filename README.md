# Fourthnight website

Static site for the Fourthnight Discord bot. Plain HTML, CSS and JavaScript, no build step.

## Before you deploy

1. Open `assets/main.js` and replace `REPLACE_WITH_CLIENT_ID` with your bot's Application (Client) ID from the Discord Developer Portal. The "Add to Discord" buttons depend on it.
2. Update the download when you release a new version:
   - Put the new zip in `downloads/`.
   - Update `data/version.json` (version, build, file path, date, highlights).
   - Update the version notes on `download.html` and add an entry on `changelog.html`.

## Structure

```
index.html          home
features.html       features
commands.html       all 75 commands, with search
download.html       latest version and self-hosting steps
changelog.html      release history
privacy.html        privacy policy
assets/style.css    styles
assets/main.js      invite link, version loader, command search, mobile menu
data/version.json   latest version info (read by the pages)
downloads/          the downloadable bot zip
vercel.json         Vercel settings (clean URLs)
```

## Deploy with GitHub and Vercel

1. Create a new GitHub repository and push these files to it.
2. Go to vercel.com, click **Add New → Project**, and import the repository.
3. Leave the framework preset as **Other**, leave the build command empty, and set the output directory to `.`.
4. Click **Deploy**. Vercel gives you a URL like `https://your-project.vercel.app`.

Later, every `git push` to the main branch redeploys the site automatically.
