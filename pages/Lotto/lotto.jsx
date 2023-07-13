import React, { useEffect, useMemo, useRef, useState } from "react";
import styled from "styled-components";
import NumberBall from "../Lotto/Numberball";


function getNumbers(){
    //로또 번호 추출기
  const numbers = Array(45).fill().map((v, i) => i + 1);
  const space = [];
  while(numbers.length > 0){
    space.push(numbers.splice(Math.floor(Math.random() * numbers.length), 1)[0]);
  }

  const bonus = space[space.length - 1];
  const showNumbers = space.slice(0,6).sort((a,b) => a - b);

  return [...showNumbers, bonus];
}

const Lotto = () => {
  const lottoNum = useMemo(()=> getNumbers(), []);
  const [lottoNumber, setLottoNumber] = useState(lottoNum);
  const [numbers, setNumbers] = useState([]);
  const [bonus, setBonus] = useState(null);
  const [redo, setRedo] = useState(false);
  const timeouts = useRef([]);

  useEffect(()=> {
    for(let i = 0; i < lottoNumber.length -1; i++){
      timeouts.current[i] = setTimeout(()=> {
        setNumbers((prevNumbers) => [...prevNumbers, lottoNumber[i]]);
      }, (i + 1) * 1000);
    }
    timeouts.current[6] = setTimeout(()=> {
      setBonus(lottoNumber[6]);
      setRedo(true);
    }, 7000);
    return()=>{
      timeouts.current.forEach((v) => {
        clearTimeout(v);
      });
    };
  }, [lottoNumber]);

  const ClickRedo = () => {
    setLottoNumber(getNumbers());
    setNumbers([]);
    setBonus(null);
    setRedo(false);
    timeouts.current = [];
  };

  const Section = styled.div`
    text-align: center;
    margin-top: 5vh;
    text-transform: uppercase;
  `

  const LottoBouns = styled.div`
    display: flex;
    justify-content: center;
  `

  const LBbox = styled.div`
    color: #555;
    margin-bottom: 5vh;

    h3{
      font-size: 24px;
    }
  `

  const Button = styled.div`
    background-color: #ddd;
    width: 20vh;
    height: 5vh;
    font-size: 3vh;
    border: none;
    border-radius: 1vh;
    color: #555;
    cursor: pointer;
    text-transform: uppercase;
    margin: 0 auto;
  `
  return(
    <Section>
      <h1>로또 번호 추출기</h1>
      <LBbox>
        <h3>당첨 번호</h3>
        <LottoBouns>
          {numbers.map((v)=>(
            <NumberBall key={v} number={v}/>
          ))}
        </LottoBouns>
      </LBbox>
      <LBbox>
        <h3>보너스</h3>
        <LottoBouns>
        {bonus && <NumberBall key={bonus} number={bonus}/>}
        </LottoBouns>
      </LBbox>
      {redo && <Button onClick={ClickRedo}>다시 하기</Button>}
    </Section>
  );
};

export default Lotto;