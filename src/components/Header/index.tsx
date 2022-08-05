import { HeaderButton, HeaderButtonsContainer, HeaderContainer } from "./styles";
import logoImg from '../../assets/logo.png'
import { MapPin, ShoppingCart } from 'phosphor-react'

export function Header() {
  return (
    <HeaderContainer>
      <div className="container">
        <img src={logoImg} width={40} alt="Logo da empresa de hortifruti" />

        <HeaderButtonsContainer>
          <HeaderButton variant="purple">
            <MapPin size={20} weight="fill" />
            Picos, PI
          </HeaderButton>
          <HeaderButton variant="yellow">
            <ShoppingCart size={20} weight="fill" /> 
          </HeaderButton>
        </HeaderButtonsContainer>
      </div>
    </HeaderContainer>
  )
}