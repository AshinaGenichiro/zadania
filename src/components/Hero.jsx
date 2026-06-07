function Hero() {
  return (
    <>
      <section className="bg-gradient-to-r from-blue-500 to-purple-600 min-h-screen md:min-h-screen flex items-center justify-center px-6">
        <div className="text-center text-white max-w-2xl">
          <h1 className="text-3xl md:text-6xl font-bold mb-4">cos</h1>

          <p className="text-base md:text-xl mb-6">
            lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vel sapien eget nunc efficitur commodo. Sed at ligula a enim efficitur tincidunt. Curabitur ac odio id metus convallis fermentum. In hac habitasse platea dictumst.
          </p>

          <button className="bg-white text-black px-6 py-3 rounded-lg font-semibold hover:bg-gray-200 transition">
            Dowiedz się więcej
          </button>
        </div>
      </section>
    </>
  );
}

export default Hero;