import React, {useState} from "react";
import { Card } from "semantic-ui-react";

function PokemonCard(
  {
    name,
    hp,
    front,
    back
  }
) {
  const [isFlipped, setFlipped] = useState(false);

  function handleCardFlip() {
    setFlipped(!isFlipped);
  }

  return (
    <Card>
      <div>
        <div className="image" onClick={handleCardFlip}>
          <img src={!isFlipped ? front : back} alt="oh no!" />
        </div>
        <div className="content">
          <div className="header">{name}</div>
        </div>
        <div className="extra content">
          <span>
            <i className="icon heartbeat red" />
            {hp} hp
          </span>
        </div>
      </div>
    </Card>
  );
}

export default PokemonCard;
