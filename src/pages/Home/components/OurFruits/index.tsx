import { TitleText } from "../../../../components/Typography";
import { FruitCard } from "../FruitCard";
import { FruitList, OurFruitsContainer } from "./styles";

export function OurFruits() {
  return (
    <OurFruitsContainer className="container">
      <TitleText size="l" color="subtitle">
        Nossas frutas
      </TitleText>
      <FruitList>
        <FruitCard />
        <FruitCard />
        <FruitCard />
        <FruitCard />
        <FruitCard />
      </FruitList>
      
    </OurFruitsContainer>
  )
}