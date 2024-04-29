
const NewsLetter = () => {
    return (
        <div className="hero bg-[#E6E6FA] mb-4 rounded-xl">
            <div className="hero-content flex-col lg:flex-row">
                <img src="https://i.ibb.co/X2DVS6g/Humaaans-Sitting.png" className="max-w-sm rounded-lg" />
                <div>
                    <h1 className="text-5xl font-bold">Subscribe to our newsletter!</h1>
                    <p className="py-6">Get exciting updates and new arrival weekly items through your email.</p>
                    <div className="join">
                        <input className="input input-bordered join-item" placeholder="Email" />
                        <button className="btn join-item rounded-r-full btn-info">Subscribe</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default NewsLetter;