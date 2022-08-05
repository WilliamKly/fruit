import { ShoppingCart } from "phosphor-react";
import { useEffect, useState } from "react";
import { QuantityInput } from "../../../../components/QuantityInput";
import { RegularText, TitleText } from "../../../../components/Typography";
import { AddCartWrapper, CardFooter, Description, FruitCardContainer, Name, Tags } from "./styles";

interface FruitsProps {
  name: string;
}

export function FruitCard() {
  const [fruits, setFruits] = useState<FruitsProps[]>([])

  useEffect(() => {
    fetch('http://localhost:3333/')
    .then(response => response.json())
    .then(data => setFruits(data))
  }, [])

  return (
   <FruitCardContainer>
    <img src="http://t2.gstatic.com/licensed-image?q=tbn:ANd9GcSGALP30luT2-GVVH0xiIP0kBjwefg_mPNj5LrT9iJCKPNUg8POy8t5G8_AJLFmeuXzQdqUc11f3H45TihL5kY" alt="" />

    <Tags>
      <span>Tradicional</span>
      <span>Frescas</span>
    </Tags>

    <Name>
      Uva
    </Name>

    <Description>
      Essa melancia é importada do sul de Minas
    </Description>

    <CardFooter>
      <div>
        <RegularText size="s">R$</RegularText>
        <TitleText size="m" color="text" as="strong">9,90</TitleText>
      </div>

      <AddCartWrapper>
        <QuantityInput />
        <button>
          <ShoppingCart weight="fill" size={22}/>
        </button>
      </AddCartWrapper>
    </CardFooter>
   </FruitCardContainer> 
  )
}