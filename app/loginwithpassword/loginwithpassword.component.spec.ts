import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginwithpasswordComponent } from './loginwithpassword.component';

describe('LoginwithpasswordComponent', () => {
  let component: LoginwithpasswordComponent;
  let fixture: ComponentFixture<LoginwithpasswordComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoginwithpasswordComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginwithpasswordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
