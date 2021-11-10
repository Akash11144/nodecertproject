import TDStyle from './team-detail-player-card.module.css'
import { Link } from "react-router-dom";

const Player = ({ Role, logo, name, photo, playingStatus, price, team }) => {
  let t = "/playerInfo" + "?" + "name=" + name;
  return (
    <Link to={t} className={TDStyle.PlayerDetailsHold}>
      <div>
        <div className={TDStyle.ImgHold}>
          <div className={TDStyle.playerImgHold}>
            <img src={photo} style={{ width: "100%", height: "200px" }}></img>
          </div>
          <div className={TDStyle.logoImgHold}>
            <img
              src={logo}
              style={{ width: "100%", height: "100px", marginTop: "50%" }}
            ></img>
          </div>
        </div>
        <div className={TDStyle.PlayersDetails}>
          <h2>{name}</h2>
          <h3>{Role}</h3>
          <h3>{playingStatus}</h3>
          <h3>{team}</h3>
          <h3>{price}</h3>
        </div>
      </div>
    </Link>
  );
};
export default Player;
