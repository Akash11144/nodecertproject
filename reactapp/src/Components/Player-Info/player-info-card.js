import InfoStyles from './player-info-card.module.css'

const Card = ({ Role, logo, name, photo, playingStatus, price, team }) => {
    return (
      <div className={InfoStyles.playHold}>
        <div className={InfoStyles.ImgHold}>
          <div className={InfoStyles.playerImgHold}>
            <img src={photo} style={{ width: "100%", height: "100%" }}></img>
          </div>
        </div>
        <div className={InfoStyles.PlayersDetails}>
          <h2
            style={{
              color: "darkolivegreen",
              fontSize: "3rem",
              letterSpacing: "5px",
            }}
          >
            {name}
          </h2>
          <h3
            style={{
              color: "cadetblue",
              fontSize: "1.2rem",
              letterSpacing: "5px",
            }}
          >
            {Role}
          </h3>
          <h3
            style={{
              color: "cadetblue",
              fontSize: "1.2rem",
              letterSpacing: "5px",
            }}
          >
            {playingStatus}
          </h3>
          <h3
            style={{
              color: "cadetblue",
              fontSize: "1.2rem",
              letterSpacing: "5px",
            }}
          >
            {team}
          </h3>
          <h3
            style={{
              color: "cadetblue",
              fontSize: "1.2rem",
              letterSpacing: "5px",
            }}
          >
            {price}
          </h3>
        </div>
        <div className={InfoStyles.logoImgHold}>
          <img src={logo} style={{ width: "100%", height: "200px" }}></img>
        </div>
      </div>
    );
  };

  export default Card;