import React from 'react';
// import { ion-icon } from "react-icons";
import "./Profile.css"

const Profile = ({image, name, login, bio, followers, following, blog, starred}) => {
    // console.log(starred.length)
    return (
        <div className="profile">
            <img className="img" src={`${image}`}/>
            <div><h1>{name}</h1></div>
            <div><h3>{login}</h3></div>
            <div><h5>{bio}</h5></div>
            <div className="info">
                <div>{`${followers}Followers`} · </div>
                <div>{`${following}Following`} · </div>
                <div>
                    <ion-icon name="star-outline"></ion-icon>
                </div>
                <div>{starred.length}</div>
            </div>
            <a href={`http://${blog}/`}>{blog}</a>
        </div>
    );
};

export default Profile;