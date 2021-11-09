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
            <div>
                <HeartIcon className='btn' />
                <ChatIcon className='btn' />
                <PaperAirplaneIcon className='btn' />
            </div>


            {/* caption */}


            {/* comments */}


            {/* input box */}

        </div>
    )
}

export default Post
