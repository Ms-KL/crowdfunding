<img src="https://github.com/Ms-KL/Ms-KL/raw/main/images/shecodes-icon.png" width="80px" height="80px" />

# She Codes Plus Project 5: Crowdfunding Website (Front-End)

## About:

This is Crowdfunding Website was created by Kristy Leigh as a project for the [She Codes Plus](https://www.shecodes.com.au/) program.

- Visit deployed backend [HERE](https://icy-dew-540.fly.dev/)
- Visit deployed frontend: [HERE](https://prismatic-phoenix-20010b.netlify.app/)

### Tech & Skills Learned:

- JavaScript
- ReactJS
- Deployment using Netlify
- Network Calls
- VS Code
- Github Desktop
- Insomnia
  <br>

---

<br>

### **MVP Submission & Part A Submission:**

- Please view the [ReadMe](https://github.com/Ms-KL/she-codes-crowdfunding-api-project-Ms-KL#tldr-links) for MVP & Part A

<br>

### **Part B Submission:**

#### Project Requirements Checklist:

- A link to the [GitHub repository](https://github.com/Ms-KL/crowdfunding) containing the code for your project
- A link to the [deployed project](https://prismatic-phoenix-20010b.netlify.app/)
- Tour of project: [Loom Video](https://www.loom.com/share/20ac35568e334f8dabdcdb89dd191359)

<br>

---

---

### UX wishlist

- linking between pages
- use context instead of local & session storage
- change password
- edit & delete project, pledge and comment

### UI wishlist

- burger nav
- darkmode

### Attempted + incomplete:

- Tailwind:

  - goal: create some cool styling easily to polish up my project
  - problem: installed very late after I had styled and it distorted what I had established.
  - lesson: start with imports first, then style. Give myself more time for this

- EDIT for CRUD:

  - status: completed edit for user, but with session storage
  - problem: the resources I tried as a guide didn't translate easily. I think I was close, but ran out of time.
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
