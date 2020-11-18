import { dbService, storageService } from "fbase";
import React, { useState } from "react";

const Nweet = ({nweetObj, isOwner }) => {
    const [editing, setEditing]= useState(false);
    const [newNweet, setNewNweet]= useState(nweetObj.text);
    const onDeleteClick = () => {
        const ok = window.confirm("Are you sure you want to delete this Nweet?");
        if(ok){
            dbService.doc(`nweets/${nweetObj.id}`).delete();
            storageService.refFromURL(nweetObj.attachmentUrl).delete();
            //delete NWeets//
            console.log(ok);
        }
    };
    const toggleEditing = () => setEditing(prev => !prev);
    const onSubmit = (event) => {
        event.preventDefault();
        console.log(nweetObj, newNweet);
        dbService.doc(`nweets/${nweetObj.id}`).update({
            text:newNweet
        });
        setEditing(false);
    };
    const onChange = (event) => {
        const {
            target: {value},
        } = event;
        setNewNweet(value);
    };

    return (
        <div className="nweet">
        {editing ? ( 
                <>
                <form onSubmit={onSubmit} className="container nweetEdit">
                    <input type= "text" placeholder="Edit your NWeet" value={newNweet} required onChange={onChange} className="formInput"/> 
                    <input type="submit" value="Update Nweet" className="formBtn" />
                </form> 
                <button onClick ={toggleEditing} className="formBtn">Cancel</button>
                </>
                ) : (
                <>
                <h4>{nweetObj.text}</h4>
                {nweetObj.attachmentUrl && <img src={nweetObj.attachmentUrl}/>}
            {isOwner && (
            <>
            <div class="nweet__actions">
                <span onClick={onDeleteClick}>Delete Nweet</span>
            {/* </div>
            <div> */}
                <span onClick={toggleEditing}>Edit Nweet</span>
            </div>
            </>
            )}</>
                )}
        </div>
    );
};

export default Nweet;