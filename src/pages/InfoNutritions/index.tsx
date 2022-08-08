import { Info } from "phosphor-react";
import { useCallback, useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { FruitCard } from "../Home/components/FruitCard";
import { Name } from "../Home/components/FruitCard/styles";
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
            <Name>calories: {nutrition.nutritions.calories}</Name>
            <Name>carbohydrates: {nutrition.nutritions.carbohydrates}</Name>
            <Name>fat: {nutrition.nutritions.fat}</Name>
            <Name>protein: {nutrition.nutritions.protein}</Name>
            <Name>sugar: {nutrition.nutritions.sugar}</Name>
          </div>
        ))}
      </FruitList>
    </InfoNutritionsContainer>
  )
}