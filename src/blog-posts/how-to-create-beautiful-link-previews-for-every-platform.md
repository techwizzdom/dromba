You've been working hard on your web app.

It's finally done. You are proud of it and want to share it.

But after pasting a link to Twitter, your link preview is so broken. Only the title is correct, everything else is missing.

The first impression everyone will have about your app — is bad.

Let's fix that.

After reading this article, you will be able to:

1. Have a correct image, title, and description.
2. Make it work properly on all platforms.
3. Have different previews depending on the shared page.

And it's all so simple.

---

## Mystical Meta Tags

`<meta>` tags in your HTML files have many use cases — one of them is to set up preview data properly.

There are eight most common attributes you need to set to make it look properly in 99% of the cases:

1. `title`
2. `description`
3. `og:title`
4. `og:description`
5. `og:image`
6. `twitter:title`
7. `twitter:description`
8. `twitter:image`

If `twitter` is missing, it will fall back to `og`; but still, it's great to include it.

First, you need to set up the correct meta tags in your `index.html` file:

```html
<head>
  <title>Your Title</title>
  <meta property="og:title" content="Your Title" />
  <meta name="twitter:title" content="Your Title" />

  <meta name="description" content="Your Description" />
  <meta property="og:description" content="Your Description" />
  <meta name="twitter:description" content="Your Description" />

  <meta property="og:image" content="img_url" />
  <meta name="twitter:image" content="img_url" />
</head>
```

And now, you'll have the correct previews when you share your page.

But what if you want different previews for different pages?

---

## Updating The Meta Tags

Updating meta tags is a straightforward process. You can use external libs for that (e.g. React Helmet if you use React), but I'll share my own pure JS solution.

Let's say we want to update the title. This code does exactly that:

```javascript
// update og:title
document
  .querySelector('[property="og:title"]')
  .setAttribute('content', yourTitle);

// update twitter:title
document
  .querySelector('[name="twitter:title"]')
  .setAttribute('content', yourTitle);

// update the "regular" title
document.title = yourTitle;
```

It's quite similar for description and image.

But we don't want to use it in this way. Let's create some helper functions!

```javascript
setTitle(title) {
  document.title = yourTitle;
  document.querySelector('[property="og:title"]').setAttribute('content', title);
  document.querySelector('[name="twitter:title"]').setAttribute('content', title);
}

setDescription(description) {
  document.querySelector('[name="description"]').setAttribute('content', description);
  document.querySelector('[property="og:description"]').setAttribute('content', description);
  document.querySelector('[name="twitter:description"]').setAttribute('content', description);
}

setImage(image) {
  document.querySelector('[property="og:image"]').setAttribute('content', image);
  document.querySelector('[name="twitter:image"]').setAttribute('content', image);
}
```

It's that simple.

Ideally, you can create a helper setMetadata and call it after your page gets mounted:

```javascript
setMetadata(metadata) {
  setTitle(metadata.title)
  setDescription(metadata.description)
  setImage(metadata.image)
}
```

But there is one trick.

This won't work properly because the metadata is updated on the client. Meaning, you need to download the app first and parse and execute the JS to update the meta tags.

You might think that you need to set up a separate server to have correct previews for the different pages. Luckily, you don't have to!

There is a simple solution.

---

## Let's Prerender

[Prerender.io](https://prerender.io/) is an amazing tool that will simulate serving a static HTML page to the crawlers.

So, instead of just improving your preview links, this will also boost your SEO. Woohoo!

The process is simple.

First, you need to create an account there (it's free!).

Then install [prerender-node](https://github.com/prerender/prerender-node) package.

They have nice docs, but the only thing you'll probably need to do is add this line to your express app (probably to your `server.js` file):

```javascript
app.use(require('prerender-node').set('prerenderToken', 'YOUR_TOKEN'));
```

You can get `'YOUR_TOKEN'` from prerender.io after you register.

Commit your changes, deploy them, and you're ready to go!

---

## Making Sure It Works Properly

You can paste your link to all the platforms and check it manually, but there are much better tools for that. For example, [Social Share Preview](https://socialsharepreview.com/).

Just paste your URL there and see the preview. If you missed something, the tool would let you know what you're missing.

There are many other tools that do the same trick, google them if this isn't enough for you.

---

## Conclusion

You have it now; your preview links look beautiful on all the platforms!

I just wanted to add that you might have some specific use cases not covered with this tutorial. It's all fine — just google the problem and find a specific meta tag you need. Then, update it with pure JS.

Happy previewing!
