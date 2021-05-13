import { createAsyncThunk } from '@reduxjs/toolkit'

import { OPENTDB_API } from '../api/opentdb'
import { IOpentbdQuestion } from '../../utils/types/interfaces'

export const fetchQuestions = createAsyncThunk('questionnaire/questions', async (amount: number) => {
    let response
    try {
        response = await OPENTDB_API.api(amount)
    } catch (e) {
        // eslint-disable-next-line no-console
        console.error('Error while fetching questions', e)
    }
    return response?.data?.results as Array<IOpentbdQuestion>
})
