import styled from 'styled-components';

export const DefaultButton = styled.button`
  background-color: slateblue;
  color: white;
  border-style: none;
  padding: 8px 80px;
  border-radius: 5px;
  text-transform: capitalize;
  cursor: pointer;
  display: block;
  margin: 2em auto;
  font-weight: bold;
  :hover {
    background-color: darkslateblue;
    transition: 0.2s ease-in;
  }
`;

export const TransparentButton = styled(DefaultButton)`
  background-color: transparent;
  color: slateblue;
  border: 1px solid slateblue;
  padding: 8px 200px;
  :hover {
    color: white;
  }
`;
