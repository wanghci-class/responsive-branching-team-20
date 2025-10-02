# Responsive Branching

In this week's prep, you completed a responsive grid design that uses two "breakpoints" to distinguish three layouts for a page. In this lab, you will continue with the same code base (but you should start from our version available here).

## but first, BRANCHES!

**I highly recommend you try to use [SourceTree](https://www.sourcetreeapp.com/) (unless you're on Linux where it's unavailable) for this.**

1. Pair up!
2. Accept the github classroom link for this assignment
    1. (coordinate with your partner so that you both end up win the same team in github classroom)
3. Make a branch that you name as your EID, so like mine will be named `stewarmc`
    1. you are both doing this on our own computers, so you will each have the main branch you cloned and then 1 more branch, named for your own eid
4. Push your new branch to the github repo in a remote branch with a matching name
5. Assign one partner in the pair to the [Tiny Grid task below](#tiny-grid), the other to the [Dark Mode task below](#dark-mode)
    1. Each of you complete your task in your own branch and commit the cahnges to your branch and push your branch to github
6. When you're done, work together to merge the branches into main on one of your computers, then push the code to main.
7. Submit the assignment by getting the link to the most recent commit in main that has both branches' changes merged in and submitting it to Canvas (it should look something like `https://github.com/343F25/responsive-branching-somethingsomething/commit/f265morestuffinhere`)

## Tiny Grid

Add in a 3rd breakpoint to now have a 4th layout for the page: a "tiny" layout.

1. accept the github classroom assignment linked from your canvas course
    * in doing so, tell github classroom that you're in a group with your neighbor
1. both you and your neighbor: clone the repository to your local machines
1. Replace the fake name in the `README.md`'s Acknowledgements with your own name.
1. add the README.md changes to the staging area, commit the changes, and push the changes to the remote repository.
1. edit the tiny.css such that when the viewport width is less than 375px, the layout changes such that only the "main article area" is displayed.
1. add the tiny.css changes to the staging area, commit the changes, and push the changes to the remote repository.

## Dark Mode

1. Create a new file called `dark.css`
1. edit your `index.html` to include a link to `dark.css` in the `head` of the document just before it links to `debug.css`
1. edit `dark.css` such that if the user has a "dark" preference, the page will be styled with a dark theme.
1. add a javascript file called script.js and a script tag to the bottom of the body of the html file that loads `script.js`.
1. in `script.js`, add an event listener such that when the user clicks any of the 3 nav items, the page will render with the selected color scheme.
    1. most often, dynamic styling is best implemented via (a) defining style rules for corresponding classes in css and (b) adding/removing classes to the necessary elements dynamically

# Acknowledgements

Developers:
1. Nay Bored

With huge thanks to the ~~CS 343 cheat code~~ [Mozilla Developer Network](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_grid_layout/Realizing_common_layouts_using_grids#a_responsive_layout_with_1_to_3_fluid_columns_using_grid-template-areas).