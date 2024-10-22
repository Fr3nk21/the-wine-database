import logo from '../assets/logo.png';

function Header() {
  return (
    <section className="flex h-20 w-full flex-row items-center justify-between bg-yellow-500 px-6">
      <div>
        <img src={logo} alt="logo" className="h-10 w-10" />
      </div>
      <div>
        <ul className="flex flex-row gap-4">
          <li className="rounded-md bg-red-500 px-4 py-2">
            <a href="#">Home</a>
          </li>
          <li className="rounded-md bg-red-500 px-4 py-2">
            <a href="#">About</a>
          </li>
          <li className="rounded-md bg-red-500 px-4 py-2">
            <a href="#">Services</a>
          </li>
          <li className="rounded-md bg-red-500 px-4 py-2">
            <a href="#">Contact</a>
          </li>
          <li className="rounded-md bg-red-500 px-4 py-2">
            <a href="http://localhost:5173/dashboard">Dashboard</a>
          </li>
        </ul>
      </div>
    </section>
  );
}

export default Header;
