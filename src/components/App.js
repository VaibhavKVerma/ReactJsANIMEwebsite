import { useState } from "react";
import Anime from "./Anime/Anime";
import Manga from "./Manga/Manga";

const App = () => {
  const [active, setActive] = useState(0);

  const renderAnime = () => {
    if (active === 0) return <Anime />;
  };

  const renderManga = () => {
    if (active === 1) return <Manga />;
  };

  return (
    <div className="ui container">
      <h1
        style={{
          fontFamily: "Pokemon Solid, sans-serif",
          letterSpacing: "5px",
        }}
      >
        <a style={{ color: "white" }} href={`${window.origin}`}>
          MY ANIME WORLD
        </a>
      </h1>
      <div className="ui two item menu">
        <div
          onClick={() => setActive(0)}
          style={{ cursor: "pointer" }}
          className={`${active === 0 ? "active" : ""} item`}
        >
          <h2>Anime World</h2>
        </div>
        <div
          href="#"
          onClick={() => setActive(1)}
          style={{ cursor: "pointer" }}
          className={`${active === 1 ? "active" : ""} item`}
        >
          <h2>Manga World</h2>
        </div>
      </div>
      {renderAnime()}
      {renderManga()}
    </div>
  );
};

export default App;
