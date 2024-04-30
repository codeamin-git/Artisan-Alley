
const NewsLetter = () => {
    return (
        <div className="hero bg-[#E6E6FA] mb-4 rounded-xl">
            <div className="hero-content flex-col lg:flex-row">
                <img src="https://i.ibb.co/X2DVS6g/Humaaans-Sitting.png" className="rounded-lg w-1/2 md:max-w-sm" />
                <div>
                    <h1 className="text-3xl md:text-5xl font-bold">Subscribe to our newsletter!</h1>
                    <p className="md:py-6">Get exciting updates and new arrival weekly items through your email.</p>
                    <div className="">
                        <input className="input input-bordered" placeholder="Email" />
                        <button className="btn btn-info">Subscribe</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default NewsLetter;