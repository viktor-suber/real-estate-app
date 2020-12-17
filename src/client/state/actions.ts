export enum ActionType {}

export type Action = {
  type: ActionType;
  payload?: any;
};