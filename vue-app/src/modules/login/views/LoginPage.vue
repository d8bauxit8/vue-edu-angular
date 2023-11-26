<template>
  <div class="flex justify-center">
    <form class="bg-white flex flex-col p-2 w-96 shadow-2xl" @submit.prevent="onFormSubmit">
      <label for="email" class="p-2 text-left">Email address</label>
      <input type="email" class="border-2 p-4" v-model="form.email" @blur="vaildation$.email.$touch" />

      <p
        v-if="vaildation$.email.$dirty && vaildation$.email.$errors.length > 0"
        class="mt-1 text-right text-red"
        data-id="email-error-message"
      >
          {{
          vaildation$.email.$errors[0].$validator === 'required'
              ? 'Please enter your e-mail address'
              : 'Please enter a valid e-mail address'
          }}
      </p>

      <label for="password" class="p-2 text-left">Password</label>
      <input type="password" class="border-2 p-4" v-model="vaildation$.password.$model" />

      <p
        v-if="vaildation$.password.$dirty && vaildation$.password.$errors.length > 0"
        class="mt-1 text-right text-red"
        data-id="password-error-message"
      >
        Please enter your password
      </p>

      <button type="submit" class="bg-green mt-4 p-4 color-white font-medium uppercase">
        Log in
      </button>
    </form>
  </div>
</template>

<script lang="ts" setup>
import useVuelidate from '@vuelidate/core'
import { required, email } from '@vuelidate/validators'
import { inject, reactive } from 'vue'
import { useMeta } from 'vue-meta'

import AuthenticationService from '@/services/authentication/authentication.service'

const form = reactive({
  email: '',
  password: ''
})

const rules = {
  email: {
    required,
    email
  },
  password: {
    required
  }
}

const vaildation$ = useVuelidate(rules, form)

useMeta({
  title: 'Login page'
})

const authenticationService = inject<AuthenticationService>(AuthenticationService.SERVICE_NAME)!

const onFormSubmit = () => {
  vaildation$.value.$touch()

  if (vaildation$.value.$invalid) {
    return
  }

  authenticationService.login()
}
</script>
