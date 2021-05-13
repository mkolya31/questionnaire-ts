import { isEqual, sum, toArray } from 'lodash'

import { IOpentbdQuestion, IQuestionAnswer } from '../../../utils/types/interfaces'

interface ITotalItem {
    amount: number,
    correctly: number
}

interface ITotal {
    easy?: ITotalItem,
    medium?: ITotalItem,
    hard?: ITotalItem
}

// eslint-disable-next-line max-len
const calcTotal = (questions: Array<IOpentbdQuestion>, answers: Array<IQuestionAnswer>): ITotal => questions.reduce((acc: ITotal, question: IOpentbdQuestion, i: number) => {
    // eslint-disable-next-line camelcase
    const { difficulty, correct_answer } = question

    return {
        ...acc,
        [difficulty]: {
            amount: sum([acc[difficulty]?.amount, 1]),
            // eslint-disable-next-line camelcase
            correctly: sum([acc[difficulty]?.correctly || 0, isEqual([correct_answer], Object.keys(answers[i]))])
        }
    }
}, {})

// eslint-disable-next-line max-len
const calcTCorrectlyTotal = (total: ITotal):number => toArray(total).reduce((acc, item) => sum([item?.correctly, acc]), 0)

export {
    calcTotal,
    calcTCorrectlyTotal
}
