import { Component, OnInit } from "@angular/core";
import { ContentService } from "./service/content.service";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})
export class AppComponent implements OnInit {
  title = "Typing Test";
  constructor() {}

  ngOnInit(): void {}
}
