import "@/styles/globals.css";
import Banner from "@/components/Banner/Banner";
import Navbar from "@/components/Navbar/Navbar";

interface RootLayoutProps {
  children: React.ReactNode;
}

const RootLayout: React.FC<RootLayoutProps> = ({ children }) => {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/images/favicon.ico" />

        <meta
          httpEquiv="Content-Security-Policy"
          content="default-src 'self'; img-src 'self' data: https:; style-src 'self' 'unsafe-inline'; script-src 'self' 'unsafe-inline' https://praser.net https://praser.pages.dev; child-src 'self' https://praser.net https://praser.pages.dev; connect-src 'self' https://praser.net https://praser.pages.dev;"
        />
      </head>
      <body className="body">
        <Navbar />
        <main>{children}</main>
        <Banner />
      </body>
    </html>
  );
};

export default RootLayout;
