import { useState } from "react";
import Search from "./Search";
import Topmanga from "./Topmanga";

const Manga = () => {
  const [active, setActive] = useState(0);

  const checkSearch = () => {
    if (active === 0) {
      return <Search />;
    }
  };
  const checkTopmanga = () => {
    if (active === 1) {
      return <Topmanga />;
    }
  };

  return (
    <div>
      <div className="ui two item menu">
        <div
          onClick={() => setActive(0)}
          style={{ cursor: "pointer" }}
          className={`${active === 0 ? "active" : ""} item`}
        >
          Search manga
        </div>
        <div
          onClick={() => setActive(1)}
          style={{ cursor: "pointer" }}
          className={`${active === 1 ? "active" : ""} item`}
        >
          {" "}
          Top manga
        </div>
      </div>
      {checkSearch()}
      {checkTopmanga()}
    </div>
  );
};

export default Manga;
