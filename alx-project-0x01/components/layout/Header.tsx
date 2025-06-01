import Link from "next/link";

const Header: React.FC = () => {
  return (
    <header className="bg-gradient-to-r from-blue-500 to-purple-500 text-white shadow-md">
      <div className="container w-[98%] mx-auto flex justify-between items-center py-4">
        <h3 className="text-2xl font-bold">
          <Link href="/">Daily Contents</Link>
        </h3>
        <nav>
          <ul className="flex space-x-4">
            <li className="hover:underline">
              <Link href="/posts">Posts</Link>
            </li>
            <li className="hover:underline">
              <Link href="/users">Users</Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
