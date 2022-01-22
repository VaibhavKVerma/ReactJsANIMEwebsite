import Anime from "./Anime/Anime";
import Manga from "./Manga/Manga";

const renderAnime = () => {
  if (
    window.location.pathname === "/anime" ||
    window.location.pathname === "/"
  ) {
    return <Anime />;
  }
};

const renderManga = () => {
  if (window.location.pathname === "/manga") {
    return <Manga />;
  }
};

const App = () => {
  return (
    <div className="ui container">
      <h1>
        <a href={`${window.origin}`}> My Anime World</a>
      </h1>
      <div className="ui two item menu">
        <a href={`${window.location.origin}/anime`} className={`item`}>
          Anime World
        </a>
        <a href={`${window.location.origin}/manga`} className={`item`}>
          Manga World
        </a>
      </div>
      {renderAnime()}
      {renderManga()}
    </div>
  );
};

export default App;
