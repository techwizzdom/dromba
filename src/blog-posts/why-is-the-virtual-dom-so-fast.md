When you start learning about the frontend world, you’ll almost immediately stumble across the term “Virtual DOM”.

Most of the popular frontend frameworks use it and want to prove their speed with it.

But what makes it so fast?

And what makes the real DOM so slow and inefficient?

---

## Understanding Browser Rendering

This topic is quite complicated, but you need to know the basics to understand the DOM.

Let’s assume that we request a simple HTML/CSS page from the server; we won’t need JS here.

After we receive a response in the form of HTML/CSS, this happens:

---

### 1. Parsing the HTML

The browser parses the HTML file and stores it in memory as an efficient tree structure.

That representation is called DOM — Document Object Model. You can see it by opening the DevTools, and selecting the “Elements” tab.

Just to be clear, DOM is not HTML! It’s just an interface for HTML and XML files.

---

### 2. Parsing the CSS

This step includes parsing the CSS — and storing it as a tree structure. It’s referred to as CSSOM.

---

### 3. Creating the Render Tree

When you combine DOM and CSSOM, you get a render tree. It’s made out of HTML nodes and their styles, and it represents what is rendered in the browser.

This won’t include every HTML node — e.g.`<head>`, but also elements with `display: none;`. Just the ones that are actually visible on the screen.

---

### 4. Layout Stage

The purpose of this stage is to calculate the positions of every node in the render tree. The browser will begin at the root and traverse the tree.

As you can imagine, this process can be expensive because it has to do loads of calculations for every node in the tree.
At the end of this stage, the browser knows each element’s exact position and size.

---

### 5. Paint Stage

Finally, we can fill the empty skeleton we’ve got after the Layout Stage.

The browser literally has to go through every pixel in the viewport which has to be filled. Sounds expensive, right?

Well, it is. This is definitely the most computational heavy step.

You can inspect the Layout and Paint Stages in DevTools under the “Performance” tab.

---

## Let’s Do the Math

As you probably already know, tree structures are incredibly efficient. The algorithms we have can traverse the enormous trees without too much effort.

**It’s really cheap to do it.** And that’s what steps 1–3 are all about.

On the other side, steps 4 and 5 can be incredibly expensive because we have additional steps of manipulating every pixel on the screen. Those algorithms are efficient, but still so slow compared to a tree structure.

Obviously, our initial page render will take a bit longer and Virtual DOM won’t help us much. We don’t have anything on the screen yet, right?

But later, when we make updates, Virtual DOM will go through steps 1–3. It will compare the new render tree with the previous one, and do steps 4–5 only for the modified nodes.

**That’s what makes it so fast!**

It doesn’t need to do a whole process from the scratch. It will re-render (steps 4 and 5) only the modified nodes!

The best thing is — you don’t need to take care of it. Your magical FE tool does that for you.

If you read about [Optimizing Performance in React’s official docs](https://reactjs.org/docs/optimizing-performance.html), you can see:

> “Internally, React uses several clever techniques to minimize the number of costly DOM operations required to update the UI. For many applications, using React will lead to a fast user interface without doing much work to specifically optimize for performance.”

So don’t make unnecessary optimizations. Most of the time, the complexity behind those optimizations will result in a slower code.

Love and praise the VDOM.
