import React from 'react';

import Styled from './settings.styles';

export const Settings = () => {
  return (
    <>
      <Styled.Title>Settings</Styled.Title>

      <Styled.Text>Repository name</Styled.Text>

      <Styled.RenameBlock>
        <Styled.Block>Front-End Crew</Styled.Block>

        <Styled.Button>Rename</Styled.Button>
      </Styled.RenameBlock>
    </>
  )
}