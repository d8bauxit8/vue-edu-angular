import {inject} from 'vue'

import {SERVICE_STATUS_PATH} from '@/modules/service-status/constants/route.constants'
import AuthenticationService from '@/services/authentication/authentication.service'

export const isNotAuthenticatedGuard = () => {
    const authenticationService = inject<AuthenticationService>(AuthenticationService.SERVICE_NAME)!

    return authenticationService.isAuthenticated() ?
        {path: SERVICE_STATUS_PATH}
        : true;
}
