import { TestBed } from '@angular/core/testing';

import { RsuiteFormPopupPluginService } from './rsuite-form-popup-plugin.service';

describe('RsuiteFormPopupPluginService', () => {
  let service: RsuiteFormPopupPluginService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RsuiteFormPopupPluginService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
