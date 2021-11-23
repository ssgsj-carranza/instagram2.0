import { collection, onSnapshot, orderBy, query } from "@firebase/firestore";
import { useEffect, useState } from "react";
import { db } from "../firebase";
import Post from "./Post"


const posts = [
    {
        id:'1230',
        username:'laidpidgeon',
        userImage:'https://links.papareact.com/ocw',
        img:'https://links.papareact.com/ocw',
        caption:'First post',
    },
    {
        id:'1230',
        username:'laidpidgeon',
        userImage:'https://links.papareact.com/ocw',
        img:'https://links.papareact.com/ocw',
        caption:'Second post',
    },
];

function Posts() {
    const [posts, setPosts] = useState([]);

    //Every time value on the back end changes, it updates react state with the latest docs
    useEffect(() => {
        const unsuscribe = onSnapshot(query(collection(db, 'posts'), orderBy('timestamp', 'desc')), snapshot => {
            setPosts(snapshot.docs);
        });
        //never going to attach more than one listener
        return () => {
            unsuscribe();
        }
    },[])

    return (
        <div>
            {posts.map((post) => (
                <Post 
                    key={post.id}
                    id={post.id}
                    username={post.username}
                    userImage={post.userImage}
                    img={post.img}
                    caption={post.caption}
                />
            ))}
        </div>
    );
}

export default Posts
