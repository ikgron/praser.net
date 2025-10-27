import Link from "next/link";

const NotFound: React.FC = () => {
  return (
    <div className="header">
      <title>Page Not Found</title>

      <h1>404</h1>
      <p>
        Are you sure you&apos;re in the right place? Would you like to{" "}
        <Link href="/">go Home</Link>?
      </p>
    </div>
  );
};

export default NotFound;
