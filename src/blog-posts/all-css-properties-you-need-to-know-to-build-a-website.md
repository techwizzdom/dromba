Whether you're at the beginning of your CSS journey or somewhere else, you got to admit - a number of CSS properties is massive.

And it's easy to confuse yourself in that vast sea.

You're copying code from StackOverflow until you find a solution that fits. But how will that scale? Why does it even work?

Most of the time, you don't care about the answer. You just focus on the result.

When building a website, some of the CSS properties are must-haves; yet, it's hard to recognize them.

This article exists to help you solve the most common CSS problems while building a website.

Let's dive into properties you cannot avoid.

---

## 1. display: flex;

Do you need to center an element?

Googling that will likely offer tens of different solutions; however, you'll need only one most of the time.

```css
.your-class-name {
  display: flex;
  justify-content: center;
  align-items: center;
}
```

`display: flex;` will align your child elements one next to each other in a horizontal row. Tip: you can add `flex-direction: column;` to change it to a vertical row.

`flex-direction` determines your main axis. Default value is `row`.

`justify-content: center;` will align the items on your main axis. That means the item will be horizontally centered for our code snippet.

`align-items` controls your cross axis, i.e. your elements are vertically centered.

You can pass many attributes here, but I'll mention only one: `justify-content: space-between;`. This will distribute the elements across the row without any margins at the beginning or end.

---

## 2. margin

This property will determine the distance between certain elements.

```css
.your-class-name {
  margin-top: 16px;
  margin-right: 12px;
  margin-bottom: 16px;
}
// shorthand
.your-class-name {
  margin: 16px 12px;
}
```

You can directly connect properties with sides by doing `margin-top`, `margin-right`, etc., or cover everything with a single `margin` property:

```css
margin: {{ top }} {{ right }} {{ bottom }} {{ left }};
```

If you omit `bottom`, it will inherit `top` (check out our example)! If you omit `left`, it will inherit `right`.

---

## 3. padding

At the first glance, `padding` looks similar to `margin`.

The syntax is identical as `margin` too; shorthand as well.

Why do we need it then?

Imagine that you have a physical suitcase. You want to write something on the case.

However, you don't want to start writing in the top-left corner. You want to indent your text a bit.

For that, you will use `padding`. Padding influences the inside of our element.

However, if you have two suitcases next to each other and you want to make a distance between them, you'll use `margin` for that.

---

## 4. background-color

This one is pretty simple and an absolute necessity. You can apply this property to most of the HTML elements.

```css
background-color: blue;
background-color: #232323;
background-color: rgb(255, 255, 128);
background-color: rgba(255, 255, 128, 0.5);
```

Attributes can vary: from a simple color name, over its HEX value, to the RGB (even HSL).

RGBA is interesting here because instead of just setting a color, you can also set the opacity. Seeing that 0.5? That means that transparency will be 50%.

---

## 5. color

`color` is similar to `background-color`; the only difference is that it influences the text's color. Everything else is the same, transparency included.

---

## 6. opacity

But we can make anything transparent!

```css
opacity: 0.1; // 10% visibility
opacity: 0.9; // 90% visibility
```

This is useful for disabled states or interesting effects.

---

## 7. width

This is a tricky one. Most of the time, you don't want to have fixed widths. Your design should be responsive and you can accomplish that with margins and paddings.

However, sometimes you need to be fixed. Maybe you want to set your icon with to `24px`?

Or look at this article. Try to zoom out of the page. You'll see that it won't go from edge to edge.

That's because the whole page has `max-width` property. Useful to wrap your website with it.

---

## 8. height 

`height` is much simpler than width due to the nature of our scroll direction.

However, you'll still want to use as few fixed heights as possible. One example where you could is your header.

All the other caveats like `min-height` and `max-height` exist here too.

---

## 9. cursor: pointer;

Hover over any button on this page. Can you see how the cursor changed into a little hand?

`cursor: pointer;` is the reason for that. Whenever you can induce any actions (buttons, links, etc.) you need to use it.

---

## 10. font-size

This one is pretty simple and controls the sizes of your font. If you're an absolute beginner, I recommend using only `px` here.

However, if you want to dig deeper, investigate `rem`. Basically, you set your default font size in `px`, and all the other fonts will be relative to that base value.

For example, if your base value is `16px`, `2rem` will be `32px`.

---

## 11. font-family

You want different fonts, right? Google Fonts are impressive and it's so easy to pick one of them, include them in your `index.html`, and add its name to `font-family`.

---

## 12. :hover

This will add any effects to a certain element on hover.

```css
.your-class-name:hover {
  cursor: pointer;
}
```

Our example will change the cursor to a pointer.

---

## Conclusion

What if I told you that you'll solve most of your CSS problems with these 12 properties?

Sure, you'll maybe need a few more depending on your case, or you'll need to dig deeper into some of those.

But this is enough to build a solid-looking website.

_Check out the bottom of [the article originally published on Medium](https://link.medium.com/xYsyBfTwXib) for the best CSS courses!_
