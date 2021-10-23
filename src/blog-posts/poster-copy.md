# title copyyy

## subtitile

I remember my first encounter with responsive design. Before any investigation, it seemed incredibly complex.

The same app runs and behaves differently based on so many types of user devices?

I have to cover all the screen sizes, from ultra-wide monitors, over laptop and tablet devices, all the way to the smartphones?

Mate, that must be a nightmare.

But honestly, it isn't.

**Responsive design is nothing more than a bunch of `if` statements.**

Let's dive deeper into the topic.

---

## Two Types of Design

Depending on what you create, you have two choices:

1. Mobile-First Design
2. Desktop-First Design

Mobile-First Design means that you first design and create software for mobile devices, and then extend it to desktop devices.

It assures that your core functionality will be available on a mobile device.

It's easy to add more functionality on the bigger screen, but it's hard to strip away functionality and keeping the core while going to a smaller screen.

---

According to this [research](https://www.perficient.com/insights/research-hub/mobile-vs-desktop-usage), 68.9% of websites visit came from mobile devices.

If you're creating a consumer app, Mobile-First Design is likely to be your choice.

Complex B2B solutions require Desktop-First Design, and sometimes don't even have a fully functioning mobile solution - they're just too complex.

That's why I'll focus on Mobile-First Design in this article.

---

## The Design

We'll keep this simple. Let's say that you have a number of items you want to display on your feed. It will look something like this:

<img src="https://dev-to-uploads.s3.amazonaws.com/uploads/articles/6wb86405qvl0ah46jo30.png" />

We have two components here:

1. Parent component, `container`
2. Child components, `items`

If we ignore the CSS code for everything except the layout, it will look something like this:

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  </head>
  <body>
    <div class="container">
      <div class="item">Item 1</div>
      <div class="item">Item 2</div>
      <div class="item">Item 3</div>
    </div>
  </body>

  <style>
    .container {
      display: grid;
      grid-template-columns: 1fr;
      align-content: flex-start;
      gap: 16px;
      padding: 16px;
    }

    .item {
      padding: 88px 16px;
    }
  </style>
</html>
```

Can you see the meta tag, `<meta name="viewport" content="width=device-width, initial-scale=1.0">`?

It's incredibly important and there's no responsive design without it. Without it, your browser won't know the initial zoom and it will look really bad on mobile devices.

---

## Doing the Magic to Make the Desktop Work

Just joking, this is no complex magic. As I've said, just a bunch of if statements!

We're trying to spread the items, keeping 3 of them in each row:

![Desktop design](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/6qtz8vetlsnyj2ttfftl.png)

<figcaption>Desktop design</figcaption>

The code looks like this:

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  </head>
  <body>
    <div class="container">
      <div class="item">Item 1</div>
      <div class="item">Item 2</div>
      <div class="item">Item 3</div>
    </div>
  </body>

  <style>
    .container {
      display: grid;
      grid-template-columns: 1fr;
      align-content: flex-start;
      gap: 16px;
      padding: 16px;
    }

    .item {
      padding: 88px 16px;
    }

    @media (min-width: 992px) {
      .container {
        grid-template-columns: 1fr 1fr 1fr;
      }
    }
  </style>
</html>
```

We're finally here, introducing `@media` queries.

Let's read this in a simple, already familiar way:

```css
if (screen width is bigger or equal than 992px) {
    apply styles in the same way as before
}
```

And that's it! Nothing more than this! The styles here will affect only screens wider than `992px`.

---

## How About Tablet?

You can combine media queries with logical operators.

Yep, you can do something like:

```css
@media (min-width: 768px) and (max-width: 991px) {
  // styles
}
```

And those styles will affect everything in range from `768px` to `991px`.

Remember, this is nothing more than an if statement.

---

## How to Cover All Devices

Media queries are much more than just `min-width` and `max-width`.

You can check stuff like `orientation`, `aspect-ratio`, and much more.

You can use logical operators like `or`, `not`, and all the others.

But to be honest, what you've read in this article is enough for an amazing and simple start.

You probably won't need most of the other queries anyway. Maybe in some rare scenarios. By then, your knowledge about queries will be so powerful that complex queries will be a joke!

---

**Loving my work? Feel free to [buy me a croissant](https://www.buymeacoffee.com/domagojvidovic). It's an incredible boost to my motivation.**

_Check out the bottom of [the originally published article on Medium](https://domagojvidovic.medium.com/a-ridiculously-simple-way-for-creating-responsive-web-apps-c640f9814613) for the best course around responsive web._
