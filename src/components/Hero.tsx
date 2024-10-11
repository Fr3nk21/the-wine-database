function Hero() {
  return (
    <section className="bg-orange-500 h-screen flex flex-col justify-center items-center">
      <h1 className="font-bold text-4xl">This is the Home Page</h1>
      <p className="w-2/3 text-center font-light my-6">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius voluptates
        eligendi dolores. Provident sunt exercitationem facilis? Pariatur,
        facere animi! Unde aut minima dignissimos quae fugit, perferendis illum
        voluptas cum possimus!
      </p>
      <div className="p-4 flex flex-row justify-center w-2/3 gap-4">
        <button className="bg-red-500 px-4 py-2 rounded-md">Read More</button>
        <button className="bg-red-500 px-4 py-2 rounded-md">Contact Us</button>
      </div>
    </section>
  );
}

export default Hero;
