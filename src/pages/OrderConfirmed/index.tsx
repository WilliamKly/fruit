import { RegularText, TitleText } from "../../components/Typography";
import { OrderConfirmedContainer, OrderDetailsContainer } from "./styles";
import confirmedOrder from '../../assets/delivery.svg'
import { InfoWithIcon } from "../../components/infoWithIcon";
import { Clock, CurrencyDollar, MapPin } from "phosphor-react";
import { useTheme } from "styled-components";

export function OrderConfirmedPage() {
  const { colors } = useTheme()

  return (
    <OrderConfirmedContainer className="container">
      <div>
        <TitleText size="l">Boa! Pedido confirmado</TitleText>
        <RegularText size="l" color="subtitle">
          Agora é só aguardar o pedido na sua casa!
        </RegularText>
      </div>

      <section>
        <OrderDetailsContainer>
          <InfoWithIcon 
            icon={<MapPin weight="fill"/>}
            iconBg={colors["brand-purple"]}
            text={
              <RegularText>
                Entrega em <strong>Rua Rui Barbosa, 217</strong>
                <br />
                Junco - Picos, PI
              </RegularText>
            }
          />
          <InfoWithIcon 
            icon={<Clock weight="fill"/>}
            iconBg={colors["brand-yellow"]}
            text={
              <RegularText>
                Previsão de entrega
                <br />
                <strong>15min - 25min</strong>
              </RegularText>
            }
          />
          <InfoWithIcon 
            icon={<CurrencyDollar weight="fill"/>}
            iconBg={colors["brand-yellow"]}
            text={
              <RegularText>
                Pagamento na entrega
                <br />
                <strong>Cartão de crédito</strong>
              </RegularText>
            }
          />
        </OrderDetailsContainer>
        <img src={confirmedOrder} alt="" />
      </section>
    </OrderConfirmedContainer>
  )
}