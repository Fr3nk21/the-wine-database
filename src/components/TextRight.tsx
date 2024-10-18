import placeholder from '../assets/photo.png'

function TextRight() {
  return (
    <section className="flex flex-row h-screen items-center justify-center">
      <div>
        <h2 className="font-bold text-2xl">Title Section</h2>
        <p className="w-60 my-6 font-light">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Excepturi
          eveniet id voluptatum consectetur soluta consequuntur quod ipsum, sunt
          neque accusantium sed sapiente dicta tempora, numquam, molestiae at
          rerum voluptatem. Repellendus.
        </p>
        <button className="bg-green-500 px-4 py-2 rounded-md">Read More</button>
      </div>
      <div>
        <img src={placeholder} alt="placeholder" className="max-w-96" />
      </div>
    </section>
  )
}

export default TextRight
