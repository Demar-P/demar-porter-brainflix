import logo from "../../assets/logo/BrainFlix-logo.svg"

import './Header.scss';
import headerImage from "../../assets/images/Mohan-muruge.jpg";
import uploadButton from "../../assets/icons/upload.svg";
import { Link } from "react-router-dom"

function Header() {


    return (
        <>
            <header className="header">
                <Link to="/">
                    <div className="header__logo--container">
                        <img className="header__logo" src={logo} alt="brainflixlogo" />
                    </div>
                </Link>

                <div className="header__search-container">
                    <input className="header__search" type="text" >
                    </input>
                    <img className="header__image" src={headerImage} alt="" />
                </div>

                <Link to="/upload-page">
                    <button className="header__button" src={{ uploadButton }}>Upload</button>
                    <img className="header__image" src={headerImage} alt="" />
                </Link>
            </header>
        </>
    )
}

export default Header;