import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SwiftGridComponent } from './swift-grid.component';

describe('SwiftGridComponent', () => {
  let component: SwiftGridComponent;
  let fixture: ComponentFixture<SwiftGridComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SwiftGridComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SwiftGridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
