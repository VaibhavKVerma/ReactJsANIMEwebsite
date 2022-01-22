import { useState } from "react";
import Search from "./Search";
import Topanime from "./Topanime";
import Latest from "./Latest";

const Anime = () => {
  const [active, setActive] = useState(0);

  const checkSearch = () => {
    if (active === 0) {
      return <Search />;
    }
  };
  const checkTopanime = () => {
    if (active === 1) {
      return <Topanime />;
    }
  };
  const checkLatest = () => {
    if (active === 2) {
      return <Latest />;
    }
  };

  return (
    <div>
      <div className="ui three item menu">
        <div
          onClick={() => setActive(0)}
          style={{ cursor: "pointer" }}
          className={`${active === 0 ? "active" : ""} item`}
        >
          Search Anime
        </div>
        <div
          onClick={() => setActive(1)}
          style={{ cursor: "pointer" }}
          className={`${active === 1 ? "active" : ""} item`}
        >
          {" "}
          Top anime
        </div>
        <div
          onClick={() => setActive(2)}
          style={{ cursor: "pointer" }}
          className={`${active === 2 ? "active" : ""} item`}
        >
          Latest Anime
        </div>
      </div>
      {checkSearch()}
      {checkTopanime()}
      {checkLatest()}
    </div>
  );
};

export default Anime;
