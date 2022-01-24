import { useState, useEffect } from "react";
import api from "../api";
import { Pagination } from "semantic-ui-react";

const Topmanga = () => {
  const [results, setResult] = useState([]);

  const [page, setPage] = useState(1);

  useEffect(() => {
    setResult([]);
    api.get(`top/manga/${page}`).then((res) => setResult(res.data.top));
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  }, [page]);
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
  if (results.length === 0) {
    return (
      <div className="ui active inverted dimmer">
        <div className="ui text loader">Loading</div>
      </div>
    );
  }
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
      <div className="ui container center aligned">
        <Pagination
          onPageChange={(e) => setPage(Number(e.target.innerText))}
          defaultActivePage={page}
          totalPages={10}
        />
      </div>
    </div>
  );
};

export default Topmanga;
