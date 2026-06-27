# Little Talk Cafe — V37 Circle Tab Icon Patch

This patch changes the browser tab logo/favicon from a square version to a circular version.

## Files included

- app/favicon.ico
- app/icon.png
- app/apple-icon.png

## Apply patch

Copy the patch contents into your live project folder with `package.json`, replace files, then in GitHub Desktop:

Commit message: Make favicon circular

Then click:
- Commit to main
- Push origin

Netlify should redeploy automatically.

## Note

Favicons cache a lot, so if the old square icon still shows, hard refresh or open the site in an incognito/private window.
