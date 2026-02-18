**Markdown Editor**

**Project description:**
A simple markdown editor that takes markdown input and displays HTML output. 
Uses Vue 3 marked.js. 

**How to run locally:** 
Clone the repository, make sure you have npm (npm install), and run "npm run dev"

**Feature list:**
- Textarea for Markdown input
- Preview pane for HTML output with a live preview
- See character count (excluding HTML tags)
- Toggle light/dark theme
- Responsive (stacked mobile / split desktop)


**Milestone 1 Quiz**
1. What is the purpose of `git commit` ?
 - This takes your staged changes and "marks" them in your local history. It is a snapshot of your project at a particular
   point in time. 
2. What happens when you push to GitHub?
 - When you push to GitHub, your local commits get sent to the remote repository. 
3. Why should we commit multiple times instead of once at the end?
 - The more often you commit, the more "snapshots" of your work that you have which you can revert back to in case anything
   goes wrong. It also makes it easier to follow and understand your work. 
4. What is the difference between local repository and remote repository?
 - Your local repository is stored on your computer and only seen by you, while the remote repository is connected to GitHub
   and stored on a server. Multiple people can interact with the remote repository, but only you can interact with your local
   one. 


**Milestone 2 Quiz**
1. What does `display: flex` do?
 - This allows you to dynamically style the child elements of the parent container which has the flex styling. 
   In this example, we use it so that we can make the webpage dynamic when the size changes. 
2. What is a media query?
  - A media query lets us apply a style only under certain conditions. For example, a style may only be applied
    when the webpage is under a certain width. 
3. Why should responsive design be handled in CSS, not JavaScript?
  - CSS is meant to handle styling. In JS, we would have to use event listeners which are clunkier and slower. We should
    save those for things like button presses and form submits rather than page-idth changes. 
4. What happens if media query is placed before base styles? 
  - Because of the cascade rule, the later styles will override the media query and it will never be enacted, 
    even if its condition is met. 


**Milestone 3 Quiz**
1. What is the difference between `data` and `computed` in Vue?
 - data stores values/attributes that can change while computed stores methods which compute values from other data
2. Why should we not manipulate DOM manually in Vue?
 - If we manipulated DOM manually in Vue, then Vue might not always realize we made a change and then overwrite that change. 
   It also makes the code harder to follow, so it's best practice to change the state instead. 
3. What does `v-html` do?
 - v-HTML renders a string as real HTML instead of plain text, so it processes the HTML instead of just displaying the characters
4. Why must we strip HTML before counting characters?
 - Because there are many extra characters like <> and </> which should not be included in the character count. We only 
   want to count characters of actual words. 

**Milestone 4 Quiz**
1. What is localStorage?
 - localStorage is the system that lets us save key-value pairs in the user's browser (ex. how theme stays the same
  even after page refresh)
2. When does `mounted()` run?
 - mounted runs after the Vue app is created and attached to the DOM
3. What is a Vue watcher?
 - A Vue watcher is a function that runs automatically when a specific data property changes
4. Why should theme state also be persisted?
 - Because if a user selects dark mode and refreshes, it should not suddenly turn back to light mode


**Final Reflection Quiz**
1. How did you utilise AI to help you code the app, show some examples.
 - I asked AI qualitative questions when I did not understand a section, or when I needed help debugging something. 
   For example, in milestone 4, I first attempted to make the theme toggle watcher work on my own, but when I did not get 
   the desired results, I asked AI how exactly a watcher works and where it should be placed in my app.js file. 
2. What part of the build was most challanging?
 - The most difficult part of the build was likely milestones 3 and 4, where I really had to implement Vue's reactivity system. 
   Understanding the difference between the data, computed, and watch sections helped a lot. 
3. What is the benefit of using a framework such as Vue for frontend development
 - A framework like Vue makes your application more reactive to change and helps you persist changes across screen refreshes
   and other events. For example, it lets you control the state of various parts of your app rather than directly editing the DOM. In addition, Vue only updates what changes and does not re-render your page each time, potentially making it faster. 


**Bonuses Completed**
- Clear button
- Word counter
- Hide/show input and output panes