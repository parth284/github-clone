import React, {useState} from "react";
import "./App.css"
import Profile from "./Profile";
import Overview from "./Overview";
import userData from "./Data"


const App = ()=>{
    const [data, setData] = useState()
    const [input ,setInput] = useState("CleverProgrammer")

    const datafetch = async (e) =>{
        e.preventDefault()
        // setInput("")
        await userData(input).then((data)=>{setData(data)}).catch((error) =>{setData("error")})
    }
    // console.log(data.length)

    const render = ()=>{
        // console.log(data)
        if(data===undefined){
            return<div>Lodding</div>

        }
        else if(data === "error"){
            return<div>{`This User not founf`}</div>
        }
        else{
            // console.log(data[0])
            return(
                <div>
                    <div>
                        <Profile image={data[0].profile.data.avatar_url}
                             name={data[0].profile.data.name}
                             login={data[0].profile.data.login}
                             bio={data[0].profile.data.bio} 
                             followers={data[0].profile.data.followers} 
                             following={data[0].profile.data.following} 
                             blog={data[0].profile.data.blog} 
                             starred={data[0].starred.data} />
                             
                    </div>

                    <div>
                        <Overview followersList={data[0].followersList.data} 
                                followingsList={data[0].followingsList.data} 
                                repos={data[0].repos.data}/>
                    </div>
                </div>
            );
        }
    }
    
    

    return(
        <div className="main">
            <div className="header">
                <img className="githubLogo" src="https://raw.githubusercontent.com/github/explore/78df643247d429f6cc873026c0622819ad797942/topics/github/github.png"/>
                <div className="input">
                    <input className="inputId" value={input} onChange={(e) => setInput(e.target.value)} placeholder="enter user id"/>
                    <button onClick={(e)=>datafetch(e)} >find</button>
                </div>
            </div>
            <div>
                {render()}
            </div>
        </div>
    ); 
}

export default App;