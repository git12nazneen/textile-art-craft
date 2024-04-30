
import commonImg from '../assets/common.jpg'

const MyHeader = () => {
    return (
        <div>
          <div className="hero min-h-72" style={{backgroundImage: `url(${commonImg})`}}>
                <div className="hero-overlay bg-black bg-opacity-60"></div>
                <div className="hero-content text-center text-neutral-content">
                    <div className="max-w-sm">
                    <h1 data-aos="fade-down" className="mb-5 text-5xl font-bold">Add crafting </h1>
                    </div>
                </div>
             </div>
        </div>
    );
};

export default MyHeader;