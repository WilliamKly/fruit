import { TitleText } from "../../../../components/Typography";
import { useCart } from "../../../../hooks/useCart";
import { FruitCartCard } from "../FruitCartCard";
import { ConfirmationSection } from "./ConfirmationSection";
import { DetailsContainer, SelectedFruitsContainer } from "./styles";

export function SelectedFruits() {
  const { cartItems } = useCart()

  return (
    <SelectedFruitsContainer>
      <TitleText size="xs" color="subtitle">
        Frutas selecionadas
      </TitleText>
      <DetailsContainer>
        {cartItems.map((item) => (
          <FruitCartCard key={item.id} fruit={item} />
        ))}

        <ConfirmationSection />
      </DetailsContainer>
    </SelectedFruitsContainer>
  )
}