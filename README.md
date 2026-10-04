# frontieroncloud.com

Source of [frontieroncloud.com](https://frontieroncloud.com), the home of the Frontier on Cloud
communities: measured, reproducible tests of cloud AI products, one page per test, each tied to a
repository in this organization at a named commit.

Static HTML and CSS served by GitHub Pages from `main`. No build step, no framework, no tracking.
One small script switches between the light and the dark theme.

Preview locally:

```
python3 -m http.server 8000
```

then open http://localhost:8000.

Numbers on the site are copied from each test repository's README and results; a correction is made
in the repository first, with a dated note, then mirrored here.
