import { async, TestBed } from '@angular/core/testing';
import { UserDataService } from './user-data.service';
import { UserStatus } from '../models/user';

describe('UserListComponent', () => {
  let service: UserDataService;
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      providers: [UserDataService]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    service = TestBed.get(UserDataService);
  });

  it('should create', () => {
    expect(service).toBeTruthy();
  });

  it('should create', () => {
    expect(service.load().length).toBe(5);
    service.add('Kolya', UserStatus.Disabled);
    const list = service.load();
    expect(list.length).toBe(6);

    expect(list[list.length - 1].name).toEqual('Kolya');
  });
});
