import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import Card from "./Components/card/card";
import { HashRouter, Route, Switch } from "react-router-dom";
import PlayerCard from "./Components/playerCard";
import PlayerInfo from "./Components/Player-Info";
import "./App.css";
import Footer from "./Components/footer";
const Homepage = () => {
  const [TeamData, setTeamData] = useState([]);
  const [searchedPlayer, setsearchedPlayer] = useState([]);
  const [searchedTeam, setsearchedTeam] = useState([]);
  
  useEffect(() => axios.get("http://localhost:9999/teamget").then(res =>setTeamData(res.data)), []);

  const handleSearch = async () => {
    var searchValue = document.getElementById("search").value;
    if (searchValue == "") {
    } else {
      await axios
        .get("http://localhost:9999/playerget/" + searchValue)
        .then(res => {
          if (res.data.length == 0) 
            axios
              .get("http://localhost:9999/playernameget/" + searchValue)
              .then(res=> setsearchedPlayer(res.data));
         else setsearchedTeam(res.data);
        });
      document.getElementById("searchesultsCotainer").style.display = "block";
    }
  };
  const handleClose = () => {
    document.getElementById("searchesultsCotainer").style.display = "none";
    document.getElementById("search").value = "";
  };

  return (
    <HashRouter>
      <Switch>
        <Route path="/playerCard" component={PlayerCard}></Route>
        <Route path="/playerInfo" component={PlayerInfo}></Route>
        <div className="main">
          <div className="topbar">
            <h2 style={{ color: "rgb(192, 18, 18)", fontSize: "2rem" }}>IPL</h2>
            <div id="searchHolder">
              <input
                type={Text}
                id="search"
                onChange={(e) => handleSearch()}
                placeholder="Search team"
              ></input>
            </div>
          </div>
          <div id="searchesultsCotainer">
            <button id="closeButton" onClick={() => handleClose()}>
              X
            </button>
            {searchedTeam.length
              ? searchedTeam.map((item) => <SeachedPlayerCard {...item}></SeachedPlayerCard>)
              : ""}
            {searchedPlayer.length
              ? searchedPlayer.map((item) => (
                  <SeachedPlayerCard {...item}></SeachedPlayerCard>
                ))
              : ""}
          </div>
          <div className="cardContainerTeam">
            {TeamData.length && TeamData.map((item) => <Card {...item}></Card>)}
          </div>
        </div>
      </Switch>
      <Footer></Footer>
    </HashRouter>
  );
};

export default Homepage;

const SeachedPlayerCard = ({ name }) => {
  return <div id="searchesults">{name}</div>
};
