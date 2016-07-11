import { Observable } from 'data/observable';

export class HelloWorldModel extends Observable {
  public message: string;

  constructor() {
    super();
  }

  public tapEvent() {
    alert('Tap Event Works too');
  }

}