import { createSlice } from '@reduxjs/toolkit'

import { IOpentbdQuestion, IQuestionAnswer } from '../../utils/types/interfaces'
import { fetchQuestions } from '../actions/questions'

interface IQuestionnaireState {
    questions: Array<IOpentbdQuestion>,
    answers: Array<IQuestionAnswer>,
    isPending: boolean,
    isError: boolean
}

const initialState: IQuestionnaireState = {
    questions: [],
    answers: [],
    isPending: true,
    isError: false
}

const questionnaireSlice = createSlice({
    name: 'questionnaire',
    initialState,
    reducers: {
        setAnswers: (state, action) => {
            state.answers = action.payload
            state.isPending = false
            state.isError = false
        },
        addAnswer: (state, action) => {
            state.answers = [...state.answers, action.payload]
            state.isPending = false
            state.isError = false
        },
        resetState: (state) => {
            state.questions = []
            state.answers = []
            state.isPending = true
            state.isError = false
        }
    },
    extraReducers: (builder) => {
        builder.addCase(fetchQuestions.pending, (state) => {
            state.isPending = true
            state.isError = false
        })
        builder.addCase(fetchQuestions.fulfilled, (state, action) => {
            state.questions = action.payload
            state.isPending = false
            state.isError = false
        })
        builder.addCase(fetchQuestions.rejected, (state) => {
            state.isPending = false
            state.isError = true
        })
    }
})

export const {
    setAnswers,
    addAnswer,
    resetState
} = questionnaireSlice.actions

export default questionnaireSlice.reducer
