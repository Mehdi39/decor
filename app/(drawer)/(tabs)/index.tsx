// package imports
import React from 'react';
import { Text } from 'react-native';

// external imports
import { Container } from '~/components/Container';
import Heading from '~/components/Heading';
import { ScreenContent } from '~/components/ScreenContent';
import Icon from '~/components/icons/Icon';

export default function Home() {
  return (
    <>
      <Container>
        <ScreenContent>
          <Heading text="New Collection" />
          <Icon imgSource={require('~/components/icons/bed.png')} />
        </ScreenContent>
      </Container>
    </>
  );
}
