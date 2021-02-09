import React from 'react';
import Link from 'next/link';

import Styled from './header.styles';

export const Header = () => {
  return (
    <Styled.Container>
      <Link href='/' passHref>
        <Styled.GithubLogo />
      </Link>

      <Styled.Wrapper>
        <Styled.InputWrapper>
          <Styled.Input placeholder='Search or jump to...' />

          <Styled.SearchIcon>/</Styled.SearchIcon>
        </Styled.InputWrapper>
      </Styled.Wrapper>
    </Styled.Container>
  )
};
