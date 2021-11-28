The layout is hard.

There are many different CSS/HTML approaches these days, but most of them are wrong.

"I need to create vertical spacing between components; should I use margins or paddings?"

None.

Let's dive deeper into the organisation of your components on the screen.

---

## The Fall Of Margins

In prehistoric Web times when we had linked documents instead of reusable components, margins made a lot of sense. Let's face it, there wasn't a lot of choices.

Today, in an ideal situation, your Web App should be composed out of reusable components, all the time.

You should be able to pick a component, plug it somewhere in the UI, and it should "magically" work, without any additional styling.

If your layout is set up correctly, mobile design should work out of the box too!

Margins are not great here. Obviously, you can get the job done, but it takes far more effort. It's way less elegant, and harder to maintain.

---

So, how should we add spacing between those components?

We can just pass margin as a prop, right?

**No.** Components shouldn't care about spacing between them.

**Their parents should.**

---

## Adding Some Gap

Our layout can be magical and powerful with `flex` and `grid`.

Let's say we have multiple components and want to have 3 in each row. Also, spacing between them should be `1rem`.

Components don't care about that. Only the parent does:

```css
.parent {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 1rem;
}
```

And that it! Whichever component we stick here, it will magically work (if we don't have a large `min-width` set on them).

What about tablet and mobile designs? The tablet should display 2 items per row, and mobile just 1.

Well, we just need to add 2 different media queries; one with `grid-template-columns: 1fr 1fr;` for tablet, and `grid-template-columns: 1fr;` for mobile.

And our layout will work all the time with just a few simple lines!

`gap` is a replacement for all various combinations of parent + child selectors and `margin` `top`/`right`/`bottom`/`left`.

---

## When To Use Margins?

We don't want to make unnecessary wrappers for all of our elements, and many of them need spacing between. What should we do?

If you style pure HTML elements, margins are acceptable here.

I still encourage you to structure them with grid/flex and use gap, but sometimes it's just not so easy to do that without adding additional wrapper elements.

So, this should be enough to make a decision:

Can you add spacing without adding extra elements, with grid/flex + gap?

1. If yes, do it.
2. If not, use margins.

Remember, this is true only for pure HTML elements. You never want to have margins on your components. A parent should always take care of their positioning on the screen. `grid`/`flex` + `gap` is the most elegant and powerful option here.

---

Also, a valid use case is when the spacing between the components is different. Selecting a child component in a `.parent .child {}` format and adding a margin makes a lot of sense.

But if you have too many different spacings, you need to ask yourself - is there a problem with the design itself?

---

## Pros and Cons

Let's take a look at the pros first.

- Your overall architecture will be much cleaner.
- `grid` and `flex` are powerful. All scenarios like element wrapping, overflow, and much more will be covered.
- Responsive design works out of the box. It's so easy when you don't need to switch from margin-left to margin-top for mobile layouts.
- Instead of calculating the position of every element relative to each other, the parent will always do it with a clear picture of a whole system.
- Your CSS will be much cleaner. You won't need those ugly classes where you target everything instead of the last element because you don't want to add margin-bottom to the last item in the list.
- Your components will be completely reusable because they won't have any spacing by default.
- This whole system will be way easier to maintain and extend.

It's kinda like the **plug and play system**.

With margins, it's the plug, **adjust**, and then play system.

We don't want that extra adjustment step.

---

Are there any cons? Well, both yes and no. The only one I can think of is `gap` not supported by IE11.

But you know what? Google search has dropped support for IE11. And you should too.

Let your layout become something you're so proud of. We're building a system of components here and `gap` is just perfect for it.
