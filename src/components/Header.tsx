import logo from '../assets/logo.png'

function Header() {
  return (
    <section className="w-full h-20 bg-yellow-500 flex flex-row justify-between px-6 items-center">
      <div>
        <img src={logo} alt="logo" className="w-10 h-10" />
      </div>
      <div>
        <ul className="flex flex-row gap-4">
          <li className="bg-red-500 px-4 py-2 rounded-md">
            <a href="#">Home</a>
          </li>
          <li className="bg-red-500 px-4 py-2 rounded-md">
            <a href="#">About</a>
          </li>
          <li className="bg-red-500 px-4 py-2 rounded-md">
            <a href="#">Services</a>
          </li>
          <li className="bg-red-500 px-4 py-2 rounded-md">
            <a href="#">Contact</a>
          </li>
          <li className="bg-red-500 px-4 py-2 rounded-md">
            <a href="http://localhost:5173/dashboard">Dashboard</a>
          </li>
        </ul>
      </div>
    </section>
  )
}

export default Header
