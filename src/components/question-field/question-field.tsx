import React, { FC } from 'react'
import styled from 'styled-components'

import { Typography } from '../styled'
import { IQuestionAnswer } from '../../utils/types/interfaces'

const FieldBox = styled.div`
  cursor: pointer;
  margin: 10px 0;
  
  & input,
  & label {
    cursor: pointer;
  }
`

const StyledTypography = styled(Typography)`
    display: inline;
`

interface IQuestionField {
    answers: Array<string>,
    checkedAnswers: IQuestionAnswer,
    type: 'boolean' | 'multiple',
    handleFieldOnChange: (e: React.FormEvent<HTMLInputElement>) => void
}

const QuestionField: FC<IQuestionField> = (props) => {
    const { answers, checkedAnswers, type, handleFieldOnChange } = props

    const handleInputOnChange = (e: React.FormEvent<HTMLInputElement>) => handleFieldOnChange(e)

    return (
        <div>
            {answers.map((answer) => (
                <FieldBox
                    key={answer}
                >
                    <input
                        id={answer}
                        value={answer}
                        name="question-field"
                        type={type === 'boolean' ? 'radio' : 'checkbox'}
                        checked={checkedAnswers[answer] || false}
                        onChange={handleInputOnChange}
                    />
                    <label htmlFor={answer}>
                        <StyledTypography>
                            {answer}
                        </StyledTypography>
                    </label>
                </FieldBox>
            ))}
        </div>
    )
}

export default QuestionField
