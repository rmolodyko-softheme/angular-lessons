import { Component, ElementRef, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { ChatService, Message } from '../services/chat.service';
import { UserService } from '../../user/services/user.service';
import { Observable, Subject, merge } from 'rxjs';
import { map, switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss']
})
export class ChatComponent implements OnInit, OnDestroy {
  currentUser: string;
  messages$: Observable<Message[]>;
  chatWith: string;
  updateSubject = new Subject();

  @ViewChild('input') input: ElementRef;
  @ViewChild('chat') chat: ElementRef;

  constructor(
    private userService: UserService,
    public chatService: ChatService
  ) {
  }

  ngOnInit() {
    this.currentUser = this.userService.getUser();

    if (this.currentUser) {
      this.chatService.init(this.currentUser).subscribe(() => {
        setTimeout(() => {
          this.chat.nativeElement.scrollTo(0, this.chat.nativeElement.scrollHeight);
        });
      });
    }

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
