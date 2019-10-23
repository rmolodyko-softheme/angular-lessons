import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { User } from '../models/user';
import { UserStatusService } from '../services/user-status.service';
import { fromEvent, merge, Observable, Subject, Subscription } from 'rxjs';
import { debounceTime, map, switchMap } from 'rxjs/operators';
import { Store } from '@ngrx/store';
import { selectUser, selectUsers } from '../+state/user.selectors';
import { AppState } from '../../app.state';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit /**, AfterViewInit **/ {
  users$: Observable<User[]>;
  selectedUserId: number;
  filterValue = '';
  filterStatus = '';

  @ViewChild('input') input: ElementRef;

  private filterChangeSubject = new Subject();
  private subscriptions: Subscription[] = [];

  constructor(
    private store: Store<AppState>,
    public userStatusService: UserStatusService,
  ) {
  }

  trackByFn(index: number, user: User) {
    return user.id;
  }

  getUserById(id: number) {
    return this.store.select(selectUser, { id });
  }

  ngOnInit() {
    this.users$ = merge(
      this.filterChangeSubject,
      this.store
    ).pipe(switchMap(() => this.store.select(selectUsers).pipe(map(users => users
        .filter(item => this.filterValue ? item.name.toLowerCase().indexOf(this.filterValue.toLowerCase()) !== -1 : item)
        .filter(item => (this.filterStatus !== undefined && this.filterStatus.toString() !== '') ? item.status === +this.filterStatus : item)
    ))));
  }

  ngAfterViewInit() {
    this.subscriptions.push(
      fromEvent(this.input.nativeElement, 'keyup').pipe(debounceTime(2000)).subscribe((event: Event) => {
        this.filterValue = (event.target as HTMLInputElement).value;
        this.filterChangeSubject.next();
      })
    );
  }

  ngOnDestory() {
    this.subscriptions.forEach(subscription => subscription.unsubscribe());
  }
}

