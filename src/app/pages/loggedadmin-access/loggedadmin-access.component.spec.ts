import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoggedadminAccessComponent } from './loggedadmin-access.component';

describe('LoggedadminAccessComponent', () => {
  let component: LoggedadminAccessComponent;
  let fixture: ComponentFixture<LoggedadminAccessComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoggedadminAccessComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LoggedadminAccessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
