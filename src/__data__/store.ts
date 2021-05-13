import { combineReducers, configureStore } from '@reduxjs/toolkit'

import questionnaireReducer from './reducers/questionnaire'

const reducers = combineReducers({
    questionnaire: questionnaireReducer
})

export const store = configureStore({
    reducer: reducers,
    devTools: process.env.NODE_ENV !== 'production',
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
