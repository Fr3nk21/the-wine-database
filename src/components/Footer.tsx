import logo from '../assets/logo.png'

function Footer() {
  return (
    <div className="flex flex-row justify-center items-center">
      <div className="flex flex-col">
        <img src={logo} alt="logo" className="w-10 h-10" />
        <p className="w-80">
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
        </p>
      </div>
      <div>
        <h3>Footer</h3>
        <ul>
          <li>Link 1</li>
          <li>Link 2</li>
          <li>Link 3</li>
          <li>Link 4</li>
        </ul>
      </div>
      <div>
        <h3>Footer</h3>
        <ul>
          <li>Link 1</li>
          <li>Link 2</li>
          <li>Link 3</li>
          <li>Link 4</li>
        </ul>
      </div>
    </div>
  )
}

export default Footer
