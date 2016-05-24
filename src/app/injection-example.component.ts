import {
  Component,
  Inject,
  provide
} from '@angular/core';

import { IConfig, APP_CONFIG, MyService } from './shared';


export const CONFIG: IConfig = {
  param: 'some-key',
};

@Component({
  moduleId: module.id,
  selector: 'injection-example-app',
  template: `
    <h1>Config Example</h1>
    <p>A simple example of global injectable configuration variables</p>
    param {{ param }}
  `,
  providers: [
    MyService,
    provide(APP_CONFIG, { useValue: CONFIG })
  ]
})
export class InjectionExampleAppComponent {

  param: string;
  
  constructor(service: MyService) {
    this.param = service.param;
  }
}
