import { BehaviorSubject, Observable } from 'rxjs';
import { filter, switchMap, tap } from 'rxjs/operators';
import { Injectable } from '@angular/core';

export interface Message {
  time: Date;
  text: string;
  author: string;
  color: string;
}

@Injectable({
  providedIn: 'root'
})
export class ChatService {
  get messages$() {
    return this.messagesSubject.asObservable();
  }

  get users$() {
    return this.usersSubject.asObservable();
  }

  private usersSubject = new BehaviorSubject<string[]>([]);
  private messagesSubject = new BehaviorSubject<Message[]>([]);

  private ready = new BehaviorSubject<boolean>(false);
  private connection;

  init(userName: string) {
    this.connection = new (window as any).WebSocket('ws://127.0.0.1:1337');
    this.connection.onopen = () => this.ready.next(true);

    return this.ready.pipe(
      filter(isReady => isReady),
      tap(() => this.connection.send(userName)),
      switchMap(() => new Observable<MessageEvent>(observer => {
        this.connection.onmessage = (event) => observer.next(event);
      })),
      tap(message => {
        try {
          const data = JSON.parse(message.data);
          const list = this.messagesSubject.value.slice();
          if (data.type === 'users') {
            this.usersSubject.next(data.data);
          } else if (data.type === 'history') {
            list.push(...data.data.map(data => ({ ...data, time: new Date(data.time) })));
            this.messagesSubject.next(list);
          } else if (data.type === 'message') {
            list.push(({ ...data.data, time: new Date(data.data.time) }));
            this.messagesSubject.next(list);
          }
        } catch(e) {}
      })
    );
  }

  sendMessage(message: string) {
    this.connection.send(message);
  }

  destroy() {
    if (this.connection) {
      this.connection.close();
    }
    this.connection = null;
    this.ready.next(false);
  }
}
