export enum ActionTypes {
  HOMES_LOADED = 'HOMES_LOADED'
}

export type Action = {
  type: ActionTypes;
  payload?: any;
};