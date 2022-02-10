import Header_component from "../components/1-header";
import Container_component from "../components/container";
import InfoTopPage_component from "../components/info-top-page";

export default function Home():JSX.Element {
  return (
    <main>

      <Container_component background="bg-1">
        <InfoTopPage_component />
      </Container_component>

      <Container_component background="bg-2">
        <Header_component />
      </Container_component>

    </main>
  )
}
