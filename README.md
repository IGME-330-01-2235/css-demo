# css-demo
A demo of different CSS techniques for review.

To run locally, clone the repo, run `npm install` followed by `npm start` - then open a browser to `http://localhost:5173`.

## css-02 - Style Locations

This branch demonstrates different style locations, all setting a different background color for the `<h1>` element. Each row of the table below shows a different place to write styles, what color is set in that location (for this demo), and describes when to use a particular location/technique. The closer to the bottom, the higher the specificity (meaning the more-specific CSS will override the less-specific CSS).

| Color  | When to use this technique | Where are the styles written |
|-------:|-------|-------|
| red    | Usually (except with vite / a bundler). | `<head>` > `<link>` > `head-link.css` |
| orange | For this-page-only overrides. | `<head>` > `<style>` > *written in the document* |
| yellow | When using vite / a bundler. | `main.ts` > `import` > `vite-import.css` |
| green  | Highly unusual. | `<body>` > `<style>` > *written in the document* |
| blue   | Sometimes. | `<body>` > `<h1>` > `style=""` attribute |
| purple | Sometimes. (common with frameworks) | `main.ts` > *using JavaScript to select/set the &lt;h1&gt; style attribute* |

---

The other demos are on different branches:

|Branch Name | Description |
|-----------:|-------------|
| [css-01](https://github.com/IGME-330-01-2235/css-demo/tree/css-01) | Default Styles |
| [css-02](https://github.com/IGME-330-01-2235/css-demo/tree/css-02) | Style Locations |
| [css-03](https://github.com/IGME-330-01-2235/css-demo/tree/css-03) | Reset CSS |
| [css-04](https://github.com/IGME-330-01-2235/css-demo/tree/css-04) | Normal Flow |
| [css-05](https://github.com/IGME-330-01-2235/css-demo/tree/css-05) | `position:` |
| [css-06](https://github.com/IGME-330-01-2235/css-demo/tree/css-06) | `float:` |
| [css-07](https://github.com/IGME-330-01-2235/css-demo/tree/css-07) | `display: flex` |
| [css-08](https://github.com/IGME-330-01-2235/css-demo/tree/css-08) | `display: grid` |
| [css-09](https://github.com/IGME-330-01-2235/css-demo/tree/css-09) | `column-count:` |
| [css-10](https://github.com/IGME-330-01-2235/css-demo/tree/css-10) | `@fontface` |
| [css-11](https://github.com/IGME-330-01-2235/css-demo/tree/css-11) | `@media` |

To switch to a branch (css-01, for example), run: 

```
git checkout css-01
```