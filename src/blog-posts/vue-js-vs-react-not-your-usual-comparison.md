From the moment I started learning React, I completely fell in love with it.

I can create beautiful UIs just with JavaScript? Suddenly, I had the power of JavaScript inside HTML and CSS?

I absolutely loved it. Amazing.

I used the tool for years, but I couldn’t help myself from observing the Vue.js hype. Apparently, every developer that uses it loves it so much!

How’s that possible? I love React, but sometimes it makes me frustrated; why is there much less frustration in the Vue.js world?

I’ve started Vue on a commercial project a few months ago and completely moved from React.

I was a bit sad when I found out that I had moved from my beloved tool.

But those frameworks are just tools; we should never make strict career decisions based on them.

It’s the front-End world — all the tools will vanish soon; new ones will come quickly.

Now, after tons of experience in frontend development and frameworks like Vue.js, React, and Ember.js — let me explain why I find Vue.js the best.

---

## One Really Simple App

We’re building a super simple app in both React and Vue.js today. It looks something like this:

<img src="https://dev-to-uploads.s3.amazonaws.com/uploads/articles/d2ki894xuns0kr702ttt.gif" alt="our-really-complex-app"/>

<figcaption class="img">Our super complex app</figcaption>

Let’s dive into the code here. React, you come first. This is a project created with `create-react-app`; I slightly modified `App.js` here.

```jsx
import { useState } from 'react';

function App() {
  const [isMagicalAnswerVisible, setIsMagicalAnswerVisible] = useState(false);

  return (
    <div className="App">
      <p className="magicalQuestion">Which FE framework is the best?</p>
      <button
        className="magicalButton"
        onClick={() => setIsMagicalAnswerVisible(true)}
      >
        Find out!
      </button>
      {isMagicalAnswerVisible && (
        <p className="magicalAnswer">.....what is life?</p>
      )}
    </div>
  );
}

export default App;
```

I know React well, so I can understand all of this. But let’s assume I’m don’t know anything about React — only something about FE development and Web in general.

With that knowledge, I want to know what will be rendered on the screen. When I look at the browser, I see only styled HTML elements there. Not JavaScript.

And here — everything is JavaScript! How do I know what will actually render on the screen?

I can see that this `function App()` returns some code that looks similar to HTML, but it’s not HTML. What is this?

Ok. I’ll assume that thing will render.

What is `useState` here? Why do need to assign its result to an array immediately?

I don’t care so much about the functionality. I want to see the same thing that I will see on the screen. Why is this strange stuff written first?

What is `className`? Why can’t I just use `class`?

`onClick={() => setIsMagicalAnswerVisible(true)}` why do I have to do this, can’t I just do `onClick={setIsMagicalAnswerVisible(true)}`? Oh, getting some errors now. I will return the arrow function even though I don’t know why.

`{isMagicalAnswerVisible && <p className=”magicalAnswer”>…..what is life?</p>}` What is this? What’s with the curly braces? Oh, the JS operator `&&` is here. `p` will render if that’s `true`?

Imagine a huge component here. I want to see what I will see on the screen. But I can’t, because I have to scroll the first 100 lines of code to find the `return` statement.

I trust the naming of the functions. I believe they do what they say. I don’t want to look at the implementation details first.

**Let me see what will render!**

---

## What Vue.js Has To Offer

This is a project created with the Vue CLI. I modified `App.vue` here a bit:

```html
<template>
  <p class="magical-question">Which FE framework is the best?</p>
  <button class="magical-button" @click="findOutMoreAboutThatMagicalFramework">
    Find out!
  </button>
  <p v-if="isMagicalAnswerVisible" class="magical-answer">.....what is life?</p>
</template>

<script>
  export default {
    name: 'App',
    data() {
      return {
        isMagicalAnswerVisible: false,
      };
    },
    methods: {
      findOutMoreAboutThatMagicalFramework() {
        this.isMagicalAnswerVisible = true;
      },
    },
  };
</script>
```

Hmm, what can I see here? Oh, the template! I guess I will see this template on the screen.

Oh nice, `class` is here. Is this an HTML file?

Hmm, here is `@click`, as well as `v-if`. A bit strange at first, but actually makes a lot of sense.

And it’s so simple.

The `<script>` tag is here. Wait, is this really not an HTML file? Should I rename the extension from `*.vue` to `*.html`?

Nah, it’s probably fine.

What’s inside the `export default` here?

`data();` what’s this? I’ll need to google it. Oh, it’s just the component’s state.

`methods`? Pretty straightforward.

I see exactly what will render first. I see something which looks like an HTML.

**But it’s not. It’s an extremely powerful Vue.js app.**

---

## Vue.js Looks… So Familiar

I want to style my component. What do I need to do?
I’ll assume that it’s the same as in HTML; I’ll just add a `<style>` tag at the bottom of a `*.vue.js` file. Nah, that can’t work.

**But it works!**

The learning curve for React can be huge, especially if you deal with more complex stuff. Remember the times before hooks? So many Render Props, Higher-Order Components, and a bunch of other stuff.

How about `this.handleClick = this.handleClick.bind(this)`? I know so many React developers who don’t have a clue what’s going on behind the scenes here.

On the other side, everything is so simple with Vue.js. It feels like an updated version of HTML.

I’ve worked so much with Vue.js in the last couple of months, and the amount of frustration is minimal.

I can focus only on the real problem, not the actual implementation.

I wonder all the time — how is that possible? I grasped the core knowledge in 2 weeks, and I can build almost everything now?

It wasn’t like this with React. At times, it was really frustrating. But I still loved it just because it’s all JavaScript.

---

## Everything in JavaScript is Amazing, But It’s Just Not True

The Web is composed out of HTML, CSS, and JavaScript.

If we want to have a deep understanding of it, we mustn’t confuse ourselves with saying that everything is JavaScript.

With Vue.js, I have a feeling that I learn much more general web-related knowledge, not just Vue-related.

With React, it was the opposite. You need to break your deep understanding of the web to adopt that mindset.

The problem is — the web will stay, and React will fade. It’s not a programming language, just a library.

Facebook will release something new; something better.

All your knowledge will vanish with React itself.

Of course, you’re learning a lot of things other than React itself — but with Vue, you’ll learn even more.

Vue works like the web. It’s a bunch of components, looking like the HTML, emitting the events like the real web.

Yes, you don’t pass a function as a prop. You catch a bubbled event that your child component emitted.

Same as in the real web.

---

## Am I overexaggerating?

Ok, I know I am a bit.

Nevertheless, I still love React. Even though I don’t agree with the JavaScript-only web.

But I have a feeling that I can learn the fundamentals better with Vue.

I can focus on the real business problem, not the implementation.

Everything is so simple, yet so powerful.

So fun too, because there’s no frustration.

What do you think about this? I would love to hear something from you.
