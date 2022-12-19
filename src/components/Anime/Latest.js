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
  const [day, setDay] = useState(date.getDay());
  const [data, setData] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const set = days[day].toLowerCase();
      const data = (await api.get(`schedules?filter=${set}`)).data.data;
      setData(data);
    }
    fetchData();
  }, [day]);

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
          <img alt={"img"} src={singledata.images.jpg.image_url} />
        </div>
        <div className="content">
          <div className="header">{singledata.title}</div>
          <div className="description">{singledata.synopsis}</div>
        </div>
        <div className="extra content">
          <span className="right floated">
            Airing: {String(singledata.aired.string).slice(0, -5)}
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
    if (data === null || data.length !== 0) {
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
    <div style={{ backgroundColor: "white" }}>
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
