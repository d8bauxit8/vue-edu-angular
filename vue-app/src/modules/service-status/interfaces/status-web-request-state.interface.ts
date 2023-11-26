import type { Service } from './service.interface'

export interface IdleStatus {
  readonly _tag: 'idle';
}

export interface LoadingStatus {
  readonly _tag: 'loading';
}

export interface FailedStatus {
  readonly _tag: 'failed';
}

export interface ResultStatus {
  readonly _tag: 'result';
  readonly services: readonly Service[];
}

export type StatusWebRequestState =
  | IdleStatus
  | LoadingStatus
  | FailedStatus
  | ResultStatus;
