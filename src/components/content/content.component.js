import React from 'react';

import { Menu } from './menu';
import { Information } from './information';

import Styled from './content.styles';

export const Content = () => {
  return (
    <Styled.Wrapper>
      <Menu />
      <Information />
    </Styled.Wrapper>
  )
}