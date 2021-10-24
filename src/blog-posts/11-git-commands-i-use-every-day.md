When I started my career, I was always afraid of losing my code changes. Sometimes, I would copy the code to text files just to be sure that I won't miss something.

That's not a great practice. If you know how to use git properly, you won't have these doubts.

Git has everything you need to make you safe. And much more.

Let's dive in.

### 1. Checking out a new branch

Obviously, I must use a new branch for every task I start:

```javascript
git checkout -b <new_branch_name>
```

This command creates a new branch and automatically sets it as active.

### 2. Selecting files for commit

This is one of the rare cases where I prefer GUI. In VS Code (or any other better IDE/text editor), you can easily see the updated files and select the ones you want to include in the commit.

But in case you want to do it with the CLI:

```javascript
git add .
```

This command will stage all changed files.

If you want to select a single file:

```javascript
git add <path/to/file>
```

### 3. Making a commit

After you stage some files, you need to commit them:

```javascript
git commit -m "Some changes"
```

In case you have some pre-commit rules turned on which doesn't allow you to make a commit (like linting), you can override them by passing the --no-verify flag:

```javascript
git commit -m "Some changes" --no-verify
```

### 4. Revert all changes

Sometimes, I experiment with the code. A bit later, I realize that it's not the right path and I need to undo all of my changes.

One simple command for that is:

```javascript
git reset --hard
```

### 5. See the latest commits

I can easily see what's going on on my branch by typing:

```javascript
git log
```

I can see the commit hashes, messages, authors, and dates.

### 6. Pulling the changes from the remote branch

When I checkout an already existing branch (usually main or development), I need to fetch and merge the latest changes.

There is a shorthand for that:

```javascript
git pull
```

Sometimes, if you're in one of your newly created branches, you'll also need to specify the origin branch:

```javascript
git pull origin/<branch_name>
```

### 7. Undoing a local, unpushed commit

I made a commit. Damn! Something's wrong here. I need to make one more change.

No worries:

```javascript
git reset --soft HEAD~1
```

This command will revert your last commit and keep the changes you made.

`HEAD~1` means that your head is pointing on one commit earlier than your current - exactly what you want.

### 8. Undoing a pushed commit

I made some changes and pushed them to remote. Then, I realized it's not what I want.

For this, I use:

```javascript
git revert <commit_hash>
```

Be aware that this will be visible in your commit history.

### 9. Stashing my changes

I'm in the middle of the feature, and my teammate pings me for an urgent code review.

I obviously don't want to trash my changes, neither I want to commit them. I don't want to create a bunch of meaningless commits.

I only want to check his branch and return to my work.

To do so:

```javascript
// stash your changes
git stash
// check out and review your teammate's branch
git checkout <your_teammates_branch>
... code reviewing
// check out your branch in progress
git checkout <your_branch>
// return the stashed changes
git stash pop
```

`pop` seems familiar here? Yep, this works like a stack.

Meaning, if you do git stash twice in a row without git stash pop in between, they will stack onto each other.

### 10. Reseting your branch to remote version

I messed something up. Some broken commits, some broken npm installs.

Whatever I do, my branch is not working well anymore.

The remote version is working fine. Let's make it the same!

```javascript
git fetch origin
git reset --hard origin/<branch_name>
```

### 11. Picking commits from other branches

Sometimes, I want to apply the commits from the other branches. For this, I use:

```javascript
git cherry-pick <commit_hash>
```

If I want to pick a range:

```javascript
git cherry-pick <oldest_commit_hash>^..<newest_commit_hash>
```

## Conclusion

Let's be honest, I don't use all of these commands literally every day - but I use them really often.

I prefer the CLI because we'll never be able to cover all the options with a GUI.

Plus, you'll find most of the tutorials only using the CLI. If you're not familiar with it, you'll have a hard time understanding them.

I covered the basics here, but whatever you need to do, just Google it.

I'm certain that you'll find an answer easily.
