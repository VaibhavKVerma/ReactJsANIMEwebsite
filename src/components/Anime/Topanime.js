import { useState, useEffect } from "react";
import api from "../api";

const Topanime = () => {
  const [results, setResult] = useState([]);

  useEffect(() => {
    api.get("top/anime").then((res) => setResult(res.data.top));
  }, []);
  const renderedList = results.map((result) => {
    return (
      <tr key={result.rank}>
        <td>
          <h2 className="ui center aligned header">{result.rank}</h2>
        </td>
        <td>
          <h4 className="ui image header">
            <img
              alt="NA"
              className="ui huge rounded image"
              src={result.image_url}
            ></img>
            <div className="content">
              <a href={result.url}>{result.title}</a>
            </div>
          </h4>
        </td>
        <td>{result.score}/10</td>
        <td>{result.members}</td>
      </tr>
    );
  });
  return (
    <div>
      <table className="ui celled padded table">
        <thead>
          <tr>
            <th className="single line">Rank</th>
            <th>Title</th>
            <th>Score</th>
            <th>Members</th>
          </tr>
        </thead>
        <tbody>{renderedList}</tbody>
      </table>
    </div>
  );
};

export default Topanime;
