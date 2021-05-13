import styled from 'styled-components'

const WindowBox = styled.div`
  width: 55%;
  max-height: 80%;
  background-color: ${(props) => props.theme.colors.silver};
  padding: 3px;
  box-shadow: ${(props) => props.theme.boxShadow.primary};
`

export {
    WindowBox
}
