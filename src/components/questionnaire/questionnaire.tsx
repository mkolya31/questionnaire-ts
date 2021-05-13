import React, { FC, useCallback, useEffect, useState } from 'react'
import { useHistory } from 'react-router-dom'

import { useAppDispatch, useAppSelector } from '../../utils/hooks/hooks'
import { fetchQuestions } from '../../__data__/actions/questions'
import { addAnswer } from '../../__data__/reducers/questionnaire'
import Window from '../window/window'
import { WindowImg, WindowContent } from '../styled'
import questionnaireImg from '../../assets/images/questionnaire.jpeg'
import Question from '../question/question'
import { IQuestionAnswer } from '../../utils/types/interfaces'
import { APP_STAGES_ROUTES } from '../../utils/types/enums'

interface IQuestionnaire {
    amount: number
}

const Questionnaire: FC<IQuestionnaire> = (props) => {
    const { amount } = props

    const [currentQuestion, setCurrentQuestion] = useState<number>(0)

    const {
        questions,
        isPending,
        isError
    } = useAppSelector((state) => state.questionnaire)
    const dispatch = useAppDispatch()
    const history = useHistory()

    useEffect(() => {
        if (!questions.length) {
            dispatch(fetchQuestions(amount))
        }
    }, [questions.length])

    const handleNextOnClick = useCallback((answer: IQuestionAnswer) => {
        dispatch(addAnswer(answer))

        if (currentQuestion + 1 === questions.length) {
            return history.push(APP_STAGES_ROUTES.SUMMARY)
        }

        return setCurrentQuestion(currentQuestion + 1)
    }, [dispatch, addAnswer, currentQuestion, setCurrentQuestion])

    return (
        <>
            {!(isPending || isError) && questions?.length && (
                <Window
                    withHead
                    headProps={{
                        title: `Oprosnik95 (${currentQuestion + 1}/${questions.length})`
                    }}
                >
                    <WindowContent>
                        <WindowImg src={questionnaireImg} alt="questionnaire-banner" />
                        <Question
                            question={questions[currentQuestion]}
                            questionIndex={currentQuestion + 1}
                            handleNextOnClick={handleNextOnClick}
                        />
                    </WindowContent>
                </Window>
            )}
        </>
    )
}

export default Questionnaire
