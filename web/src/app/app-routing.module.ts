import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { TypingTestComponent } from "./component/typing-test/typing-test.component";
import { ContentResolver } from "./resolver/content.resolver";
import { HomeComponent } from "./component/home/home.component";

const routes: Routes = [
  {
    path: "test/:testId",
    component: TypingTestComponent,
    resolve: { test: ContentResolver },
  },
  {
    path: "home",
    component: HomeComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
