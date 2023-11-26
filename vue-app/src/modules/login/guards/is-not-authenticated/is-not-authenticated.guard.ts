import {inject} from 'vue'

import AuthenticationService from '@/services/authentication/authentication.service'

export const isNotAuthenticatedGuard = () => {
    const authenticationService = inject<AuthenticationService>(AuthenticationService.SERVICE_NAME)!

    return authenticationService.isAuthenticated() ?
        {path: 'TODO'}
        : true;
}
