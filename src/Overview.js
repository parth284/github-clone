import React from 'react';
import "./Overview.css"

const Overview = ({followersList, followingsList, repos}) => {
    console.log(repos.length)

    const repositories = ()=>{
            // console.log(repos.name)

        return repos.map((repos)=>{
            return (
                <div className="repositories">
                    <a href={repos.svn_url} key={repos.id}><h3>{repos.name}</h3></a>
                    <div className="description">{repos.description}</div>
                    <div className="details">
                        <div>{repos.language}</div>
                        <div>
                            <ion-icon name="star-outline"></ion-icon>
                            {repos.stargazers_count}
                        </div>
                        <div>{`Last Update ${repos.updated_at.substring(0,10)}`}</div>
                    </div>
                </div>
            );
        })
    }

    // const followers = ()=>{
    //     console.log(followingsList)
    //     return followingsList.map((followingsList)=>{
    //         return(
    //             <div>
    //                 <a>{followingsList.login}</a>
    //             </div>
    //         );

    //     })

    // }

    // const followings = ()=>{

    // }


    return (
        <div className="overview">
            <h2>repositories</h2>
            <div className="repositoriesBlock">{repositories()}</div>
            {/* <h2>followers List</h2>
            <div>{followers()}</div>
            <div>{followings()}</div> */}
        </div>
    );
}

export default Overview;