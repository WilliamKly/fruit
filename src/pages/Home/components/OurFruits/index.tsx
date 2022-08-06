import { useEffect, useState } from "react";
import { TitleText } from "../../../../components/Typography";
import { dataFruits } from "../../../../data/dataFruits";
import { FruitCard } from "../FruitCard";
import { Name } from "../FruitCard/styles";
import { FruitList, OurFruitsContainer } from "./styles";

interface FruitsProps {
  name: string;
  id: number;
}

export function OurFruits() {
  const [fruits, setFruits] = useState<FruitsProps[]>([])

  useEffect(() => {
    fetch('http://localhost:3333/')
    .then(response => response.json())
    .then(data => setFruits(data))
  }, [])

  return (
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