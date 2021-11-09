import {BookmarkIcon, ChatIcon, DotsHorizontalIcon, EmojiHappyIcon, HeartIcon, PaperAirplaneIcon} from '@heroicons/react/outline';
import {HeartIcon as HeartIconFillled} from '@heroicons/react/solid';

function Post({id, username, userImage, img, caption}) {
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
            <div className="flex justify-between px-4 pt-4">
                <div className='flex space-x-4'>
                    <HeartIcon className='btn' />
                    <ChatIcon className='btn' />
                    <PaperAirplaneIcon className='btn' />
                </div>
                <BookmarkIcon className='btn' />
            </div>


            {/* caption */}
            <p className='p-5 truncate'>
                <span>{username} </span>
                {caption}
            </p>

            {/* comments */}


            {/* input box */}

        </div>
    )
}

export default Post
