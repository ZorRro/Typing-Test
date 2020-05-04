import { Component, OnInit, Input } from "@angular/core";

@Component({
  selector: "typing-test-thumbnail",
  templateUrl: "./typing-test-thumbnail.component.html",
  styleUrls: ["./typing-test-thumbnail.component.css"],
})
export class TypingTestThumbnailComponent implements OnInit {
  @Input("test") test;
  constructor() {}

  ngOnInit() {}

  minify(data: String) {
    return data.substr(0, data.length >= 65 ? 65 : data.length) + "...";
  }
}
