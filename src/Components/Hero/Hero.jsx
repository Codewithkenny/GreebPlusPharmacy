import './Hero.css';
import heroImage from '../../images/banners.jpg';

const Hero = () => {
    return (
        <>
            <div className="p-5 my-5 mt-5 text-center bg-image" style={{ backgroundImage: `url(${heroImage})`, height: '500px' }}>
                <div className="mask">
                    <div className="d-flex justify-content-start align-items-center h-100">
                        <div className="text-white">
                            <h1 className="mb-3 text-left text-dark">Women's Health Supplement</h1>
                            <h4 className="mb-3 text-left text-dark">Boost Your Well-being Naturally</h4>
                            <a
                                className="btn btn-outline-light btn-lg"
                                href="#!"
                                role="button"
                                style={{
                                    backgroundColor: '#29BF12', 
                                    color: 'black', 
                    
                                }}
                            >
                                Shop Now
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Hero;
