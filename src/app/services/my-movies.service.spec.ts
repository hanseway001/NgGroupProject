import { TestBed } from '@angular/core/testing';

import { MyMoviesService } from './my-movies.service';

describe('MyMoviesService', () => {
  let service: MyMoviesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MyMoviesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
