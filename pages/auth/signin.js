import {getProviders, signIn as SignIntoProvider} from 'next-auth/react';

//Runs on browser
function signIn({providers}) {
    return (
            <>
                {Object.values(providers).map((provider) => (
                    <div key={provider.name}>
                        <button onClick={() => signIntoProvider(provider.id)}>Sign in with {provider.name}</button>
                    </div>
                ))}
            </>        
        
    );
}

//Server side render
export async function getServerSideProps() {
    const providers = getProviders();

    return {
        props: {
            providers
        }
    }
}

export default signIn;
