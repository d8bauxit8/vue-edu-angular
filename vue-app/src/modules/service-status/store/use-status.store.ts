import {defineStore} from 'pinia'

import {API_URL} from '../constants/api.constants'
import type {StatusWebRequestState} from '../interfaces/status-web-request-state.interface'
import type {Status} from '../types/status.type'
import type {Service} from '../interfaces/service.interface'

interface BackendServiceStatus {
    readonly healthStatus: Status;
    readonly updatedAt: string;
}

interface BackendResponseBody {
    readonly services: {
        [key in string]: readonly BackendServiceStatus[];
    }
}

export const useStatusStore = defineStore({
    id: 'status',
    state: (): StatusWebRequestState => ({
        _tag: 'idle'
    }),
    actions: {
        async fetchStatuses() {
            this.$patch({
                _tag: 'loading'
            })

            try {
                const response = await fetch(API_URL)
                const {services}: BackendResponseBody = await response.json()
                this.$patch({
                    _tag: 'result',
                    services: Object.entries(services).map(
                        ([name, {healthStatus}]: [string, BackendServiceStatus]): Service => ({
                            name,
                            status: healthStatus
                        })
                    )
                })
            } catch (error) {
                this.$patch({
                    _tag: 'failed'
                })
            }
        }
    }
})
