import React, { useEffect, useState } from 'react';
import axios from 'axios';
import "./Profile.css"

const apiUrl = 'https://dummyjson.com/users/'

const Profile = () => {
  const [user, setUser] = useState({});
//   const [password, setPassword] = useState("");


  useEffect(() => {
        setUser(JSON.parse(localStorage.getItem("userData")))
  }, []);

  const fetchDataFromApi = () => {
    const userDataString = localStorage.getItem('userData');
    if (userDataString) {
      const userData = JSON.parse(userDataString);
      const { username, password } = userData;

      axios.get(apiUrl)
        .then((res) => {
          console.log("profileData", res);
        //   setUser(res.users.username);
        //   setPassword(res.data.password)
        })
        .catch((err) => {
          console.log("api", err);
        });
    } else {
      console.log("User data not found in local storage. Please log in.");
    }
  };

  return (
    <div className="profile-container">
    <h1 className="profile-heading">Welcome to your profile</h1>

    <label> Username</label>
    <input className='profile-info'
    type="text" placeholder={user?.username} disabled/>
    {/* <div className="profile-data">
      <p className="profile-label">Username:</p>
      <p className="profile-username">{user?.username}</p>
    </div> */}

    <label> Email</label>
    <input className='profile-info'
    type="text" placeholder={user?.email} disabled/>
    {/* <div className="profile-data">
      <p className="profile-email-label">Email:</p>
      <p className="profile-email">{user?.email}</p>
    </div> */}
    </div>
  );
};

export default Profile;
