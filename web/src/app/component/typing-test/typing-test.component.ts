import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { ContentService } from 'src/app/service/content.service';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';

@Component({
  selector: "app-typing-test",
  templateUrl: "./typing-test.component.html",
  styleUrls: ["./typing-test.component.css"]
})
export class TypingTestComponent implements OnInit {
  public test: any;
  public modifiedContent: SafeHtml
  private state = 'inactive'
  private currentToken = 0;
  constructor(private route: ActivatedRoute, private contentService: ContentService, private sanitizer: DomSanitizer) { }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      let testId = params.get('testId');
      this.contentService.getContent(testId).subscribe(data => this.test = data)
      this.modifiedContent = this.tokenize(this.test.content)

    })
  }

  tokenize(content) {
    let formatted = content.split('').map(t => "<span class='secondary blur'>" + t + "</span>")
    let output = this.sanitizer.bypassSecurityTrustHtml(formatted.join(''));
    return output;
  }

  changeState() {
    this.state = 'active'
    console.log(this.state)
  }




}
