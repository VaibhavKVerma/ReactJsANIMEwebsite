import { useState, useEffect } from "react";
import api from "../api";

const date = new Date();
const days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

const Latest = () => {
  const [results, setResult] = useState(null);
  const [time, setTime] = useState(new Date().toLocaleTimeString());
  const [day, setDay] = useState(date.getDay());
  const [data, setData] = useState([]);

  useEffect(() => {
    if (results === null) {
      api.get("schedule").then((res) => {
        setResult(res.data);
      });
    }
    if (results) {
      const set = days[day].toLowerCase();
      setData(results[set]);
    }
    const run = setInterval(() => {
      setTime(new Date().toLocaleTimeString());
    }, 1000);

    return () => {
      clearInterval(run);
    };
  }, [time, results, day]);

  const dayTable = days.map((dayes, idx) => {
    return (
      <div
        onClick={() => {
          setDay(idx);
        }}
        style={{ cursor: "pointer" }}
        className={`${day === idx ? "active" : ""} item`}
        key={dayes}
      >
        {dayes}
      </div>
    );
  });

  const renderedList = data.map((singledata) => {
    return (
      <a href={singledata.url} key={singledata.title} className="card">
        <div className="image">
          <img alt={"img"} src={singledata.image_url} />
        </div>
        <div className="content">
          <div className="header">{singledata.title}</div>
          <div className="description">
            {singledata.synopsis.length > 200
              ? singledata.synopsis.substring(0, 200) + "..."
              : singledata.synopsis}
          </div>
        </div>
        <div className="extra content">
          <span className="right floated">
            Airing: {String(singledata.airing_start).substring(0, 10)}
          </span>
          <span>
            {singledata.members}
            <i className="user icon"></i>
          </span>
        </div>
      </a>
    );
  });

  const loading = () => {
    if (data.length !== 0) {
      return <div className="ui link cards">{renderedList}</div>;
    } else {
      return (
        <div className="ui active inverted dimmer">
          <div className="ui text loader">Loading</div>
        </div>
      );
    }
  };

  return (
    <div>
      <div>
        Date : {date.toDateString()}
        <br /> Time : {time}
      </div>
      <br></br>
      <div className="ui grid">
        <div className="four wide column">
          <div className="ui vertical fluid tabular menu">{dayTable}</div>
        </div>
        <div className="ten wide stretched column">
          <div className="ui segment">{loading()}</div>
        </div>
      </div>
    </div>
  );
};

export default Latest;
