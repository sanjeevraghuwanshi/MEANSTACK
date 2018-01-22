import { DefaultPipe } from './default.pipe';

describe('DefaultPipe', () => {
  let pipe: DefaultPipe;

  beforeEach(() => {
    pipe = new DefaultPipe();
  });
  it('create an instance', () => {
    const pipe = new DefaultPipe();
    expect(pipe).toBeTruthy();
  });

  it('should return value when value provided', () => {
    expect(pipe.transform('http://www.google.com', 'fallback')).toBe('http://www.google.com');
  });


  it('should return fallback value when fallback value provided', () => {
    expect(pipe.transform('', 'http://www.google.com')).toBe('http://www.google.com');
  });

  it('should return https when asking for https', () => {
    expect(pipe.transform('http://www.google.com', 'fallback', true)).toBe('https://www.google.com');
  });

});
