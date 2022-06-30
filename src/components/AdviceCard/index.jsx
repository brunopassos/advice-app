import patternDivicerMobile from "../../assets/pattern-divider-mobile.svg";
import iconDice from "../../assets/icon-dice.svg";

import { Card } from "./styles";

import { useState, useEffect } from "react";

import api from "../../services/api";

function AdviceCard() {
  const [randonAdvice, setRandonAdvice] = useState([]);

  const handleClick = () => {
    api.get().then((resp) => setRandonAdvice(resp.data));
  };

  useEffect(()=>{
    api.get().then((resp) => setRandonAdvice(resp.data));
  },[])

  return (
    <>
      <Card>
        <div>
          <h3>ADVICE #{randonAdvice?.slip?.id}</h3>
          <p>
            {` "${randonAdvice?.slip?.advice}" `}
          </p>
          <img
            src={patternDivicerMobile}
            alt="Fine line in gray color in horizontal orientation."
          />
        </div>
        <button onClick={() => handleClick()}>
          <img src={iconDice} alt="button icon" />
        </button>
      </Card>
    </>
  );
}

export default AdviceCard;
