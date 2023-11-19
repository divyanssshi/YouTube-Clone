import {GiHamburgerMenu} from 
const NavBar = () => {
  return (
    <div className='navbar'>
        <GiHamburgerMenu/>
        <img className='yt-logo' src="../src/assets/YT_Logo.png" alt=""onClick={handleClick}/>
        <div className='"search-container'>
            <input className="Searchbar" placeholder='Search'/>
            <button className='"SearchButton'>
                <FishSearch size={20}/>
            </button>
        </div>
        <button className="signInButton" onClick={handleSignInClick}>Sign In</button>
      </div>
  );
};

export default NavBar;