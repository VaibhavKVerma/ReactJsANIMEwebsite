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
      <h1>
        <a href={`${window.origin}`}> My Anime World</a>
      </h1>
      <div className="ui two item menu">
        <div
          onClick={() => setActive(0)}
          style={{ cursor: "pointer" }}
          className={`${active === 0 ? "active" : ""} item`}
        >
          Anime World
        </div>
        <div
          href="#"
          onClick={() => setActive(1)}
          style={{ cursor: "pointer" }}
          className={`${active === 1 ? "active" : ""} item`}
        >
          Manga World
        </div>
      </div>
      {renderAnime()}
      {renderManga()}
    </div>
  );
};

export default App;
