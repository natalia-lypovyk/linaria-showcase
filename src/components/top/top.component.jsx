import React from 'react';

import Icon from '../../../public/images/icon.svg';

import Styled from './top.styles';

const info = [
  {
    title: 'Watch',
    content: 27,
  },
  {
    title: 'Star',
    content: 25,
  },
  {
    title: 'Fork',
    content: 75,
  }
];

export const Top = () => {
  return (
    <Styled.Container>
      <Styled.OwnerName>
        <Icon />
        <Styled.Name>uStudio / Front-End Crew</Styled.Name>
      </Styled.OwnerName>

      <Styled.InfoBlock>
        {info.map(({ title, content }) => {
          return (
            <Styled.Item key={title}>
              <tr>
                <Styled.ItemContent>{title}</Styled.ItemContent>
                <Styled.ItemContent>{content}</Styled.ItemContent>
              </tr>
            </Styled.Item>
          );
        })
        }
      </Styled.InfoBlock>
    </Styled.Container>
  )
}