export enum ActionTypes {
  HOMES_LOADING = 'HOMES_LOADING',
  HOMES_LOADED = 'HOMES_LOADED'
}

export type Action = {
  type: ActionTypes;
  payload?: any;
};