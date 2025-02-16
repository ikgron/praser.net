import './globals.css';
import Navbar from '@/app/components/Navbar';
import Banner from '@/app/components/Banner';

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/images/favicon.ico" />

        <meta
          httpEquiv="Content-Security-Policy"
          content="default-src 'self'; img-src 'self' data: https:; style-src 'self' 'unsafe-inline'; script-src 'self' 'unsafe-inline' https://praser.net; child-src 'self' https://praser.net; connect-src 'self' https://praser.net;"
        />

      </head>
      <body className='body'>
        <Navbar />
        <main>{children}</main>
        <Banner />
      </body>
    </html>
  );
}
