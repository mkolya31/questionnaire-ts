import styled from 'styled-components'

const WindowContent = styled.div`
  display: flex;
  height: 100%;
  width: 100%;
  padding: 8px;
`

const InfoBox = styled.div`
  & > * {
    margin-bottom: 20px;
  }
`

export {
    WindowContent,
    InfoBox
}
