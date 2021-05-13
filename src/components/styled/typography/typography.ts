import styled, { css } from 'styled-components'

const typographyStyles = css<{color ?: string, bold ?: boolean}>`
  color: ${(props) => props.color || props.theme.colors.black};
  margin: 0;
  //font-family: "Microsoft Sans Serif", serif;
  font-weight: ${(props) => (props.bold ? 'bold' : 'inherit')};
`

const H1 = styled.h1`
  ${(props) => typographyStyles};
  font-size: 4rem;
  margin: 16px;
`

const H2 = styled.h2`
  ${(props) => typographyStyles};
  font-size: 3rem;
`

const H3 = styled.h3`
  ${(props) => typographyStyles};
  font-size: 2.5rem;
`

const H4 = styled.h4`
  ${(props) => typographyStyles};
  font-size: 2rem;
`

const H5 = styled.h5`
  ${(props) => typographyStyles};
  font-size: 1.5rem;
`

const Typography = styled.p`
  ${(props) => typographyStyles};
  font-size: 1.25rem;
`

const Caption = styled.span`
  ${(props) => typographyStyles};
  font-size: 1rem;
  font-weight: bold;
  color: ${(props) => props.theme.colors.white};
`

export {
    H1,
    H2,
    H3,
    H4,
    H5,
    Typography,
    Caption
}
