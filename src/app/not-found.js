import Link from 'next/link';

import '@/app/globals.css';

export default function NotFound() {
    return (
        <div className="header">
            <title>Page Not Found</title>

            <h1>404</h1>
            <p>
                Are you sure you're in the right place? Would you like to{' '}
                <Link href="/">go Home</Link>?
            </p>
        </div>
    );
}
