Your production app is huge.

You hit `npm run dev` to start your development server.

After 1 minute, it's there! You can start your dev journey.

Although 1 minute doesn't seem like a long time  —  for us devs, it is. We are nitpicky and want everything **instantly**.

Luckily, there's a brand new tool that allows us that.

I present you  —  [Vite](https://vitejs.dev/).

---

## What is Vite?

Vite is a build tool that provides a blazing fast development experience.

Vite is a french word for "quick", and it's pronounced `/vit/` (not white!).

It's created by Evan You, the same guy who created Vue.js.

That doesn't mean that Vite is only for Vue.js  —  it's framework agnostic!

---

## Why Is It So Fast?

If you don't care about this and just want to set up Vite, just skip this section.

---

If you're still with me, amazing! I have a few history lessons for you.

Webpack, the most popular build tool today, was released in 2014.

Back then, browsers didn't support native module imports, so bundling the files made sense.

Not anymore in 2021.

It's an expensive process.

Plus, every time you update a single file, you need to update the whole bundle to see the change on the screen.

That's why Hot Module Reload can sometimes take many seconds!

Vite uses the power of native module imports, making your Hot Module Reload instant.

There are still some deeper reasons why it is so fast, so if you're interested, check out their website. But now, let's set up the app!

---

## Setting Up Vite… Is Simple And Fast As It Sounds

There's only one prerequisite: `Node version >=12.0.0`.

After it, you're all good!

Open your terminal and type:

```javascript
npm init vite@latest
```

Then, you have steps:

1. Project name
2. Framework (Vanilla JS, Vue, React, Preact, Lit, Svelte)
3. Typescript or pure JS

And that's it!

Now, you need to go to your project folder:

```javascript
cd <YOUR_PROJECT_NAME>
```

Install the dependencies:

```javascript
npm install
```

And start the development server:

```javascript
npm run dev
```

Here's what happens next:

<img src="https://i.imgur.com/RNMVNPQ.png" alt="blazing-fast-vite" />

It's ready in less than 0.3 seconds. That's insane!

Just for a comparison, the same app made with VueCLI + Webpack takes 10s initially. This makes Vite **39x faster**!

I won't even talk about the speed after the app gets bigger.

---

And Hot Module Reload is  —  instant.

Webpack takes around 2–3 seconds (initially), and up to 5 seconds for massive apps.

---

## Conclusion

What do you think about Vite?

New Frontend tools come out every day, but I can't remember when was I excited as this. I believe this could radically improve our already great Frontend development experience.

Have you tried it yet?
