import React, { useEffect, useState } from "react";
import { authService, dbService } from "fbase";
import { useHistory } from "react-router-dom";

export default ({ refreshUser, userObj}) => { 
    const history =useHistory();
    const [newDisplayName, setNewDisplayName] = useState(userObj.displayName);
    const onLogOutClick = () => {authService.signOut()
        authService.signOut();
        history.push("/");
    };
  /*  const getMyNweets = async() => {
        const nweets = await dbService
        .collection("nweets")
        .where("creatorId", "==", userObj.uid)
        .orderBy("createdAt", "asc")
        .get();
        console.log(nweets.docs.map((doc) => doc.data()));
    };*/

    const onChange = (event) => {
        const {
            target: {value},
        } = event;
        setNewDisplayName(value);
    };
    const onSubmit = async (event) => {
        event.preventDefault();
        if (userObj.displayName !== newDisplayName) {
            const response = await userObj.updateProfile({
                displayName: newDisplayName,
            });
                refreshUser();
            }
        };

    return (
        <div className = "container">
        <form onSubmit={onSubmit} className="profileForm">
            <input 
                onChange={onChange} 
                type="text" 
                autoFocus
                placeholder="Display name" 
                value={newDisplayName}
                className="formInput" />
            <input type="submit" value="Update profile" className = "formBtn" style={{marginTop:10}} />
        </form>
        <span className="formBtn cancelBtn logOut" onClick ={onLogOutClick} >Log out</span>
        </div>
    );
};