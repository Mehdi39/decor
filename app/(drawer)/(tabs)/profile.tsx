import { Stack } from 'expo-router';

import { Container } from '~/components/Container';
import { ScreenContent } from '~/components/ScreenContent';

export default function Home() {
  return (
    <>
      <Container>
        <ScreenContent path="app/(drawer)/(tabs)/categories.tsx" title="User Information" />
      </Container>
    </>
  );
}
