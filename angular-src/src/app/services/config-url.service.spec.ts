/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { ConfigUrlService } from './config-url.service';

describe('ConfigUrlService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ConfigUrlService]
    });
  });

  it('should ...', inject([ConfigUrlService], (service: ConfigUrlService) => {
    expect(service).toBeTruthy();
  }));
});
