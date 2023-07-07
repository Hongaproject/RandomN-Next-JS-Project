import Head from 'next/head'
import { useState } from 'react';
import Lotto from './Lotto/lotto';
import styled from 'styled-components';

export default function Home() {
  
  //무작위 번호 추출기
  const [number, setNumber] = useState(0)
  const [get, setGet] = useState(false)
  const [reset, setReset] = useState(true)

  const clickNumber = () => {
    setNumber(Math.floor(Math.random() * 50));
    setGet(true)
    setReset(false)
  }

  const clickReset = () => {
    setNumber(0)
    setGet(false)
    setReset(true)
  }

  const RandomBox = styled.div`
    text-align: center;
    width: 30%;
    border: 1px solid black;
    border-radius: 2rem;
    padding: 20px;
    box-shadow: 2px 2px 2px 2px gray;
    margin: 0 auto;
    margin-top: 30px;
  `

  const Randomh = styled.div`
    font-size: 32px;
  `

  const Buttonbox = styled.div`
    display: flex;
    justify-content: center;
  `

  const Button1 = styled.div`
    padding: 10px;
    border: none;
    border-radius: 1rem;
    margin-right: 10px;
    background-color: #638fbc;
    transition: all 0.6s;
    color: white;

    &:hover{
      cursor: pointer;
      background-color: #2c3e50;
      transition: all 0.8s;
    }
  `

  const Button2 = styled.div`
    padding: 10px;
    border: none;
    border-radius: 1rem;
    margin-right: 10px;
    background-color: #ff9249;
    transition: all 0.6s;
    color: white;

    &:hover{
      cursor: pointer;
      background-color: #ff6600;
      transition: all 0.8s;
    }
`

  return (
    <div>
      <Head>
        <title>무작위 & 로또 번호 추출기</title>
      </Head>
        <RandomBox>
            <h1>무작위 번호 추출기 ( 1 ~ 50까지 )</h1>
            <Randomh><h3>{number}</h3></Randomh>
            <Buttonbox>
                <Button1 onClick={clickNumber} disabled={get}>번호 뽑기</Button1>
                <Button2 onClick={clickReset} disabled={reset}>초기화</Button2>
            </Buttonbox>
        </RandomBox>
      <Lotto />
    </div>
  )
}
