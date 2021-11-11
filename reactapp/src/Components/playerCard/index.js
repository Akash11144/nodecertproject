import { useEffect, useState } from "react";
import { useLocation } from "react-router";
import axios from "axios";
import TDStyle from "./index.module.css";
import Team from "./team-detail-team-card";
import Player from "./team-detail-player-card";
const PlayerCard = () => {
  let id = useLocation().search;
  const a = new URLSearchParams(id).get("name");

  const [TeamData, setTeamData] = useState([]);
  const [PlayerData, setPlayerData] = useState([]);

  useEffect(() => {
    let t = "https://guarded-hollows-53799.herokuapp.com/teamget/" + a;
    axios
      .get(t)
      .then(res => setTeamData(res.data))
      .catch(err => console.log(err));
    let te = "https://guarded-hollows-53799.herokuapp.com/playerget/" + a;
    axios
      .get(te)
      .then(res => setPlayerData(res.data))
      .catch(err => console.log(err));
  }, []);

  const handelAdd = async () => {
    let name = document.getElementById("name").value;
    let price = document.getElementById("price").value;
    let role = document.getElementById("role").value;
    let playingStatus = document.getElementById("playingStatus").value;
    let playerImg = document.getElementById("playerimage").value;
    if (
      name === "" ||
      price === "" ||
      role === "" ||
      playingStatus === "" ||
      playerImg === ""
    ) {
      alert("Fill Details");
      return;
    } else {
      let obj = {
        name: name,
        photo: playerImg,
        team: TeamData[0].name,
        price: price,
        playingStatus: playingStatus,
        Role: role,
        logo: TeamData[0].icon,
      };
      await axios
        .post("https://guarded-hollows-53799.herokuapp.com/addPlayer", obj)
        .then(res => {
          let te = "https://guarded-hollows-53799.herokuapp.com/playerget/" + a;
          axios
            .get(te)
            .then(res => setPlayerData(res.data))
            .catch(err => console.log(err));
        })
        .catch(err => console.log(err));
    }
    document.getElementById("addPlay").style.display = "none";
  };
  
  const handelDisplay = () => document.getElementById("addPlay").style.display = "none";
  
  const handelShow = () => document.getElementById("addPlay").style.display = "block";
  
  return (
    <div style={{ backgroundColor: "#a81313" }}>
      <div className={TDStyle.topbar}>
        <h2 style={{ color: "a81313", fontSize: "2rem" }}>
          {TeamData.length && TeamData[0].name}
        </h2>
        <img
          src={TeamData.length && TeamData[0].icon}
          style={{ width: "3%" }}
        />
        <button className={TDStyle.btn} onClick={() => handelShow()}>
          Add Player
        </button>
      </div>
      <div id="addPlay" className={TDStyle.addplayerForm}>
        <input
          name="playerName"
          className={TDStyle.inputarena}
          type="text"
          id="name"
          placeholder="Name"
        />

        <input
          name="team"
          className={TDStyle.inputarena}
          type="text"
          id="team"
          value={TeamData.length && TeamData[0].name}
          placeholder="team"
        />

        <input
          name="price"
          className={TDStyle.inputarena}
          type="text"
          id="price"
          placeholder="price"
        />

        <input
          name="Role"
          className={TDStyle.inputarena}
          type="text"
          id="role"
          placeholder="Role"
        />

        <input
          name="playingStatus"
          className={TDStyle.inputarena}
          type="text"
          id="playingStatus"
          placeholder="playingStatus:"
        />

        <input
          name="PlayerImage"
          className={TDStyle.inputarena}
          type="text"
          id="playerimage"
          placeholder="Player Image:"
        />
        <div className={TDStyle.btnDiv}>
          <button className={TDStyle.inputarena} onClick={() => handelAdd()}>
            Submit
          </button>
          <button
            className={TDStyle.inputarena}
            onClick={() => handelDisplay()}
          >
            Close
          </button>
        </div>
      </div>
      <div>
        {TeamData.length && TeamData.map((item) => <Team {...item}></Team>)}
      </div>
      <div className={TDStyle.playCnatin}>
        {PlayerData.length &&
          PlayerData.map((item) => <Player {...item}></Player>)}
      </div>
    </div>
  );
};

export default PlayerCard;
