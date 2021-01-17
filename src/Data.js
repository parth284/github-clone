import axios from "axios";

const Data = async (login)=>{
    var err= '';
    const profile = await axios.get(`https://api.github.com/users/${login}`).catch((error) =>{console.log("error");return err="errrr"});
    const followersList = await axios.get(`https://api.github.com/users/${login}/followers`);
    const followingsList = await axios.get(`https://api.github.com/users/${login}/following`);
    const starred = await axios.get(`https://api.github.com/users/${login}/starred`);
    const repos = await axios.get(`https://api.github.com/users/${login}/repos`);
    // const userData = [{Profile:Profile, followersList:followersList, followingsList:followingsList, starred:starred, repos:repos}]
    const userData = [{profile, followersList, followingsList, starred, repos}]
    // console.log(userData)
    return userData;

    

}

export default Data;