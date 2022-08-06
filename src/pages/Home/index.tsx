import { Intro } from "./components/intro";
import { OurFruits } from "./components/OurFruits";
import { HomeContainer } from "./styles";

export function HomePage() {

  return (
    <HomeContainer>
      <Intro />
      <OurFruits />
    </HomeContainer>
  )
}