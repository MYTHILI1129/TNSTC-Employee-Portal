import "./TopBar.css";

function TopBar() {
  return (
    <div className="topbar">

      <div className="topbar-left">
        <span>🌐 Language :</span>

        <a href="#">English</a>

        <a href="#">தமிழ்</a>

        <a href="#">हिन्दी</a>

        <a href="#">తెలుగు</a>
      </div>

      <div className="topbar-right">

        <a href="#">Help</a>

        <a href="#">Contact</a>

      </div>

    </div>
  );
}

export default TopBar;