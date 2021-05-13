import React, { FC, useCallback, useEffect, useMemo } from 'react'
import { useHistory } from 'react-router-dom'

import { useAppSelector } from '../../utils/hooks/hooks'
import Window from '../window/window'
import { WindowContent, WindowImg, H5, QuestionContent, InfoBox, Typography, WindowButton } from '../styled'
import bookBannerImg from '../../assets/images/summary.png'
import { APP_STAGES_ROUTES } from '../../utils/types/enums'

import { calcTotal, calcTCorrectlyTotal } from './utils'

interface ISummary {
    amount: number
}

const Summary: FC<ISummary> = (props) => {
    const { amount } = props
    const {
        questions,
        answers
    } = useAppSelector((state) => state.questionnaire)
    
    const history = useHistory()
    useEffect(() => {
        if (!answers.length) {
            history.push(APP_STAGES_ROUTES.WELCOME)
        }
    }, [answers])

    const total = useMemo(() => calcTotal(questions, answers), [answers])
    const correctlyTotal = useMemo(() => calcTCorrectlyTotal(total), [total])
    
    const handleBackToMain = useCallback(() => {
        history.push(APP_STAGES_ROUTES.WELCOME)
    }, [])
    
    return (
        <Window
            withHead
            headProps={{
                title: 'Oprosnik95'
            }}
        >
            <WindowContent>
                <WindowImg
                    src={bookBannerImg}
                    alt="banner"
                />
                <QuestionContent>
                    <InfoBox>
                        <H5>
                            CorrectAnswers:
                            {`${correctlyTotal}/${amount}`}
                        </H5>
                        <H5>
                            Easy:
                            {`${total?.easy?.correctly || 0}/${total?.easy?.amount || 0}`}
                        </H5>
                        <H5>
                            Medium:
                            {`${total?.medium?.correctly || 0}/${total?.medium?.amount || 0}`}
                        </H5>
                        <H5>
                            Hard:
                            {`${total?.hard?.correctly || 0}/${total?.hard?.amount || 0}`}
                        </H5>
                    </InfoBox>
                    <WindowButton
                        onClick={handleBackToMain}
                    >
                        <Typography>
                            Back to main
                        </Typography>
                    </WindowButton>
                </QuestionContent>
            </WindowContent>
        </Window>
    )
}

export default Summary
