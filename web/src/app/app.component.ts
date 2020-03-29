import { Component } from "@angular/core";
import { ContentService } from "./service/content.service";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  title = "Typing Test";

  constructor(private contentService: ContentService) {}

  getAllContents() {
    this.contentService
      .getAllContents()
      .subscribe(result => console.log(result));
  }
}
