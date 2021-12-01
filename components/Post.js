import {BookmarkIcon, ChatIcon, DotsHorizontalIcon, EmojiHappyIcon, HeartIcon, PaperAirplaneIcon} from '@heroicons/react/outline';
import {HeartIcon as HeartIconFillled} from '@heroicons/react/solid';
import { useSession } from 'next-auth/react';
import { useEffect, useState } from 'react';
import {addDoc, collection, serverTimestamp, onSnapshot, orderBy, query, setDoc, doc, deleteDoc} from 'firebase/firestore';
import { db } from '../firebase';
import ReactTimeago from 'react-timeago';
import Posts from './Posts';


function Post({id, username, userImage, img, caption}) {
    const {data: session} = useSession();
    const [comments, setComments] = useState([]);
    const [comment, setComment] = useState('');
    const [likes, setLikes] = useState([]);
    const [hasLiked, setHasLiked] = useState(false);

    useEffect(() => 
        onSnapshot(
            query(
                collection(db, 'posts', id, 'comments'), 
                orderBy('timestamp', 'desc')
            ), 
                (snapshot) => 
                    setComments(snapshot.docs)
        ),
        [db, id]
    );

    useEffect(() =>
        onSnapshot(
            collection(db, 'posts', id, 'likes'), 
            (snapshot) => 
                setLikes(snapshot.docs)
        ),
    [db, id]
    );

    //findIndex goes through every like and checks a certain condition such as does the like id match the users id
    useEffect(() =>
        setHasLiked(likes.findIndex(
            (like) => (like.id === session?.user?.uid)) !== -1
        ), [likes]
    );

    // uid ensures user cant like the same post more than once
    const likePost = async (e) => {
        if (hasLiked){
            await deleteDoc(doc(db, 'posts', id, 'likes', session.user.uid));
        } 
        else {
            await setDoc(doc(db, 'posts', id, 'likes', session.user.uid), {
                username: session.user.username,
            });
        }
    };

    const sendComment = async (e) => {
        e.preventDefault();

        const commentToSend = comment;
        setComment('');

        await addDoc(collection(db, 'posts', id, 'comments'), {
            comment: commentToSend,
            username: session.user.username,
            userImage: session.user.image,
            timestamp: serverTimestamp(),
        });
    };

    return (
        <div className="bg-white my-7 border rounded-sm">
            {/*header  */}
            <div className="flex items-center p-5">
                <img src={userImage} alt="" className="rounded-full h-12 w-12 object-contain border p-1 mr-3" />
            <p className="flex-1 font-bold">{username}</p>
            <DotsHorizontalIcon className="h-5" />
            </div>

            {/* img */}
            <img src={img} alt="" className="object-cover w-full" />

            {/* buttons */}
            {session && (
                <div className="flex justify-between px-4 pt-4">
                <div className='flex space-x-4'>
                    {hasLiked ? (
                        <HeartIconFillled onClick={likePost} className='btn text-red-500' />
                    ) : (
                        <HeartIcon onClick={likePost} className='btn' />
                    )}
                    <ChatIcon className='btn' />
                    <PaperAirplaneIcon className='btn' />
                </div>
                <BookmarkIcon className='btn' />
            </div>
            )}
            
            {/* caption */}
            <p className='p-5 truncate'>
                {likes.length > 0 && (
                    <p className='font-bold mb-1'>{likes.length} likes</p>
                )}
                
                <span className='font-bold mr-1'>{username} </span>
                {caption}
            </p>

            {/* comments */}
            {comments.length > 0 && (
                <div className='ml-10 h-20 overflow-y-scroll scrollbar-thumb-black scrollbar-thin'>
                    {comments.map((comment) => (
                        <div key={comment.id} className='flex items-center space-x-2 mb-3'>
                            <img className='h-7 rounded-full' 
                                 src={comment.data().userImage} 
                                 alt=''
                            />
                            <p className='text-sm flex-1'>
                                <span className='font-bold'>{comment.data().username}</span>
                                {' '}
                            {comment.data().comment}</p>
                            <ReactTimeago date={new Date(comment.data().timestamp?.toDate()).toUTCString()}
                                          className='pr-5 text-xs'  
                            >
                                {comment.data().timestamp?.toDate()}
                            </ReactTimeago>
                        </div>
                    ))}
                </div>
            )}

            {/* input box */}
            {session && (
                <form className='flex items-center p-4'>
                <EmojiHappyIcon className='h-7' />
                <input  type="text" 
                        placeholder='Add a comment...' 
                        className='border-none flex-1 focus:ring-0 outline-none' 
                        value={comment}
                        onChange={e => setComment(e.target.value)} 
                />
                <button type='submit' 
                        disabled={!comment.trim()} 
                        className='font-semibold text-blue-400'
                        onClick={sendComment}
                        >
                            Post
                </button>
            </form>
            )}
        </div>
    )
}

export default Post
