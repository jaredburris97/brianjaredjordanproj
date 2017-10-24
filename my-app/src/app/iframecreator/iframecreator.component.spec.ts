import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IframecreatorComponent } from './iframecreator.component';

describe('IframecreatorComponent', () => {
  let component: IframecreatorComponent;
  let fixture: ComponentFixture<IframecreatorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IframecreatorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IframecreatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
