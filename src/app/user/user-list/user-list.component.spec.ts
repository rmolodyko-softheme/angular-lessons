import 'zone.js/dist/zone-patch-rxjs-fake-async';

import { async, ComponentFixture, fakeAsync, TestBed, tick } from '@angular/core/testing';
import { UserDataService } from '../../user/services/user-data.service';
import { By } from '@angular/platform-browser';
import { UserListComponent } from './user-list.component';
import { UserStatusService } from '../services/user-status.service';
import { PrefixNamePipe } from '../prefix-name/prefix-name.pipe';
import { BadgeTextPipe } from '../badge-text/badge-text.pipe';
import { BadgeComponent } from '../badge-component/badge.component';
import { User, UserStatus } from '../models/user';

describe('UserListComponent', () => {
  let component: UserListComponent;
  let fixture: ComponentFixture<UserListComponent>;
  let userDataServiceSpy = jasmine.createSpyObj('UserDataService', ['load']);
  userDataServiceSpy.load.and.returnValue([{
    name: 'Ruslan',
    isVisible: true,
    status: UserStatus.Active
  }, {
    name: 'Roman',
    isVisible: true,
    status: UserStatus.Disabled
  }] as User[]);

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [UserListComponent, PrefixNamePipe, BadgeTextPipe, BadgeComponent],
      providers: [{ provide: UserDataService, useValue: userDataServiceSpy}, UserStatusService],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('Should be able to filter users by input', fakeAsync(() => {
    expect(fixture.componentInstance.users.length).toBe(2);
    const input = fixture.debugElement.query(By.css('input'));
    input.nativeElement.value = 'Ru';
    input.nativeElement.dispatchEvent(new Event('keyup'));

    tick(2000);

    fixture.detectChanges();

    const list = fixture.debugElement.queryAll(By.css('span[class="item-name"]'));
    expect(list.length).toBe(1);
    expect(list[0].nativeElement.innerText).toMatch('Ruslan');
  }));
});
