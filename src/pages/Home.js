import Typewriter from 'typewriter-effect';
import Homedetails from '../components/Homedetails';

export default function Home() {
    return (
        <>
            <main>
                <h1>
                    Enjoy Travel
                    <Typewriter options={{
                        strings: ['Allinclusive Hotels', 'Tickets', 'Packages'],
                        autoStart: true,
                        loop: true
                    }}>
                    </Typewriter>
                </h1>
            </main>
            <Homedetails />
        </>
    )
}