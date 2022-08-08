import { Trash } from "phosphor-react";
import { QuantityInput } from "../../../../components/QuantityInput";
import { RegularText } from "../../../../components/Typography";
import { CartItem } from "../../../../contexts/CartContext";
import { useCart } from "../../../../hooks/useCart";
import { formatMoney } from "../../../../utils/formatMoney";
import { ActionsContainer, FruitCartCardContainer, RemoveButton } from "./styles";

interface FruitCartCardProps {
  fruit: CartItem;
}

export function FruitCartCard({ fruit }: FruitCartCardProps) {
  const { changeCartItemQuantity, removeCartItem } = useCart();

  function handleIncrease() {
    changeCartItemQuantity(fruit.id, 'increase')
  }

  function handleDecrease() {
    changeCartItemQuantity(fruit.id, 'decrease')
  }

  function handleremove() {
    removeCartItem(fruit.id)
  }

  const price = 9.9
  const fruitTotal = price * fruit.quantity
  const formattedPrice = formatMoney(fruitTotal)

  return (
    <FruitCartCardContainer>
      <div>
        <img src="" alt="" />
        <div>
          <RegularText color="subtitle">{fruit.name}</RegularText>
          <ActionsContainer>
            <QuantityInput size="small" onIncrease={handleIncrease} onDecrease={handleDecrease} quantity={fruit.quantity}/>
            <RemoveButton onClick={handleremove}>
              <Trash size={16}/>
              REMOVER
            </RemoveButton>
          </ActionsContainer>
          
        </div>
      </div>
      <p>R$ {formattedPrice}</p>
    </FruitCartCardContainer>
  )
}