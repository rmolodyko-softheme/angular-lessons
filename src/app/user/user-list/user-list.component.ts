import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { User } from '../models/user';
import { UserDataService } from '../services/user-data.service';
import { UserStatusService } from '../services/user-status.service';
import { fromEvent, Subscription } from 'rxjs';
import { debounceTime } from 'rxjs/operators';
import { animate, state, style, transition, trigger } from '@angular/animations';

@Component({
    selector: 'app-user-list',
    templateUrl: './user-list.component.html',
    animations: [
      trigger('openClose', [
        state('selected', style({
          backgroundColor: '#eee',
        })),
        state('not-selected', style({
          backgroundColor: 'white',
        })),
        transition(':enter', [
          style({
            transform: 'translateX(-100%)',
          }),
          animate('1s 0.02s')
        ]),
        transition('not-selected <=> selected', [
          animate('1s')
        ]),
        transition(':leave', [animate('1s', style({
          transform: 'translateX(100%)'
        }))])
      ])
    ],
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit /**, AfterViewInit **/ {
  users: User[] = [];
  selectedUserId: number;
  filterValue = '';
  filterStatus = '';
  isSelected = false;

  @ViewChild('input') input: ElementRef;

  private subscriptions: Subscription[] = [];

  constructor(private userDataService: UserDataService, public userStatusService: UserStatusService) {
  }

  trackByFn(index: number, user: User) {
    return user.id;
  }

  getUserById(id: number) {
    return this.users.find(user => user.id === id);
  }

  filterUsers() {
    return this.users
      .filter(item => this.filterValue ? item.name.toLowerCase().indexOf(this.filterValue.toLowerCase()) !== -1 : item)
      .filter(item => (this.filterStatus !== undefined && this.filterStatus.toString() !== '') ? item.status === +this.filterStatus : item)
      ;
  }

  ngOnInit() {
    this.users = this.userDataService.load();
  }

  ngAfterViewInit() {
    this.subscriptions.push(
      fromEvent(this.input.nativeElement, 'keyup').pipe(debounceTime(2000)).subscribe((event: Event) => {
        this.filterValue = (event.target as HTMLInputElement).value;
      })
    );
  }

  ngOnDestory() {
    this.subscriptions.forEach(subscription => subscription.unsubscribe());
  }
}

