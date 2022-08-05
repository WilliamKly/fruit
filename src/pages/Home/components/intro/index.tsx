import { BenefitsContainer, IntroContainer, IntroContent, IntroTitle } from "./styles";
import introImg from '../../../../assets/frutas.png'
import { RegularText } from "../../../../components/Typography";
import { InfoWithIcon } from "../../../../components/infoWithIcon";
import { Package, ShoppingCart, Timer } from "phosphor-react";
import { useTheme } from "styled-components";

export function Intro() {
  const { colors } = useTheme()

  return (
    <IntroContainer>
      <IntroContent className="container">
        <div>
          <section>
            <IntroTitle size="xl">
              Faça as suas compras aqui da maneira mais fácil!!
            </IntroTitle>
            <RegularText size="l" color="subtitle" as="h3">
              Com o Hortifruti Online você faz as suas compras a qualquer hora do dia.
            </RegularText>
          </section>

          <BenefitsContainer>
            <InfoWithIcon
              iconBg={colors["brand-yellow-dark"]}
              icon={<ShoppingCart weight="fill"/>}
              text="Compra simples e segura"
            />
            <InfoWithIcon
              iconBg={colors["base-text"]}
              icon={<Package weight="fill"/>}
              text="Embalagem de qualidade"
            />
            <InfoWithIcon
              iconBg={colors["brand-yellow"]}
              icon={<Timer weight="fill"/>}
              text="Entrega rápida e rastreada"
            />
            
          </BenefitsContainer>
        </div>

        <img src={introImg} alt="" width={450} />
      </IntroContent>
    </IntroContainer>
  )
}