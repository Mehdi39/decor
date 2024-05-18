import { Container } from '~/components/Container';
import Heading from '~/components/Heading';
import { ScreenContent } from '~/components/ScreenContent';

export default function Home() {
  return (
    <>
      <Container>
        <ScreenContent path="app/(drawer)/(tabs)/cart.tsx" title="cart">
          <Heading text="cart.tsx" />
          <Heading text="ajsd;lfkj a;lskdjf;lk ajsdf;l kjsd f;lks" />
        </ScreenContent>
      </Container>
    </>
  );
}
