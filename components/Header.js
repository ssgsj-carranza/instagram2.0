import Image from 'next/image';

function Header() {
    return (
        <div>
            <div className="flex justify-between bg-white max-w-6xl">
                {/* left */}
            <div className="relative hidden lg:inline-grid h-24 w-24">
                <Image 
                    src='https://links.papareact.com/ocw'
                    layout='fill'
                    objectFit='contain'
                />
            </div>

            {/* middle */}

            {/* right */}
            </div>
        </div>
    )
}

export default Header
