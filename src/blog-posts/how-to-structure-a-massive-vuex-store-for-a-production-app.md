When looking at Vuex tutorials, you can see most of them are quite simple.

The logic is explained well, but scalability suffers. How will this work in my production app?

Here’s a simple store example from [Vuex official docs](https://vuex.vuejs.org/guide/#the-simplest-store):

```javascript
import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    count: 0,
  },
  mutations: {
    increment(state) {
      state.count++;
    },
  },
});
```

<figcaption>A simple store</figcaption>

There’s no need to explain this. I assume that you already have some Vue and Vuex knowledge prior to this article.

My goal is not to explain what a store, state, or mutations are.

Instead, I want to show you a massive store with 1,000+ state attributes, mutations, actions, and getters.

I want to teach you how to structure the store for the best maintainability, readability, and reusability.

It can have 100,000+ attributes. It would still be clear.

Let’s dive in.

---

## Meet Modules

As we already said, keeping everything in one file will create a mess. You don’t want a 50,000+ LOC file. It’s the same as keeping your app in one component.

Vuex helps us here by dividing the store into modules.

For the purpose of this example, I will create a store with two modules. Note that the process is the same for 100+ modules, as well as 100+ actions, getters, and mutations within every module.

```javascript
const userModule = {
  namespaced: true,
  state: () => ({}),
  mutations: {},
  actions: {},
  getters: {},
};

const organisationModule = {
  namespaced: true,
  state: () => ({}),
  mutations: {},
  actions: {},
};

const store = new VueX.Store({
  modules: {
    user: userModule,
    organisation: organisationModule,
  },
});

store.state.user; // -> `userModule`'s state
store.state.organisation; // -> `organisationModule`'s state
```

<figcaption>Updated store</figcaption>
<br>

The `namespaced` attribute is incredibly important here. Without it, actions, mutations, and getters would still be registered at the global namespace.

With the `namespaced` attribute set to true, we divide actions, mutations, and getters into the modules as well.

This is really helpful if you have two actions with the same name. Having them in a global namespace would create clashes.

```javascript
const userModule = {
  namespaced: true,
  state: () => ({}),
  mutations: {},
  actions: {
    SET_USER() {},
    SET_USER_LOCATION() {},
  },
  getters: {},
};

store.state.user['SET_USER'](); // correct ✅

stote.state['SET_USER'](); // wrong ❌
```

<figcaption>Namespaced module</figcaption>
<br>

As you can see, the module is completely “local” right now. We can access it only through the user object on the state.

Exactly what we want for our massive application.

---

Cool, now we have a store divided into modules!

However, I don’t like the hardcoded strings for actions. It’s definitely not maintainable. Let’s address this issue.

---

## Types To Save You From Headaches

We don’t just want to access every property from every module in every file. That sentence sounds like hell.

We want to import them first. Then use `mapGetters`, `mapActions`, or `mapMutations` to achieve that.

```javascript
// userModule.js
export const SET_USER = 'SET_USER'
export const SET_USER_LOCATION = 'SET_USER_LOCATION'

const userModule = {
  namespaced: true,
  state: () => ({}),
  mutations: {},
  actions: {
    [SET_USER]() {},
    [SET_USER_LOCATION]() {}
  },
  getters: {}
}

// vue file
import { mapActions } from 'vuex'
import { SET_USER, SET_USER_LOCATION } from './userModule.js'

...mapActions({
  setUser: SET_USER,
  setUserLocation: SET_USER_LOCATION
})
```

<figcaption>Access actions with mapActions</figcaption>
<br>

This gives you a clear view of store attributes used by your Vue file.

But that’s not enough. Everything is still in one file. Let’s see what we can do to scale it properly.

---

## Folder Structure

Ideally, we want to split modules into different folders. Within those modules, we want to split their mutations, actions, getters, state attributes, and types across different files.

<img src="https://dev-to-uploads.s3.amazonaws.com/uploads/articles/jumfdh6gb3wedgtg8rrk.png" alt="The desired folder structure" />

<figcaption class="img">The desired folder structure</figcaption>
<br>

Folder `store` will be created in the root folder of our project.

It will contain two things:

1. `index.js` file
2. `modules` folder

Before explaining the `index.js` file, let’s see how we divide a single module. Let’s check the `user` module.

All of its actions, mutations, and getters should be listed in the `types.js` file. So, something like:

```javascript
// actions
export const SET_USER = 'SET_USER';
export const SET_USER_LOCATION = 'SET_USER_LOCATION';

// mutations

// getters
```

<figcaption>store/modules/user/types.js</figcaption>
<br>

We’ll have a clear view by importing those consts every time we want to use them.

Let’s look at the actions now. We want to move them to the `actions.js` file.

To do so, we only need to copy the `actions` object within the module and `export default` it, while importing the types:

```javascript
import { SET_USER, SET_USER_LOCATION } from './types.js';

export default {
  [SET_USER]() {},
  [SET_USER_LOCATION]() {},
};
```

<figcaption>store/modules/user/actions.js</figcaption>
<br>

We will do the same thing for mutations and getters. The state attributes will remain in `index.js` (within the user module folder):

```javascript
import actions from './actions.js';
import mutations from './mutations.js';
import getters from './getters.js';

const state = {};

export default {
  namespaced: true,
  state,
  actions,
  mutations,
  getters,
};
```

<figcaption>store/modules/user/index.js</figcaption>
<br>

Now we have all of our modules divided into multiple files.

The one thing remaining is to link all those modules in the `index.js` file within the `store` folder:

```javascript
import Vue from 'vue';
import Vuex from 'vuex';

// Modules import
import UserModule from 'modules/user';
import OrganisationModule from 'modules/organisation';

Vue.use(Vuex);

const state = {};
const actions = {};
const mutations = {};
const getters = {};

const modules = {
  user: userModule,
  organisation: organisationModule,
};

export default new Vuex.Store({
  state,
  actions,
  mutations,
  getters,
  modules,
});
```

<figcaption>store/index.js</figcaption>
<br>

## Conclusion

By using this architecture, we had zero problems with scalability in our massive production app.

Everything is so easy to find.

We know exactly where all the actions are triggered.

The system is highly maintainable.

If you have any recommendations for the improvements, please let me know. I would love to hear your opinion.
