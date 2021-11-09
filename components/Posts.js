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
