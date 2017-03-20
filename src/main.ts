
// NOTE: Load Zone.js early, immediately after the other ES6 and metadata shims.
import 'core-js/es6';
import 'core-js/es7/reflect';

import 'rxjs/Rx';

require('zone.js/dist/zone');

// Production environment.
if (application.env.ENV !== 'production' && application.env.ENV !== 'staging') {
  Error['stackTraceLimit'] = Infinity;
  require('zone.js/dist/long-stack-trace-zone');
}

import '../theme/theme.global.scss';

// Application bootstrap.
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { enableProdMode } from '@angular/core';

import { AppModule } from './bootstrap/app.module';

// Enables production mode for Angular 2
// The environment variable is set by Webpack at compile time
if (application.env.ENV === 'production' || application.env.ENV === 'staging') {
    enableProdMode();
}

platformBrowserDynamic().bootstrapModule(AppModule);
