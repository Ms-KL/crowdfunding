# Attempts & Alternatives

## App.jsx

- Below replaced by Layout when setting LoggedIn state

  ```jsx
  const HeaderLayout = () => (
    <div>
      <Nav />
      <Outlet />
    </div>
  );
  ```

// ------- CSS -------
// ------- COMPONENTS -------
// ------- STORAGE -------
// ------- AUTH -------
// ------- STATE -------
// ------- HOOKS -------
// ------- CLEAN -------
// ------- ACTIONS & EFFECTS -------
// ------- RENDER -------
{/_ -- PROJECT TIMELINE -- _/}
/_ RENDERED ON USERPAGE.JSX _/
/\*
see \_attempts_and_alternatives.md for unfinished and tried solutions

see \_references.md for links to references and notes
\*/

---

## PledgeCard.jsx

- Trying to create direct link to project:

  - `<Link to={`/user/${supporterID}`}>`

  ```jsx
  function PledgeCard(props) {
    const { pledgeData, projectData } = props;

    function getProjectLink() {
      if (projectData) {
        return `/project/${projectData.id}`;
      } else {
        return "";
      }
    }

    return (
      <div className='pledge-card'>
        <h3>
          ${pledgeData.amount} pledged to{" "}
          <Link to={getProjectLink()}>{pledgeData.project}</Link> @{" "}
          {pledgeData.date_pledged}
        </h3>
        <p>
          {pledgeData.supporter} says: "{pledgeData.comment}"
        </p>
      </div>
    );
  }
  ```

---

## PutSessionUserPage.jsx

- SESSION STORAGE:

  - Added user details into Session Storage
  - as they navigate away from the edit page or the users/session page, the session storage data deletes
  - I know not an ideal solution. Context would be better. Will polish in future

  - Trying to delete storage when navigating away from session and session/edit pages:

    ```jsx
    // attempt 1
    useEffect(() => {
      if (!window.location.href.includes("users/session/")) {
        localStorage.removeItem("userData");
      }
    });
    ```

    ```jsx
    // attempt 2
    useEffect(() => {
      const userData = window.sessionStorage.getItem("userData");
      if (!userData) {
        navigate("/users/session");
      }
    }, []);
    ```

    - References:
      - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/includes
      - https://www.w3schools.com/jsref/jsref_includes.asp
      - https://www.w3schools.com/JS/js_window_location.asp?output=printhttp://www.w3schools.com/JS/js_window_location.asp?output=print

---

## ProjectPage.jsx

- Dummy Data
  - `import { oneProject } from "../data";`
