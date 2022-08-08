import { Info } from "phosphor-react";
import { useCallback, useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { Button } from "../../../../components/Button";
import { TitleText } from "../../../../components/Typography";
import { FruitCard } from "../FruitCard";
import { Name } from "../FruitCard/styles";
import { FruitList, OurFruitsContainer } from "./styles";

interface FruitsProps {
  name: string;
  id: number;
  nutritions: {
    calories?: number;
    carbohydrates?: number;
    fat?: number;
    protein?: number;
    sugar?: number;
  }
}

export function OurFruits() {
  const [fruits, setFruits] = useState<FruitsProps[]>([])

  const getfruits = useCallback(async () => {
    fetch('http://localhost:3333/')
    .then(response => response.json())
    .then(data => setFruits(data))
  }, [])

  useEffect(() => {
    getfruits()
  }, [getfruits])

  console.log(setFruits.name)

  function handleMouse() {
    console.log("Mouse")
  }

  return (
    <OurFruitsContainer className="container">
      <TitleText size="l" color="subtitle">
        Nossas frutas
      </TitleText>
      <FruitList>
      {fruits.map((fruit) => (
          <div key={fruit.id}>
            <Name>{fruit.name}</Name>
            <FruitCard fruit={fruit}/>
          </div>
        ))}
       
      </FruitList>
      
    </OurFruitsContainer>
  )
}

{/*return (
  <OurFruitsContainer className="container">
    <TitleText size="l" color="subtitle">
      Nossas frutas
    </TitleText>
    <FruitList>
      {fruits.map((fruit) => (
        <div key={fruit.id}>
          <Name>{fruit.name}</Name>
          <FruitCard />
        </div>
      ))}
  </FruitList>*/}