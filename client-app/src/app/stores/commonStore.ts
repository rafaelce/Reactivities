import { makeAutoObservable } from "mobx";
import { ServerError } from "../models/serverError";

export default class CommonStore {
  error: ServerError | null = null;
  _token: string | null = null;
  _appLoaded = false;

  constructor() {
    makeAutoObservable(this);
  }

  setServerError = (error: ServerError) => {
    this.error = error;
  };

  setToken = (token: string | null) => {
    if (token) window.localStorage.setItem("jwt", token);
    this._token = token;
  };

  setAppLoaded = () => {
    this._appLoaded = true;
  };
}
