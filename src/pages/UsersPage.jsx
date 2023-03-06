import { useState, useEffect} from "react";

// ------- COMPONENTS -------
import UserCard from "../components/UserCard/UserCard";

function UsersPage() {

  // ------- STATE  -------
    const [userList, setUserList] = useState([]);
    const [shuffledSortedUserList, setShuffledSortedUserList] = useState([]);

  // ------- CLEAN -------
    window.sessionStorage.removeItem("userData");

  // ------- ACTIONS & EFFECTS -------

    // FETCH (GET) User Data
      // then when results are returned, turn it to JSON as "data" and update setUserList with "data"
    useEffect(() => {
        fetch(`${import.meta.env.VITE_API_URL}users`)
        .then((results) => {
            return results.json();
        })
        .then((data) => {
            setUserList(data);
        });
    }, []);

    // Shuffle
    const shuffleUserList = () => {
      const shuffledList = [...userList].sort(() => Math.random() - 0.5);
      setShuffledSortedUserList(shuffledList);
    };

    // Sort A - Z
    const sortUserList = () => {
      const sortedList = [...userList].sort((a, b) => a.username.localeCompare(b.username));
      setShuffledSortedUserList(sortedList);
    };

    // Sort Z - A
    const resortUserList = () => {
      const sortedList = [...userList].sort((a, b) => b.username.localeCompare(a.username));
      setShuffledSortedUserList(sortedList);
    };

      // sort the A - Z on first render
      useEffect(() => {
        sortUserList();
      }, [userList]);

  // ------- RENDER -------

  return (
    <div>
      <h1>Our Tree-Huggers</h1>
      <button 
        onClick={shuffleUserList} className="button">
          shuffle</button>
      <button 
        onClick={sortUserList} 
        className="button">
          a - z</button>
      <button 
        onClick={resortUserList} className="button">
          z - a</button> 
      <br />
      <br />
    {/* -- USER CARD -- */}
      <div className="card-list">
        {shuffledSortedUserList.map(
          (user, key) => {
            return <UserCard key={key} user={user} />;
          }
        )};
      </div>
    </div>
  );
}

export default UsersPage;