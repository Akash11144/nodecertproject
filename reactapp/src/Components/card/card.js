import { Link } from "react-router-dom";
import Styles from './index.module.css'

const Card = ({ captain, champions, icon, name, playerCount, topBatsman, topBowler }) => {
    let t = '/playerCard' + "?" + 'name=' + name
    return (<Link to={t} className={Styles.Card}>
        <div>
            <div className={Styles.ImgContainer}>
                <img src={icon} style={{
                    width: "70%",
                    height: '100%',
                    marginTop:"7%",
                    marginLeft:'2%'
                }}></img>
            </div>
            <div style={{
                    marginTop:"20%",
                    marginLeft:'2%'
                }}>
                <h2 style={{color:"goldenrod",fontSize:"1.5rem"}}>{name}</h2>
                <h3 style={{color:"cadetblue",fontSize:"1rem"}}>Captain: {captain}</h3>
                <h3 style={{color:"cadetblue",fontSize:"1rem"}}>Player Count: {playerCount}</h3>
                <h3 style={{color:"cadetblue",fontSize:"1rem"}}>Top Batsman: {topBatsman}</h3>
                <h3 style={{color:"cadetblue",fontSize:"1rem"}}>Top bowler: {topBowler}</h3>
                <h3 style={{color:"cadetblue",fontSize:"1rem"}}>Champions: {champions}</h3>
            </div>
        </div>
    </Link>);
}

export default Card;