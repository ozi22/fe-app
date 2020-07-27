import { ThunkAction } from 'redux-thunk';

export interface IAction<Payload = any, Opt = any> {
  type: string;
  payload: Payload;
  opt?: Opt;
}

export type ThunkResult<R> = ThunkAction<R, any, undefined, any>;
