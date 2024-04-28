
const Banner = () => {
    return (
        <div className="space-y-3">
            <h1 className="text-6xl font-medium text-center">Welcome to Artisan Alley!</h1>
            <div className="hero">
            <div className="carousel w-full h-[calc(100vh-120px)] rounded-xl relative">
                <div id="slide1" className="carousel-item relative w-full">
                    <img src="https://i.ibb.co/pdr3MJL/art-04.jpg" className="w-full" />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2 z-10">
                        <a href="#slide4" className="btn btn-circle">❮</a>
                        <a href="#slide2" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide2" className="carousel-item relative w-full">
                    <img src="https://i.ibb.co/R326SjT/arts-01.jpg" className="w-full" />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2 z-10">
                        <a href="#slide1" className="btn btn-circle">❮</a>
                        <a href="#slide3" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide3" className="carousel-item relative w-full">
                    <img src="https://i.ibb.co/P6Zz6S7/origami-04.jpg" className="w-full" />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2 z-10">
                        <a href="#slide2" className="btn btn-circle">❮</a>
                        <a href="#slide4" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide4" className="carousel-item relative w-full">
                    <img src="https://i.ibb.co/QQ9Yng2/art-02.jpg" className="w-full" />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2 z-10">
                        <a href="#slide3" className="btn btn-circle">❮</a>
                        <a href="#slide1" className="btn btn-circle">❯</a>
                    </div>
                </div>
            </div>

            <div className="hero-content text-white flex flex-col max-h-20 max-w-2xl">
                <h1 className="md:text-4xl text-2xl font-semibold">Discover Artisan Alley: Where Creativity Comes to Life</h1>
                <p className="text-xs md:text-base">Welcome to Artisan Alley, your haven for all things arts and crafts. Unleash your imagination and find the perfect tools, materials, and inspiration to bring your creative visions to life. Step into a world of handmade wonders and endless possibilities.</p>
            </div>
        </div>
        </div>
    );
};

export default Banner;