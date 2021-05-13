import React, { FC, useCallback, useEffect } from 'react'
import styled from 'styled-components'
import { useHistory } from 'react-router-dom'

import Window from '../window/window'
import { Button, H2, Typography } from '../styled'
import bookImg from '../../assets/images/book.png'
import { APP_STAGES_ROUTES } from '../../utils/types/enums'
import { useAppDispatch } from '../../utils/hooks/hooks'
import { resetState } from '../../__data__/reducers/questionnaire'

const WelcomeBox = styled.div`
  width: 100%;
  height: 100%;
  padding: 20px;
`

interface ITitle {
    bold?: boolean,
    color?: string,
    marginRight?: string
}

const Title = styled(H2)<ITitle>`
  display: inline;
  color: ${(props) => props.color || props.theme.colors.black};
  margin-right: ${(props) => props.marginRight || 0};
`

const ContentBox = styled.div`
  display: flex;
  margin-top: 2rem;
`

const ControlBox = styled.div`
  width: 40%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

const WelcomeImg = styled.img`
  width: 60%;
  height: auto;
  background-color: #fcffd5;
`

const Welcome: FC = () => {
    const dispatch = useAppDispatch()
    useEffect(() => {
        dispatch(resetState())
    }, [])
    const history = useHistory()
    const handleStartButtonClick = useCallback(() => {
        history.push(APP_STAGES_ROUTES.QUESTIONNAIRE)
    }, [])

    return (
        <Window
            withHead
            headProps={{
                title: 'Welcome'
            }}
        >
            <WelcomeBox>
                <Title
                    marginRight="15px"
                >
                    Welcome to
                </Title>
                <Title
                    bold
                >
                    Oprosnik
                </Title>
                <Title
                    bold
                    color="white"
                >
                    95
                </Title>
                <ContentBox>
                    <WelcomeImg src={bookImg} alt="book" />
                    <ControlBox>
                        <Button
                            onClick={handleStartButtonClick}
                        >
                            <Typography>Start</Typography>
                        </Button>
                        <Button>
                            <Typography>Help</Typography>
                        </Button>
                    </ControlBox>
                </ContentBox>
            </WelcomeBox>
        </Window>
    )
}

export default Welcome
