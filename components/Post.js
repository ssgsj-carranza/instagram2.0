import {BookmarkIcon, ChatIcon, DotsHorizontalIcon, EmojiHappyIcon, HeartIcon, PaperAirplaneIcon} from '@heroicons/react/outline';
import {HeartIcon as HeartIconFillled} from '@heroicons/react/solid';
import { useSession } from 'next-auth/react';
import { useState } from 'react';

function Post({id, username, userImage, img, caption}) {
    const {data: session} = useSession();
    const [comments, setComments] = useState([]);
    const [comment, setComment] = useState('');

    const sendComment = async (e) => {
        e.preventDefault();
    }

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
                    <HeartIcon className='btn' />
                    <ChatIcon className='btn' />
                    <PaperAirplaneIcon className='btn' />
                </div>
                <BookmarkIcon className='btn' />
            </div>
            )}
            
            {/* caption */}
            <p className='p-5 truncate'>
                <span className='font-bold mr-1'>{username} </span>
                {caption}
            </p>

            {/* comments */}


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
