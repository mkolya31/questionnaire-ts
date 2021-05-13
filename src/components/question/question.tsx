import React, { FC, useCallback, useEffect, useMemo, useState } from 'react'
import { shuffle, concat, isEmpty } from 'lodash'

import { IOpentbdQuestion, IQuestionAnswer } from '../../utils/types/interfaces'
import { Typography, H5, WindowButton, QuestionContent, InfoBox } from '../styled'
import QuestionField from '../question-field/question-field'

interface IQuestionWindow {
    question: IOpentbdQuestion,
    questionIndex: number,
    answer?: string | Array<string>,
    handleNextOnClick: (answer: IQuestionAnswer) => void
}

const Question: FC<IQuestionWindow> = (props) => {
    const { question, questionIndex, handleNextOnClick } = props
    // eslint-disable-next-line camelcase
    const { question: questionText, correct_answer, incorrect_answers, type, category, difficulty } = question
    // eslint-disable-next-line camelcase
    const answers = useMemo(() => shuffle(concat(correct_answer, incorrect_answers)), [question])

    const [checkedAnswers, setCheckedAnswers] = useState<IQuestionAnswer>({})

    useEffect(() => {
        setCheckedAnswers({})
    }, [question])

    const handleFieldOnChange = useCallback((e: React.FormEvent<HTMLInputElement>) => {
        const { currentTarget: { type: targetType, value, checked } } = e

        if (targetType === 'radio') {
            setCheckedAnswers({ [value]: checked })
        }

        setCheckedAnswers({
            ...checkedAnswers,
            [value]: checked
        })
    }, [checkedAnswers, setCheckedAnswers])

    const handleNextButtonOnClick = () => {
        handleNextOnClick(checkedAnswers)
    }

    const nextDisabled = useMemo(() => isEmpty(checkedAnswers), [checkedAnswers])

    return (
        <QuestionContent>
            <InfoBox>
                <H5>
                    Question #
                    {questionIndex}
                </H5>
                <H5>
                    [
                    {difficulty}
                    {' '}
                    |
                    {' '}
                    {category}
                    ]
                </H5>
                <Typography
                    dangerouslySetInnerHTML={{ __html: questionText }}
                />
                <QuestionField
                    answers={answers}
                    checkedAnswers={checkedAnswers}
                    type={type}
                    handleFieldOnChange={handleFieldOnChange}
                />
            </InfoBox>
            <WindowButton
                onClick={handleNextButtonOnClick}
                disabled={nextDisabled}
            >
                <Typography>
                    Next &gt;
                </Typography>
            </WindowButton>
        </QuestionContent>
    )
}

export default Question
