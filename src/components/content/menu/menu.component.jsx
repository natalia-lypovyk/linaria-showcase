import React from 'react';
import Styled from './menu.styles';

const options = ['Options', 'Manage access', 'Security&analysis', 'Branches', 'Webhooks', 
'Notifications', 'Integrations', 'Deploy keys', 'Secrets', 'Actions', 'Moderation settings'];

export const Menu = () => {
  return (
    <Styled.List>
      {options.map((option) => {
        return (
          <Styled.Item key={option}>{option}</Styled.Item>
        )
      })}
    </Styled.List>
  )
}