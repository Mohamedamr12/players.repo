import players from "../players";
import Player from "./player";

const PlayerList = () => {
    return (
      <div>
        {players.map((player, index) => (
          <Player key={index} player={player} />
        ))}
      </div>
    );
  };
  
  export default PlayerList;