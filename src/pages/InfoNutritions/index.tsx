import { useCallback, useEffect, useState } from "react";
import { RegularText } from "../../components/Typography";
import { FruitCardContainer, Name } from "../Home/components/FruitCard/styles";
import { FruitList } from "../Home/components/OurFruits/styles";
import { InfoNutritionsContainer } from "./styles";

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

export function InfoNutritions() {

  const getfruits = useCallback(async () => {
    fetch('http://localhost:3333/')
    .then(response => response.json())
    .then(data => setFruits(data))
  }, [])

  useEffect(() => {
    getfruits()
  }, [getfruits])

  const [fruits, setFruits] = useState<FruitsProps[]>([])

  return (
    <InfoNutritionsContainer className="container">
       <FruitList>
      {fruits.map((nutrition) => (
          <div key={nutrition.id}>
            <FruitCardContainer>
              <Name>Fruta: {nutrition.name}</Name>
              <RegularText>calories: {nutrition.nutritions.calories}</RegularText>
              <RegularText>carbohydrates: {nutrition.nutritions.carbohydrates}</RegularText>
              <RegularText>fat: {nutrition.nutritions.fat}</RegularText>
              <RegularText>protein: {nutrition.nutritions.protein}</RegularText>
              <RegularText>sugar: {nutrition.nutritions.sugar}</RegularText>
            </FruitCardContainer>
        </div>
        ))}
      </FruitList>
    </InfoNutritionsContainer>
  )
}