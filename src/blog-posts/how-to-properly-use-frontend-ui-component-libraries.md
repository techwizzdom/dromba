When I started working on my current commercial project, I noticed that we’re using Vuetify as a component library for our Vue.js app.

There was loads of tech debt to solve, and Vuetify’s implementation was just one of them.

At first, we needed to upgrade the version — it was on the v1.5, and support for it ended in July 2020. Yes, the v2.x has many breaking changes.

Because of not using Vuetify correctly, this update took weeks.

However, after the upgrade as well as refactoring the implementation, we’ve found a way for making any breaking update sleek; a few hours top.

I want to share the best patterns with you so you don’t repeat the same mistakes. The examples here will be in Vuetify — but the theory behind it applies to all component libraries.

---

## The Biggest Problem With Our Implementation

To be honest, I don’t like these libraries. I just love doing everything from scratch. But I’m probably just a pure HTML/CSS/JS enthusiast.

Still, after doing that many times, the process is so sleek and simple. And you have complete control of your code, without any pressure from the external dependencies.

But there was no choice here at first. Our app is massive, it uses Vuetify, and we need to upgrade it. We use many components like `v-btn`, `v-dialog`, `v-checkbox`, `v-select`, etc.

Let’s use `v-btn` as an example.

Like any web application these days, our app has many buttons. To implement them, we just need to check the Vuetify’s (or any other library’s) docs and reveal the magic.

Oh, cool. So after initial setup, I only need to do:

```html
<v-btn>Some text</v-btn>
```

And it renders a button with all of its perks!

Hmm, but I want to change its background color and make it rounded. Let me check the docs again. Amazing, so I just need to do this:

```html
<v-btn color="#232323" rounded> Some text </v-btn>
```

And I can get my styled button without CSS, woohoo!

I also need a button in some other places, but it will be styled a bit differently. Let me render `<v-btn …props />` again.

There are many places in the app where we use this component. **The last time I checked, it was 423.**

That means — if Vuetify rolls out an update with breaking changes for v-btn, we’ll have to change its implementation on 423 places across the app.

But we don’t use just buttons. We use many of its components; 3200+ times across the codebase.

To update this historic version of Vuetify, we needed to manually update each component.

And of course, we needed to test everything. That’s why it took us weeks and cost the company a hell of a lot of money.

---

## Lesson 1. Use v-btn Only Once

Hmm, how’s that possible? I have 423 places with buttons in the app, why am I allowed to do it just on one?

To use this pattern, create a component. Let’s call it `app-btn`.

In that component, you’ll render `v-btn`. That’s the only place in the codebase where you can find it.

`app-btn` accept many props to manipulate its style. After you agree with your designer about the button versions, you can convert `app-btn` props to `v-btn` props.

For simplicity, let’s say that you agreed on two styles: `primary` and `secondary`.

`primary` button style has a blue background color. `secondary` has a transparent background.

If your `app-btn` gets primary as a prop, you’ll pass `color="blue"` to `v-btn`.

If your `app-btn` gets secondary as a prop, you’ll pass `text` to `v-btn`.

Why would you do that?

Well, if Vuetify introduces any breaking changes on the `v-btn` API and let’s say, renames `color` to `background-color`, or `text` to `flat`, you’ll have to refactor it just in one place.

This saves weeks.

I assume that you write tests for your app too. Do you use data-test attributes? Their placement is sometimes changed when Vuetify upgrades.

That means — refactoring the tests as well.

That could mean — loads of unexpected bugs.

---

### Extra Bonus: Consistency

Let’s check the `v-btn` API. Currently, it accepts 47 different props. Some of them are booleans, some numbers, some strings.

That means that you can have hundreds and thousands of different styles for your button by combining all of them.
But you don’t want that — your app will look terrible!

You just want to have a few button variants, and that’s it.

By using `app-btn`‘s limited props, you can achieve exactly that. You don’t need all 47 of them.

---

## Lesson 2. Useless Components

I agree that some of the components in the library can be pretty useful — especially if you don’t have a lot of HTML/CSS knowledge.

Implementing a dialog can be tricky.

Some of you won’t agree with me on this one — but many components are just nonsense.

`v-flex` is a `div` with `display: flex;`. Isn’t it easier just to write exactly that, with the pure CSS/SCSS and HTML?

By doing that, **you learn the core of the web**. Frontend frameworks and libraries get replaced and updated every day.

To keep up the race, you need to know the basics about HTML/CSS/JS and Web in general. In that way, you’ll adapt incredibly fast.

`v-flex` API will be forgotten. But your CSS knowledge won’t.

Don’t remember the v-flex API. Remember the CSS. `display: flex;` and `justify-content: space-between;` will solve so many of your problems.

Don’t let those 2 simple lines remain hidden behind the magic of a component library.

---

## The Magical Benefits

After refactoring, we have 10 custom components that wrap around Vuetify’s.

That means if Vuetify changes anything, we’ll need to make the updates only on 10 places!

The upgrade time is shortened from a few weeks to just a few hours, or even less.

Besides that, we focus on the “real” knowledge here, the basics of the browser. That matters so much in the everyday changing Frontend world.

I hope that this article will save you weeks or even months of refactoring.

Remember, you can apply this knowledge to any library out there if that makes sense.

Don’t import the same packages across the whole codebase. You’ll end up in an external dependencies hell.

Don’t even use those packages if they are pretty simple. Do it on your own, and learn something that will stay with you for years.

Not just for months, until there’s another breaking change.
