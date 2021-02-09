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

      <Styled.Text>Social preview</Styled.Text>

      <Styled.SlimText>
        Upload an image to customize your repository’s social media preview.
      </Styled.SlimText>

      <Styled.SlimText>
        Images should be at least 640×320px (1280×640px for best display).
      </Styled.SlimText>

      <Styled.Link>Download template</Styled.Link>

      <Styled.Picture>
        <Styled.EditButton>Edit</Styled.EditButton>
      </Styled.Picture>
    </>
  )
}