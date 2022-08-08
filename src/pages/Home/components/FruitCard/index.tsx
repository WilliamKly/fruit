import { Info, ShoppingCart } from "phosphor-react";
import { useState } from "react";
import { Link, NavLink, useParams } from "react-router-dom";
import { QuantityInput } from "../../../../components/QuantityInput";
import { RegularText, TitleText } from "../../../../components/Typography";
import { useCart } from "../../../../hooks/useCart";

import { formatMoney } from "../../../../utils/formatMoney";
import { AddCartWrapper, BtnCont, CardFooter, Description, FruitCardContainer, Name, Tags } from "./styles";

export interface Fruit {
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

interface FruitProps {
  fruit: Fruit;
}

export function FruitCard({ fruit }: FruitProps) {
  const id = fruit.id

  const [quantity, setQuantity] = useState(1);
  
  function handleIncrease() {
    setQuantity(state => state + 1)
  }
  
  function handleDecrease() {
    setQuantity(state => state - 1)
  }

  const { addFruitToCart } = useCart()

  function handleAddToCart() {
    const fruitToAdd = {
      ...fruit,
      quantity,
    }
    //console.log(fruitToAdd)
    addFruitToCart(fruitToAdd)
  }

  const price = 9.9
  const formattedPrice = formatMoney(price)
  
  return (
   <FruitCardContainer>

    <Tags>
      <span>Tradicional</span>
      <span>Frescas</span>
    </Tags>

    <Description>
      As melhores frutas do Brasil!
    </Description>
    
    <CardFooter>
      <div>
        <RegularText size="s">R$</RegularText>
        <TitleText size="m" color="text" as="strong">{formattedPrice}</TitleText>
      </div>

      <AddCartWrapper>
        <QuantityInput
          onIncrease={handleIncrease}
          onDecrease={handleDecrease}
          quantity={quantity}
        />
        
        <button onClick={handleAddToCart}>
          <ShoppingCart weight="fill" size={22}/>
        </button>
        
      </AddCartWrapper>

      <BtnCont>
        <Link to={`/InfoNutritions/${id}`}>
          <button type="button">{<Info />}</button>
        </Link>
      </BtnCont>
    
    </CardFooter>
    
   </FruitCardContainer> 
  )
}