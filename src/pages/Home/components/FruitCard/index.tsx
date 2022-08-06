import { ShoppingCart } from "phosphor-react";
import { useEffect, useState } from "react";
import { QuantityInput } from "../../../../components/QuantityInput";
import { RegularText, TitleText } from "../../../../components/Typography";
import { useCart } from "../../../../hooks/useCart";
import { formatMoney } from "../../../../utils/formatMoney";
import { AddCartWrapper, CardFooter, Description, FruitCardContainer, Name, Tags } from "./styles";

export interface Fruit {
  name: string;
  id: number;
}

interface FruitProps {
  fruit: Fruit;
}

export function FruitCard({ fruit }: FruitProps) {
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
    addFruitToCart(fruitToAdd)
  }

  const price = 9.9
  const formattedPrice = formatMoney(price)
  const [fruits, setFruits] = useState<FruitProps[]>([])

  useEffect(() => {
    fetch('http://localhost:3333/')
    .then(response => response.json())
    .then(data => setFruits(data))
  }, [])

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
    </CardFooter>
   </FruitCardContainer> 
  )
}