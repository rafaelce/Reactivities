import { makeAutoObservable, observable } from "mobx";

export default class ActivityStore {
  title = "Hello from Mobx";

  constructor() {
    makeAutoObservable(this, {
      title: observable,
    });
  }
}
