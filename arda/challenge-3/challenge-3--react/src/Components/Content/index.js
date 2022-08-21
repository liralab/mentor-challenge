import contentImage from '../../images/image-hero-desktop.png';
import contentImageMobile from '../../images/image-hero-mobile.png';

export default function Content() {
    return(
        <div className="flex flex-col-reverse md:flex-row justify-around items-center mt-20">
            <div className="w-full md:w-1/2 mx-auto py-10 px-10 md:px-20">
                <h1 className="text-4xl md:text-6xl mb-5 md:mb-10">Make remote work</h1>
                <p className="text-xl">
                    Get your team in sync, no matter your location. Streamline processes,
                    create team rituals, and watch productivity soar.
                </p>
            </div>
            <div className="w-4/5 md:w-1/2 flex items-center">
                <img className="w-full md:w-1/2 mx-auto hidden md:block" alt="ardaninsaturnu" src={contentImage}/>
                <img className="w-full md:w-1/2 mx-auto block md:hidden" alt="ardaninsaturnu" src={contentImageMobile}/>
            </div>
        </div>
    )
};