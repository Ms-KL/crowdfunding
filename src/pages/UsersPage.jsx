import { useState, useEffect} from "react";
import { useParams } from "react-router-dom";

// Components
import UserCard from "../components/UserCard/UserCard";

function UsersPage(props) {

  // State
    // State
    const [userList, setUserList] = useState([]);
    const [user,  ] = useState({});
    const [shuffledSortedUserList, setShuffledSortedUserList] = useState([]);

    // ACTIONS
    const { id } = useParams();

    // User Data
    useEffect(() => {
        fetch(`${import.meta.env.VITE_API_URL}users`)
        .then((results) => {
            return results.json();
        })
        .then((data) => {
            setUserList(data);
        });
    }, []);

    const shuffleUserList = () => {
      const shuffledList = [...userList].sort(() => Math.random() - 0.5);
      setShuffledSortedUserList(shuffledList);
    };

    const sortUserList = () => {
      const sortedList = [...userList].sort((a, b) => a.username.localeCompare(b.username));
      setShuffledSortedUserList(sortedList);
    };

      // sort the user list alphabetically on first render
      useEffect(() => {
        sortUserList();
      }, [userList]);

    // runs the first time after the first render

    const isAdmin = () => {
        return user.id === 1;
    };
        
    return (
        <div>
          <h1>All Users</h1>
          <button onClick={shuffleUserList} className="button">Shuffle</button>
          <button onClick={sortUserList} className="button">A--Z</button>
          <div id="user-list">
            {shuffledSortedUserList.map((user, key) => {
            return <UserCard key={key} user={user} />;
            })};
          </div>
        </div>
    );
}


export default UsersPage;
// you then need to import without { }
// without default you import using { }


// NOTES:
  // 
    // fetch: built in request in browser to server
      // when the results get back, will receive JSON
      // JSON key:value pair
      // When you send data back, we send strings back
      // when the results return - need to turn it into JSON
      // set the JSON to the projectList --> async code
      // fetch, then do this, then do that
  //
    // map = create new array that only contains the pledge amounts
    // reduce = sum up pledge amounts in the new array, return the total
      // 0 = initial value of reduce = 0
      // https://medium.com/poka-techblog/simplify-your-javascript-use-map-reduce-and-filter-bd02c593cc2d

      // import React from "react"; not required as it's already a jsx file
  