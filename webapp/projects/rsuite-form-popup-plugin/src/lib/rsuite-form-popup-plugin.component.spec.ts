import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RsuiteFormPopupPluginComponent } from './rsuite-form-popup-plugin.component';

describe('RsuiteFormPopupPluginComponent', () => {
  let component: RsuiteFormPopupPluginComponent;
  let fixture: ComponentFixture<RsuiteFormPopupPluginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RsuiteFormPopupPluginComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RsuiteFormPopupPluginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
