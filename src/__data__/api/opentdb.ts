import { AxiosResponse } from 'axios'

import axiosBackend from '../axios'
import { IOpentbdQuestion } from '../../utils/types/interfaces'

interface IApiResponse {
    results: Array<IOpentbdQuestion>
}

interface IOpentdbApi {
    api: (amount: number) => Promise<AxiosResponse<IApiResponse>>
}

const OPENTDB_API: IOpentdbApi = {
    api: (amount) => axiosBackend.get<IApiResponse>(`api.php?amount=${amount}`)
}

export {
    OPENTDB_API
}
