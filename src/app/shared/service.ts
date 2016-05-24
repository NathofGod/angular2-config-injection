import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { Inject, EventEmitter }   from '@angular/core';

import { APP_CONFIG, IConfig } from './config';

@Injectable()
export class MyService {

    param: string;

    constructor(@Inject(APP_CONFIG) private config: IConfig) {

        this.param = config.param;

    }
}