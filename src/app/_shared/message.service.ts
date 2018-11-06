import { Injectable } from "@angular/core";
import { Subject } from "rxjs";
import { Observable, of } from 'rxjs';



@Injectable()
export class MessageService1 {
  private message = new Subject<any>();
  constructor() { }
  sendMessage(message: string, type = 1) {
    this.message.next({text: message, type: type});
  }
  getMessage(): Observable<any> {
    return this.message.asObservable();
  }
  clearMessage() {
    this.message.next();
}

}
