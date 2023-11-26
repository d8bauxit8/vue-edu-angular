import type { Status } from '../types/status.type'

export interface Service {
  readonly name: string
  readonly status: Status
}
