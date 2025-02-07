import MenuButton from "./MenuButton";
// import "../../Styles/Home.css";
function Header() {
  return (
    <div className="header">
      <div className="middle-section">
        <input
          type="text"
          className="search-box"
          placeholder="Search for blog categories, profile names etc.."
        />
      </div>
      <div className="right-section">
        <div>
          <button className="favourites">
            <span class="material-symbols-outlined">favorite</span>
          </button>
        </div>
        <div className="daily-blog">The Daily Blog</div>
        <div className="profile-pic">
          <button className="pic-button">
            <span class="material-symbols-outlined">account_circle</span>
          </button>
        </div>
        <MenuButton />
      </div>
    </div>
  );
}
export default Header;
