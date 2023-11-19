import Link from 'next/link';


function Navbar() {
    return (
        <nav className="bg-gray-800 p-4">
          <div className="container mx-auto flex items-center justify-between">
            <div className="flex items-center">
              <h1 className="text-white text-xl font-bold">Cards Next.js</h1>
            </div>
            <div className="flex items-center space-x-4">
              <Link className="text-white hover:text-gray-300" href="/">
               Home
              </Link>
              <Link className="text-white hover:text-gray-300" href="/">
                Users
              </Link>
            </div>
          </div>
        </nav>
      );
}

export default Navbar
