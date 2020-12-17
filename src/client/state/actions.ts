export enum ActionTypes {
  HOMES_LOADING = 'HOMES_LOADING',
  HOMES_LOADED = 'HOMES_LOADED',
  HOMES_LOAD_ERROR = 'HOMES_LOAD_ERROR'
}

export type Action = {
  type: ActionTypes;
  payload?: any;
};