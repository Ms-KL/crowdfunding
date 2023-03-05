Deployed Front End: https://prismatic-phoenix-20010b.netlify.app/
Deployed Back End: https://icy-dew-540.fly.dev/

# UX wishlist

- linking between pages
- REMOVE local storage on navigating away from any page
- change password
- edit & delete project, pledge and comment

# UI wishlist

- burger nav
- darkmode
- color dif
- change checkbox colour

# Tried and failed:

- Tailwind:

  - goal: create some cool styling easily to polish up my project
  - problem: installed very late after I had styled and it distorted what I had established.
  - lesson: start with imports first, then style. Give myself more time for this

- EDIT for CRUD:

  - problem: the resources I tried as a guide didn't translate easily. I think I was close, but ran out of time.
  - reference: I have a branch named CRUD if you want to review. I didn't merge into main.
  - lesson: start with CRUD first as it's crucial for blueprint. Should have arranged a one on one specifically for this right at the beginning.

- CONTEXT for user auth:

  - problem: I couldn't figure it out independently and by the time I tried to incorporate it into my code using Nirali's solution, but my code was already relying on props, so it complicated things.
  - lesson: This works TOGETHER with CRUD. Should have started with this.

- Pixelate avatar if anonymous using package:

  - problem: I think I tried about 10 different packages, all of which ended up old, conflicting with my version of React or caused issues. I spent days on this. Gave up as I ran out of time
  - alternative: created a conditional pointing to an alternative image instead. The image is hilarious, so I'm happy with that.
  - silver lining: this lead me to thinking about if an avatar is blank on registration... which I then tackled to create an awesome function if it is.
  - lesson: once CRUD is complete, list the kinds of functions I want and start hunting and testing early before code gets too complex.

- Using PROPS to pass down ID for Linking between pages:
  - problem: so many components and pages makes this process confusing and cumbersome. ID in particular. Tried to incorporate Context to help and confused myself further.
  - lesson: start with context during setup to avoid the props requirement when needing to connect a distance child from parent. Also map out structure visually for an easier view.
