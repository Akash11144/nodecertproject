import teamDetailTeamStyle from './team-detail-team-card.module.css'
import { Link } from "react-router-dom";

const Team = ({
    captain,
    champions,
    icon,
    name,
    playerCount,
    topBatsman,
    topBowler,
  }) => {
    return (
      <div className={teamDetailTeamStyle.TeamDetails}>
        <div className={teamDetailTeamStyle.TeamImg}>
          <img style={{ width: "100%", height: "300px" }} src={icon}></img>
        </div>
        <div className={teamDetailTeamStyle.teamholder}>
          <h2 className={teamDetailTeamStyle.team1}>{name}</h2>
          <h3 className={teamDetailTeamStyle.team}>Captain: {captain}</h3>
          <h3 className={teamDetailTeamStyle.team}>Player Count: {playerCount}</h3>
          <h3 className={teamDetailTeamStyle.team}>Top Batsman: {topBatsman}</h3>
          <h3 className={teamDetailTeamStyle.team}>Top bowler: {topBowler}</h3>
          <h3 className={teamDetailTeamStyle.team}>Champions: {champions}</h3>
        </div>
      </div>
    );
    }
export default Team;