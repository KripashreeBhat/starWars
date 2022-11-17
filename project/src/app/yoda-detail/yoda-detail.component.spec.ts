import { ComponentFixture, TestBed } from '@angular/core/testing';

import { YodaDetailComponent } from './yoda-detail.component';

describe('YodaDetailComponent', () => {
  let component: YodaDetailComponent;
  let fixture: ComponentFixture<YodaDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ YodaDetailComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(YodaDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
