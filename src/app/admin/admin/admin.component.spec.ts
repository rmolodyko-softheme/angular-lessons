import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { AdminComponent } from './admin.component';
import { UserDataService } from '../../user/services/user-data.service';
import { By } from '@angular/platform-browser';

describe('AdminComponent', () => {
  let component: AdminComponent;
  let fixture: ComponentFixture<AdminComponent>;
  let userDataServiceSpy = jasmine.createSpyObj('UserDataService', ['add']);

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [AdminComponent],
      providers: [{ provide: UserDataService, useValue: userDataServiceSpy}]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('Should be able to add a user', () => {
    const input = fixture.debugElement.query(By.css('input'));
    input.nativeElement.value = 'Kolya';

    const select = fixture.debugElement.query(By.css('select'));
    select.nativeElement.value = '1';

    const addButton = fixture.debugElement.query(By.css('button#add'));
    addButton.nativeElement.click();

    expect(userDataServiceSpy.add).toHaveBeenCalledWith('Kolya', 1);
  });
});
