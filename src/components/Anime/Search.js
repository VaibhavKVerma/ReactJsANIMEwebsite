import { useState, useEffect } from "react";
import SearchBar from "./SearchBar";
import api from "../api";

const Search = () => {
  const [search, setSearch] = useState("");
  const [results, setResult] = useState([]);
  useEffect(() => {
    if (search.length > 2) {
      api
        .get(`/anime`, {
          params: {
            q: search,
          },
        })
        .then((res) => {
          setResult(res.data.data);
        });
    } else {
      setResult([]);
    }
  }, [search]);
  const renderedList = results.map((result, idx) => {
    if (idx >= 10) return null;
    return (
      <a
        href={result.url}
        style={{ cursor: "pointer" }}
        key={result.mal_id}
        className="item"
      >
        <img
          alt={result.title}
          className="ui small image"
          src={result.images.jpg.image_url}
        />
        <div style={{ color: "white" }} className="content">
          <div className="header" style={{ color: "rgb(253, 138, 31)" }}>
            {result.title}
          </div>
          <br />
          Age Rating : {result.rating}
          <br />
          Score : {result.score}
          <br />
          Episodes : {result.episodes}
          <br />
          Score : {result.score}
        </div>
      </a>
    );
  });

  return (
    <div className="ui">
      <SearchBar search={search} setSearch={setSearch} />
      <div className="ui huge middle aligned divided list">{renderedList}</div>
    </div>
  );
};

export default Search;
