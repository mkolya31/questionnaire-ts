import styled from 'styled-components'

interface IButton {
    boxShadowVariant?: 'primary' | 'secondary',
    padding?: string
}

const Button = styled.button<IButton>`
  font-family: 'WA95FA', -apple-system, sans-serif;
  background-color: ${(props) => props.theme.colors.silver};
  box-shadow: ${(props) => props.boxShadowVariant || props.theme.boxShadow.primary};
  margin: 0.5rem;
  border: none;
  padding: ${(props) => props.padding || '3px 25px'};
  min-width: 100px;
  
  &:hover {
    cursor: pointer;
  }
  
  &:active {
    box-shadow: none;
  }
`

const IconButton = styled(Button)`
  padding: 3px;
  min-width: 20px;
  margin: 0.1rem;
`

const WindowButton = styled(Button)`
  align-self: flex-end;
  justify-self: flex-end;
`

export {
    Button,
    IconButton,
    WindowButton
}
