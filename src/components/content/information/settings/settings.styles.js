import { styled } from 'linaria/react';

const Title = styled.p`
  padding: 8px 16px 8px 0;
  margin-bottom: 16px;

  color: #f7f7f7;

  font-size: 22px;
  font-weight: 600;
`;

const Text = styled.p`
  margin-bottom: 8px;

  font-size: 16px;
  font-weight: 600;
  color: #f7f7f7;
`;

const RenameBlock = styled.div`
  display: flex;

  margin-bottom: 32px;
`;

const Block = styled.div`
  width: 350px;
  height: 28px;

  padding: 0 8px;
  margin-right: 8px;
  line-height: 28px;

  border: 1px solid #5c6166;
  border-radius: 2px;

  color: #8c979b;
  background-color: #1c1f21;

  &:hover {
    box-shadow: rgba(247, 247, 247, 0.1) 0 2px 8px;
  }
`;
const Button = styled.button`
  padding: 5px 16px;

  border: none;
  border-radius: 2px;

  background-color: #292e32;
  color: #f7f7f7; 

  &:hover {
    box-shadow: rgba(247, 247, 247, 0.05) 0 2px 8px;
  }
`;

const SlimText = styled.p`
  color: #f7f7f7;

  margin-bottom: 8px;
`;
const Link = styled.a`
  color: #2d90e6;
  
  font-weight: 600;
  text-decoration: none;

  cursor: pointer;

  &:hover {
    text-decoration: underline;
  }
`;

const Picture = styled.figure`
  position: relative;

  width: 100%;
  max-width: 640px;
  height: 320px;

  margin-top: 15px;

  border: 1px solid #32383e;
  border-radius: 4px;
  
  background: no-repeat 50% center url('https://picsum.photos/1280/640');
  background-size: cover;
`;

const EditButton = styled.button`
  position: absolute;
  bottom: 8px;
  left: 8px;

  width: 60px;
  height: 28px;

  border: 1px solid transparent;
  border-radius: 2px;

  z-index: 1;

  background-color: #f7f7f7;
  color: #1c1f21;

  font-family: 'SourceSanPro', sans-serif;
  font-size: 16px;

  line-height: 28px;

  &:hover {
    box-shadow: rgba(247, 247, 247, 0.4) 0 2px 8px;
  }
`;

const Styled = { 
  Title,
  Text, 
  RenameBlock, 
  Button, 
  Block, 
  SlimText, 
  Link, 
  Picture, 
  EditButton 
};

export default Styled;