import { inject } from 'vue'

import { LOGIN_PATH } from '@/modules/login/constants/route.constants'
import AuthenticationService from '@/services/authentication/authentication.service'

export const isAuthenticatedGuard = () => {
  const authenticationService = inject<AuthenticationService>(AuthenticationService.SERVICE_NAME)!

  return authenticationService.isAuthenticated() ?
      true:
      {path: LOGIN_PATH};
}
