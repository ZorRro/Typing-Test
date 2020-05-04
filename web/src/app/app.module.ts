import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { APIInterceptor } from "./interceptor/api-interceptor";
import { HTTP_INTERCEPTORS, HttpClientModule } from "@angular/common/http";
import { TypingTestComponent } from "./component/typing-test/typing-test.component";
import { RouterModule } from "@angular/router";
import { HeaderComponentComponent } from "./component/header-component/header-component.component";
import { FooterComponentComponent } from "./component/footer-component/footer-component.component";
import { AppDescriptionComponent } from "./component/app-description/app-description.component";
import { TypingTestThumbnailComponent } from "./component/typing-test-thumbnail/typing-test-thumbnail.component";
import { DispatcherService } from "./service/dispatcher.service";
import { HomeComponent } from './component/home/home.component';
import { TypeActionDirective } from './directive/type-action.directive';

@NgModule({
  declarations: [
    AppComponent,
    TypingTestComponent,
    HeaderComponentComponent,
    FooterComponentComponent,
    AppDescriptionComponent,
    TypingTestThumbnailComponent,
    HomeComponent,
    TypeActionDirective,
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule, RouterModule],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: APIInterceptor,
      multi: true,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule { }
