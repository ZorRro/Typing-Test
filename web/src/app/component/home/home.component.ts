import { Component, OnInit } from "@angular/core";
import { ContentService } from "src/app/service/content.service";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.css"],
})
export class HomeComponent implements OnInit {
  constructor(private contentService: ContentService) { }
  tests: any;
  ngOnInit() {
    this.getAllContents();
  }

  getAllContents() {
    this.contentService.getAllContents().subscribe((result) => {
      this.tests = result;
    });
  }
}
