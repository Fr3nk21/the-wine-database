function Sidebar() {
  return (
    <div className="bg-red-500 flex flex-col p-20">
      <div>
        <img />
      </div>
      <div>
        <h2 className="pb-6">Title of the Dashboard</h2>
        <ul>
          <li>
            <a href="http://localhost:5173/wine-list">Wine List</a>
          </li>
          <li>Link 2</li>
          <li>Link 3</li>
        </ul>
      </div>
      <div className="mt-10">
        <h3>Title</h3>
      </div>
    </div>
  );
}

export default Sidebar;
