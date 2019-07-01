import { TestBed } from '@angular/core/testing';

import { Logger.Service.TsService } from './logger.service.ts.service';

describe('Logger.Service.TsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: Logger.Service.TsService = TestBed.get(Logger.Service.TsService);
    expect(service).toBeTruthy();
  });
});
