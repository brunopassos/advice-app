import patternDivicerMobile from "../../assets/pattern-divider-mobile.svg";
import iconDice from "../../assets/icon-dice.svg";

import { Card } from "./styles";

import { useState, useEffect } from "react";

import api from "../../services/api";

function AdviceCard() {
  const [randonAdvice, setRandonAdvice] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const handleClick = () => {
    setIsLoading(true);
    api.get().then((resp) => setRandonAdvice(resp.data)).then((_) => setIsLoading(false));
  };

  useEffect(()=>{
    setIsLoading(true);
    api.get().then((resp) => setRandonAdvice(resp.data)).then((_) => setIsLoading(false));
  },[])

  return (
    <>
      <Card>
        <div>
          <h3>ADVICE #{randonAdvice?.slip?.id}</h3>
          <p>
            {isLoading ? <p>Loading...</p> : ` "${randonAdvice?.slip?.advice}" `}
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
