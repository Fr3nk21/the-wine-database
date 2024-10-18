import Sidebar from '../components/Sidebar'

const WinePage = () => {
  return (
    <div className="bg-green-500 h-screen flex">
      <Sidebar />

      {/* WINE NAME */}
      <div className="flex flex-col justify-center p-20">
        <div>
          <h1>Wine Selected Name</h1>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ea nostrum
            porro velit nam maxime quas, iste, quod, dolor eum voluptate sit
            placeat ut nemo provident quia ipsum tempora assumenda aut.
          </p>
        </div>
      </div>
    </div>
  )
}

export default WinePage
