import logo from '../assets/Images/stamp.png';
const TopBanner = () => {

    return (
        <div className="top-banner">
            <div className="bannerImg">
                <div className="stampMain">
                    <img src={logo} alt='logo'/>
                </div>
                <div className="Centertext">
                    <div>The best Foodie</div>
                    <h1>Experience</h1>
                    <p>Now In London</p>
                </div>
            </div>
        </div>
    );
};

export default TopBanner;