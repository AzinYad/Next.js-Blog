import Link from 'next/link';
import Image from 'next/image';


export default function FirstPost() {
    return (
        <div>
            <h1>First Post</h1>
            <h2>
                <Image
                    src="/images/profile.jpg" // Route of the image file
                    height={144} // Desired size with correct aspect ratio
                    width={144} // Desired size with correct aspect ratio
                    alt="Your Name"
                /><br></br>
                <Link href="/">Back to home</Link>
            </h2>
        </div>
    );
}