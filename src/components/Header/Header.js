import logo from "../../assets/logo/BrainFlix-logo.svg"

import './Header.scss';
import headerImage from "../../assets/images/Mohan-muruge.jpg";
import uploadButton from "../../assets/icons/upload.svg";

function Header() {


    return (
        <>
            <header className="header">
                <div className="header__logo--container">
                    <img className="header__logo" src={logo} alt="brainflixlogo" />
                </div>
                <div className="header__search-container">
                <input className="header__search" type="text" placeHolder="search">
                    </input>
                    <img className="header__image" src={headerImage} alt="" />
                </div>
                    
                    <button className="header__button" src={{uploadButton}}>Upload</button>               
            </header>
        </>
    )    
}

export default Header;