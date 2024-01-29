import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {FeatherModule} from 'angular-feather';
import {allIcons} from 'angular-feather/icons';
import {FormsModule} from '@angular/forms'

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {FullComponent} from './layouts/full/full.component';
import {DemoFlexyModule} from './demo-flexy-module'

// Modules
import {DashboardModule} from './dashboard/dashboard.module';
import {ComponentsModule} from './components/components.module';
import {HttpClientModule} from '@angular/common/http';
import {NgOptimizedImage} from "@angular/common";
import {HotToastModule} from '@ngneat/hot-toast';
import { NgxDocViewerModule } from 'ngx-doc-viewer';
import { OAuthModule } from 'angular-oauth2-oidc';
import { AdolescentFormComponent } from './programs/adolescent-form/adolescent-form.component';
import { AdolescentListComponent } from './programs/adolescent-list/adolescent-list.component';
import { ModalComponent } from './programs/modal/modal.component';
import { TransDistComponent } from './programs/trans-dist/trans-dist.component';
import { BulkComponent } from './programs/bulk/component/bulk/bulk.component';

@NgModule({
  declarations: [
    AppComponent,
    FullComponent,
    AdolescentFormComponent,
    AdolescentListComponent,
    ModalComponent,
    TransDistComponent,
    BulkComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FeatherModule.pick(allIcons),
    DemoFlexyModule,
    DashboardModule,
    ComponentsModule,
    FormsModule,
    HttpClientModule,
    NgOptimizedImage,
    HotToastModule.forRoot(),
    NgxDocViewerModule,
    OAuthModule.forRoot(
      {
        resourceServer: {
          allowedUrls: ['http://localhost:9000'],
          sendAccessToken: true
        }
      }
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
