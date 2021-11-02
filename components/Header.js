import Image from 'next/image';

function Header() {
    return (
        <div>
            <h1>HEADER</h1>
            {/* left */}
            <div>
                <Image 
                    src='https://links.papareact.com/ocw'
                    layout='fill'
                />
            </div>

            {/* middle */}

            {/* right */}
        </div>
    )
}

export default Header
