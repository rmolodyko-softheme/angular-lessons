import { Component, ElementRef, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { ChatService, Message } from '../services/chat.service';
import { Observable, Subject, merge } from 'rxjs';
import { filter, first, map, switchMap } from 'rxjs/operators';
import { AppState } from '../../app.state';
import { Store } from '@ngrx/store';
import { selectCurrentUser } from '../../user/+state/user.selectors';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss']
})
export class ChatComponent implements OnInit, OnDestroy {
  currentUser: string;
  users: string[] = [];
  messages$: Observable<Message[]>;
  users$: Observable<string[]>;
  chatWith: string;
  updateSubject = new Subject();

  @ViewChild('input') input: ElementRef;
  @ViewChild('chat') chat: ElementRef;

  constructor(
    private store: Store<AppState>,
    public chatService: ChatService
  ) {
  }

  ngOnInit() {
    this.store.select(selectCurrentUser).pipe(filter(username => !!username), first()).subscribe(username => {
      this.currentUser = username;

      if (this.currentUser) {
        this.chatService.init(this.currentUser).subscribe(() => {
          setTimeout(() => {
            this.chat.nativeElement.scrollTo(0, this.chat.nativeElement.scrollHeight);
          });
        });
      }
    });

    this.messages$ = merge(
      this.updateSubject,
      this.chatService.messages$
    ).pipe(
      switchMap(() => this.chatService.messages$.pipe(
        map(messages => messages.filter(message =>
          !this.chatWith || (message.author === this.chatWith))
        )
      ))
    );

    this.users$ = this.chatService.users$.pipe(map(users => users.filter(user => user !== this.currentUser)))
  }

  ngOnDestroy() {
    this.chatService.destroy();
  }

  enter() {
    const value = this.input.nativeElement.value;

    if (value) {
      this.input.nativeElement.value = '';
      this.chatService.sendMessage(value);
    }
  }
}
