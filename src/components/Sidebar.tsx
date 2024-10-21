function Sidebar() {
  return (
    <div className="flex flex-col p-20 bg-red-500">
      <div>
        <img />
      </div>
      <div>
        <h2 className="pb-6">Title of the Dashboard</h2>
        <ul>
          <li>
            <a href="http://localhost:5173/">Home</a>
          </li>
          <li>
            <a href="http://localhost:5173/dashboard">Dashboard</a>
          </li>
          <li>
            <a href="http://localhost:5173/wine-list">Wine List</a>
          </li>
        </ul>
      </div>
      <div className="mt-10">
        <h3>Title</h3>
      </div>
    </div>
  );
}

export default Sidebar;
