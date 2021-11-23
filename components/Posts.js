import { collection, onSnapshot, orderBy, query } from "@firebase/firestore";
import { useEffect, useState } from "react";
import { db } from "../firebase";
import Post from "./Post"


function Posts() {
    const [posts, setPosts] = useState([]);

    //Every time value on the back end changes, it updates react state with the latest docs
    useEffect(() => 
        onSnapshot(query(collection(db, 'posts'), orderBy('timestamp', 'desc')), snapshot => {
            setPosts(snapshot.docs);
        }), [db]);
        //never going to attach more than one listener
        console.log(posts);

    return (
        <div>
            {/* {posts.map((post) => (
                <Post 
                    key={post.id}
                    id={post.id}
                    username={post.data().username}
                    userImage={post.data().userImage}
                    img={post.data().img}
                    caption={post.data().caption}
                />
            ))} */}
        </div>
    );
}

export default Posts
