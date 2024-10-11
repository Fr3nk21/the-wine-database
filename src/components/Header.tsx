function Header() {
  return (
    <section className="w-full h-20 bg-yellow-500 flex flex-row justify-between px-6 items-center">
      <div>
        <img src="./assets/logo.png" alt="logo" />
      </div>
      <div>
        <ul className="flex flex-row gap-4">
          <li className="bg-red-500 px-4 py-2 rounded-md">Home</li>
          <li className="bg-red-500 px-4 py-2 rounded-md">About</li>
          <li className="bg-red-500 px-4 py-2 rounded-md">Services</li>
          <li className="bg-red-500 px-4 py-2 rounded-md">Contact</li>
          <li className="bg-red-500 px-4 py-2 rounded-md">Dashboard</li>
        </ul>
      </div>
    </section>
  );
}

export default Header;
