import {
  beforeEachProviders,
  describe,
  expect,
  it,
  inject
} from '@angular/core/testing';
import { InjectionExampleAppComponent } from '../app/injection-example.component';

beforeEachProviders(() => [InjectionExampleAppComponent]);

describe('App: InjectionExample', () => {
  it('should create the app',
      inject([InjectionExampleAppComponent], (app: InjectionExampleAppComponent) => {
    expect(app).toBeTruthy();
  }));

  it('should have as title \'injection-example works!\'',
      inject([InjectionExampleAppComponent], (app: InjectionExampleAppComponent) => {
    expect(app.title).toEqual('injection-example works!');
  }));
});
