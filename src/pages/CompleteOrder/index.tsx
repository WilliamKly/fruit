import { CompleteOrderForm } from "./components/CompleteOrderForm";
import { SelectedFruits } from "./components/SelectedFruits";
import { CompleteOrderContainer } from "./styles";

export function CompleteOrderPage() {
  return (
    <CompleteOrderContainer className="container">
      <CompleteOrderForm />
      <SelectedFruits />
    </CompleteOrderContainer>
  )
}