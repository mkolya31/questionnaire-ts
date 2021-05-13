import React, { FC, FormEvent } from 'react'
import styled from 'styled-components'
import { CloseOutline } from '@styled-icons/evaicons-outline'

import { Caption, IconButton } from '../styled'

const WindowHeadBox = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 3px;
  background-color: ${(props) => props.theme.colors.darkblue};
`

export interface IWindowHeadProps {
    title?: string
    withCloseButton?: boolean,
    handleCloseButtonClick?: (e: FormEvent<HTMLInputElement>) => void
}

const WindowHead: FC<IWindowHeadProps> = (props) => {
    const { title = 'Untitled', handleCloseButtonClick } = props

    return (
        <WindowHeadBox>
            <Caption color="white" bold>{title}</Caption>
            {handleCloseButtonClick && (
            <IconButton>
                <CloseOutline />
            </IconButton>
            )}
        </WindowHeadBox>
    )
}

export default WindowHead
