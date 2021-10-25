I remember the time when I was starting my Frontend journey.

CSS caused a lot of headaches. Like most people, I assumed that it's easy. Then, I was annoyed when I couldn't get it working.

My usual flow was:

1. Detect a problem.
2. Google it.
3. Find a solution on StackOverflow.
4. C/P it without any understanding.

Position absolute and relative were properties I often encountered. "What the heck are they?"

They should be used far less often than you might use them, and when used properly, they are quite simple.

Let's dive deeper into the topic.

---

## How Are Position Absolute and Relative Related?

Usually, all elements follow the DOM flow.

But sometimes, you need to break that flow and tell an element exactly where to go.

Let's say that I have this HTML page:

<img src="https://dev-to-uploads.s3.amazonaws.com/uploads/articles/lcwvzstgiyalh0bs3r76.png" />
<figcaption class="img">HTML Page</figcaption>

The code is quite simple:

```html
<div class="bordered-container">
  <div class="absolute-item" />
</div>
```

```css
body {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background: linear-gradient(
    90deg,
    rgb(153, 253, 103) 0%,
    rgb(88, 255, 228) 100%
  );
}

.bordered-container {
  width: 600px;
  height: 300px;
  border: 2px solid black;
}

.absolute-item {
  width: 40px;
  height: 40px;
  background-color: red;
}
```

I want to absolutely position my `absolute-item` right now and tell it exactly where to be. I want it to be always inside the `bordered-container`; `10px` away from the bottom, and `30px` from the right.

Let's add the code:

```css
.absolute-item {
  position: absolute;
  bottom: 10px;
  right: 30px;
  width: 40px;
  height: 40px;
  background-color: red;
}
```

The result is:

<img src="https://dev-to-uploads.s3.amazonaws.com/uploads/articles/q8xx7nibv33eeavqaoji.png" />
<figcaption class="img">Position absolute</figcaption>

It's, obviously, not what we wanted. The square is positioned `10px`/`30px` away from the edge of a whole document, not the `bordered-container`!

That's why we need `position: relative;`.

---

## It's Not Black Magic

Whenever you set `position: absolute;` to an element, it must be positioned **relative** to something.

Your absolute element will look for the closest parent with `position: relative;`, and position itself relative to it.

If there are no elements like that, it will be positioned relative to the `body` element. This happened in our previous case.

To fix this, we simply need to add `position: relative;` to our `bordered-container`:

```css
.bordered-container {
  position: relative;
  width: 600px;
  height: 300px;
  border: 2px solid black;
}
```

The result is:

<img src="https://dev-to-uploads.s3.amazonaws.com/uploads/articles/9ce14ftotzbqrn1y2hz5.png" />
<figcaption class="img">Updated position absolute</figcaption>

Yep, it's that simple.

---

## What The Heck Is Z-Index?

When dealing with absolute positions, you might encounter on z-index, so it's worth mentioning.

I'm sure that you've tried setting it to `9999` but it still didn't work.

`z-index` is used when you have multiple absolute position elements.

The **absolute positioned** element with the biggest `z-index` will go on the top. The one with the lowest, on the bottom.

That's it.

Let's keep it simple.

---

##The Downsides Of Position Absolute

Absolutely positioned elements break the DOM flow.

They don't take any physical space on the document.

That means that the elements above/below could overlap with, even if you don't want it.

This can become tricky to maintain.

Our elements should be isolated, if we change one of them, we don't want to adjust everything else.

That doesn't mean `position: absolute;` is bad! It means that it has its own use cases and you need to know about them.

---

## When To Use It

If you need to adjust the layout within a page or a component, you should avoid `position: absolute;` in 99% of the cases. Opt-in for Flexbox or Grid instead.

However, if you want to add a badge to your image, it's just perfect. You always want the badge to be on the top (or the edge) of the image, so that it seems like it's a part of an image.

Or if you want to stack a few images/elements onto each other. There's no way other than `position: absolute;`.

And that's the ultimate guide: **use absolute positioning only when there's no other way to achieve that**.

---

## Conclusion

Absolute positioning is powerful, and the Web wouldn't be able to look this way without it.

If used properly, it's a charm.

But those use cases are quite rare. If you use it often, you will make your app a hell to maintain.

If you find a StackOverflow answer with `position: absolute;`, try to skip it. Keep looking. Is there any other way to do it?

If so, avoid the `absolute`.
