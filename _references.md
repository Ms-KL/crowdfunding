# References, Guides & Notes

## General

- `const { id } = useParams();`
- `useEffect` runs / triggers the first time after the first render
- `fetch`: built in request in browser to server
  - `fetch`, then do this, then do that
  - when the results get back, will receive `JSON`
  - `JSON` key:value pair
  - When we send data back, we send strings back
  - when the results return - need to turn it into `JSON`
  - set the `JSON` to the projectList --> async code
- `export default AllProjectsPage` vs `export {AllProjectsPage}`

---

## Homepage

- one versus several useEffect hooks in single component:
  - https://stackoverflow.com/questions/54002792/
- Get sum of numbers in array:
  - https://stackoverflow.com/questions/62358365/*react-js-get-sum-of-numbers-in-array
- use map, reduce and filter:

  - https://medium.com/poka-techblog/simplify-your-javascript-use-map-reduce-and-filter-bd02c593cc2d

- Shuffle function
  - https://flaviocopes.com/how-to-shuffle-array-javascript/
  - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort
  - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/slice

---

## PledgePage.jsx

- Map Reduce and Filter:
  - https://medium.com/poka-techblog/simplify-your-javascript-use-map-reduce-and-filter-bd02c593cc2d
  - use map to target amount value in pledgeList:
    - runningTotal starts at 0, amount is each mapped amount value from pledgeList
    - for each value in amount mapped from Pledge list, add it to the running total

---

## ProjectPage.jsx

- Map Issue:

  - https://stackoverflow.com/questions/71135587/react-js-typeerror-cannot-read-properties-of-undefined-reading-map
  - https://java2blog.com/typeerror-map-is-not-function-javascript/

- Progress Bar:
  - https://dev.to/ramonak/react-how-to-create-a-custom-progress-bar-component-in-5-minutes-2lcl

---

## PutSessionUserPage.jsx

- image render issue:
  - https://stackoverflow.com/a/54844591
  - https://stackoverflow.com/questions/47196800/reactjs-and-images-in-public-folder
- React form structure reference:

  - https://reactjs.org/docs/forms.html
  - https://beta.reactjs.org/reference/react-dom/components/input

- Local/Session Storage (get and delete):
  - https://blog.logrocket.com/localstorage-javascript-complete-guide/
  - https://stackoverflow.com/questions/64093100/react-remove-localstorage-item-on-page-load
  - https://blog.logrocket.com/using-localstorage-react-hooks/
  - https://openclassrooms.com/en/courses/7132446-create-a-web-application-with-react-js/7209016-trigger-effects-with-useeffect#:~:text=The%20hook%20useEffect%20is%20called,time%20your%20component%20is%20rendered

---

## RegistrationForm.jsx

- rest property - destructuring (for avatar function):
  - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment#object_destructuring
- default image render issue:
  - https://stackoverflow.com/a/54844591
  - https://stackoverflow.com/questions/47196800/reactjs-and-images-in-public-folder

---

## UsersPage.jsx

- Notes:

  - `map` = create new array that only contains the pledge amounts
  - `reduce` = sum up pledge amounts in the new array, return the total
  - 0 = initial value of `reduce` = 0
    https://medium.com/poka-techblog/simplify-your-javascript-use-map-reduce-and-filter-bd02c593cc2d
  - import React from "react"; not required as it's already a jsx file
