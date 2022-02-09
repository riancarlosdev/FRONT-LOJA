import HeaderComponent from "../components/1-header";
import Container from "../components/container";
import InfoTopPage from "../components/info-top-page";

export default function Home():JSX.Element {
  return (
    <main>

      <Container background="bg-1">
        <InfoTopPage />
      </Container>

      <Container background="bg-2">
        <HeaderComponent />
      </Container>

    </main>
  )
}
