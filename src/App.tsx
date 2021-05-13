import React, { FC, useState } from 'react'
import styled from 'styled-components'
import { HashRouter as Router, Switch, Route } from 'react-router-dom'

import Welcome from './components/welcome/welcome'
import { APP_STAGES_ROUTES } from './utils/types/enums'
import Questionnaire from './components/questionnaire/questionnaire'
import Summary from './components/summary/summary'

const AppContainer = styled.div`
  width: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: ${(props) => props.theme.colors.teal};
`

const App: FC = () => {
    const [questionsAmount, setQuestionsAmount] = useState<number>(10)

    return (
        <AppContainer>
            <Router>
                <Switch>
                    <Route exact path={APP_STAGES_ROUTES.WELCOME}>
                        <Welcome />
                    </Route>
                    <Route path={APP_STAGES_ROUTES.QUESTIONNAIRE}>
                        <Questionnaire amount={questionsAmount} />
                    </Route>
                    <Route path={APP_STAGES_ROUTES.SUMMARY}>
                        <Summary amount={questionsAmount} />
                    </Route>
                </Switch>
            </Router>
        </AppContainer>
    )
}

export default App
