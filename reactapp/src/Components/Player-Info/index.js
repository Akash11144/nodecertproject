import { useState, useEffect } from "react";
import { useLocation } from "react-router";
import axios from "axios";
import InfoStyles from "./index.module.css";
import Card from "./player-info-card";

const PlayerInfo = () => {
  const [playerdata, setplayerdata] = useState([]);

  let id = useLocation().search;
  const a = new URLSearchParams(id).get("name");

  useEffect(
    () =>
      axios
        .get("http://localhost:9999/playernameget/" + a)
        .then((res) => setplayerdata(res.data)),
    []
  );

  return (
    <div className={InfoStyles.playerDataHold}>
      <div className={InfoStyles.playerDataHoldStyle}>
        <h2
          style={{ color: "goldenrod", fontSize: "3rem", letterSpacing: "5px" }}
        >
          {a}
        </h2>
      </div>
      {playerdata.length && playerdata.map((item) => <Card {...item}></Card>)}
    </div>
  );
};

export default PlayerInfo;