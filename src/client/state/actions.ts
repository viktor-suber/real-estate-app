export enum ActionTypes {
  HOMES_LOADING = "HOMES_LOADING",
  HOMES_LOADED = "HOMES_LOADED",
  HOMES_LOAD_ERROR = "HOMES_LOAD_ERROR",
  FILTER_HOMES = "FILTER_HOMES",
}

export type Action = {
  type: ActionTypes;
  payload?: any;
};
