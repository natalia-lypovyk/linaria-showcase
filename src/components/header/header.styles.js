import { styled } from 'linaria/react';

import Logo from '../../../public/images/logo.svg';

const Container = styled.div`
  display: flex;
  justify-content: space-between;

  width: 100%;
  height: 62px;
  
  padding: 16px 32px;
  
  background-color: #202427;
  color: #f7f7f7;
`;

const Wrapper = styled.div`
  display: flex;
`;

const InputWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  
  width: 320px;
  height: 28px;
  
  padding: 2px 8px;
  
  border: 1px solid #5c6166;
  border-radius: 2px;
  
  background-color: #202427;
`;

const Input = styled.input`
  width: 100%;

  border: none;
  
  background-color: #202427;
  font-family: 'SourceSanPro', sans-serif;
  font-weight: 400;
  font-size: 16px;
  line-height: 1.5em;
  
  &:focus {
    outline: none;
  }
`;

const SearchIcon = styled.div`
  width: 20px;
  height: 20px;
  
  margin-top: 1px;
  border: 1px solid #32383e;
  border-radius: 2px;

  color: #747b81;

  font-family: 'SourceSanPro', sans-serif;
  font-weight: 400;
  font-size: 14px;
  
  line-height: 20px;
  text-align: center;
`;

const GithubLogo = styled(Logo)`
  cursor: pointer;
`;

const Styled = { Container, Wrapper, InputWrapper, Input, SearchIcon, GithubLogo };

export default Styled;