import React from 'react'
import "./Header.css";
import img from "../images/logo3.jpg"
import SearchIcon from '@mui/icons-material/Search';
import { ShoppingBasket } from '@mui/icons-material';

function Header() {
  return (
    <div className='header'>
        <img className='header__logo' src={img} alt="Amazon"  />
        <div className="header__search">
            <input className='header__searchInput' type="text" />
            <SearchIcon className="header__searchIcon"/>
        </div>
        <div className="header__nav">
            <div className="header__option">
                <span className="header__optionLineOne">
                    Welcome Guest
                </span>
                <span className="header__optionLineTwo">
                    Sign In
                </span>
            </div>
            <div className="header__option">
            <span className="header__optionLineOne">
                    Returns
                </span>
                <span className="header__optionLineTwo">
                    & orders
                </span>
            </div>
            <div className="header__option">
            <span className="header__optionLineOne">
                    Your
                </span>
                <span className="header__optionLineTwo">
                    Prime
                </span>
            </div>
            <div className="header__optionBasket">
                <ShoppingBasket className=''/>
                <span className="header__basketCount header__optionLineTwo">0</span>
            </div>
        </div>
    </div>
  )
}

export default Header
