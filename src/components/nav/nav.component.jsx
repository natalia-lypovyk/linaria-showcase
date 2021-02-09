import React from 'react';

import Styled from './nav.styles';

export const Nav = () => {
  return (
    <Styled.Navigation>
      <Styled.List>
        {['Code', 'Issues', 'Pull Requests', 'Actions', 'Security', 'Insights', 'Settings'].map((item) => {
          return (
            <Styled.ListItem key={item}>{item}</Styled.ListItem>
          )
        })}
      </Styled.List>
    </Styled.Navigation>
  )
}