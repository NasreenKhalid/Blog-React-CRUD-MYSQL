import React,{useState, useEffect} from 'react';
import Axios from 'axios'
import '../App.css'

function CreatePost() {

const [userName,setUserName] = useState("");
const [title,setTitle] = useState("");
const [text,setText] = useState("");

const submitPost = () => {
Axios.post('http://localhost:3002/api/create', {userName: userName, title: title, text:text})
}

    return (
        <div className="CreatePost">
            <div className="uploadPost">
                <label>Username: </label>
                <input type="text" onChange={(e)=> {
                    setUserName(e.target.value)
                }}/>
                <label>Title: </label>
                <input type="text" onChange={(e)=>{
                    setTitle(e.target.value)
                }}/>
                <label>Post Text</label>
                <textarea 
                onChange={(e)=>{
                    setText(e.target.value)
                }}
                ></textarea>
<button onClick={submitPost}>Submit Post</button>
            </div>
        </div>
    )
}

export default CreatePost
