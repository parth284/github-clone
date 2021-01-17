import React from 'react';
import "./Overview.css"

const Overview = ({followersList, followingsList, repos}) => {
    console.log(repos.length)

    const repositories = ()=>{
        return repos.map((repos)=>{
            // console.log(repos.name)
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

    const followers = ()=>{

    }

    const followings = ()=>{

    }


    return (
        <div className="overview">
            <div className="repositoriesBlock">{repositories()}</div>
            <div>{followers()}</div>
            <div>{followings()}</div>
        </div>
    );
}

export default Overview;