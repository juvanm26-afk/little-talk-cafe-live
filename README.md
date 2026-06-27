# Little Talk Cafe — V36 Fix Favicon Build

This patch fixes the Netlify build error caused by the favicon.

## Fixed

- Replaces app/favicon.ico with a proper RGBA favicon
- Keeps app/icon.png
- Keeps app/apple-icon.png

## Error fixed

Netlify error:

```txt
./app/favicon.ico
Processing image failed
The PNG is not in RGBA format
```

## Apply patch

Copy the patch contents into your live project folder with `package.json`, replace files, then run locally if you want:

```bash
npm.cmd run build
```

Then commit and push in GitHub Desktop:

```txt
Commit message: Fix favicon build error
```

Netlify should redeploy automatically.
