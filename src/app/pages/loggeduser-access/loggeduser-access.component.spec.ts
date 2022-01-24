import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoggeduserAccessComponent } from './loggeduser-access.component';

describe('LoggeduserAccessComponent', () => {
  let component: LoggeduserAccessComponent;
  let fixture: ComponentFixture<LoggeduserAccessComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoggeduserAccessComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LoggeduserAccessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
