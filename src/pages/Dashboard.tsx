function Dashboard() {
  return (
    <div className="bg-green-500 h-screen flex">
      {/* SIDEBAR */}
      <div className="bg-red-500 flex flex-col p-20">
        <div>
          <img />
        </div>
        <div>
          <h2 className="pb-6">Title of the Dashboard</h2>
          <ul>
            <li>Link 1</li>
            <li>Link 2</li>
            <li>Link 3</li>
          </ul>
        </div>
        <div className="mt-10">
          <h3>Title</h3>
        </div>
      </div>

      {/* DASHBOARD PAGE */}
      <div className="flex flex-col justify-center p-20">
        <div>
          <h1>Title of dashboard</h1>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ea nostrum
            porro velit nam maxime quas, iste, quod, dolor eum voluptate sit
            placeat ut nemo provident quia ipsum tempora assumenda aut.
          </p>
        </div>

        <div className="container mx-auto">
          <div className="grid grid-cols-3 gap-10">
            {/* SECTION 1 */}
            <div className="bg-orange-500 p-10 rounded-md">
              <h3>Title of section</h3>
              <button>See More</button>
            </div>

            {/* SECTION 2 */}
            <div className="bg-orange-500 p-10 rounded-md">
              <h3>Title of section</h3>
              <button>See More</button>
            </div>

            {/* SECTION 3 */}
            <div className="bg-orange-500 p-10 rounded-md">
              <h3>Title of section</h3>
              <button>See More</button>
            </div>

            {/* SECTION 4 */}
            <div className="bg-orange-500 p-10 rounded-md">
              <h3>Title of section</h3>
              <button>See More</button>
            </div>

            {/* SECTION 5 */}
            <div className="bg-orange-500 p-10 rounded-md">
              <h3>Title of section</h3>
              <button>See More</button>
            </div>

            {/* SECTION 6 */}
            <div className="bg-orange-500 p-10 rounded-md">
              <h3>Title of section</h3>
              <button>See More</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
