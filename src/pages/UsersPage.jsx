import { useState, useEffect} from "react";

// Components
import UserCard from "../components/UserCard/UserCard";
import CalculationsCard from "../components/CalculationsCard/CalculationsCard";

function UsersPage(props) {

  // State
    // State
    const [userList, setUserList] = useState([]);
    const [projectList, setProjectList] = useState([]);
    const [pledgeList, setPledgeList] = useState([]);
    const [user, setUser] = useState({});

    // ACTIONS

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

    const isAdmin = () => {
        return user.id === 1;
    };
        
    return (
        <div>
        <h1>All Users</h1>

        <CalculationsCard projectList={projectList} pledgeList={pledgeList} />
            <div id="user-list">
                    <>
                    {userList.map((user, key) => {
                    return <UserCard key={key} user={user}/>;
                    })};
                    </>
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
  