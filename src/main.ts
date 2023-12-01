//main.tsはアプリを起動するためのスタートアップコード app.module.tsを読み込み、bootstrapModuleで起動→app.module.tsへ
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';

//起動するモジュールを設定する
platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
