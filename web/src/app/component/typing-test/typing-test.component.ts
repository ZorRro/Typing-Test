import { Component, OnInit, Output, Input } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { ContentService } from 'src/app/service/content.service';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { EventEmitter } from 'protractor';

@Component({
  selector: "app-typing-test",
  templateUrl: "./typing-test.component.html",
  styleUrls: ["./typing-test.component.css"]
})
export class TypingTestComponent implements OnInit {
  public test: any;
  public initialContent: string
  public actualContent: string
  public outputContent: string
  private currentIndex = -1;
  private formattedContent = ""



  constructor(private route: ActivatedRoute, private contentService: ContentService, private sanitizer: DomSanitizer) { }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      let testId = params.get('testId');
      this.contentService.getContent(testId).subscribe(data => this.test = data)
      this.actualContent = this.test.content
      this.initialContent = this.initial(this.actualContent)
      this.outputContent = this.initialContent;
    })
  }

  /* tokenize(content) {
    let formatted = content.split('').map(t => "<span class='secondary blur'>" + t + "</span>")
    let output = this.sanitizer.bypassSecurityTrustHtml(formatted.join(''));
    return output;
  } */

  sanitize(content): SafeHtml {
    return this.sanitizer.bypassSecurityTrustHtml(content);
  }

  initial(content) {
    return "<span class='text-secondary blur'>" + content + "</span>"
  }

  correct(content) {
    return "<span class='text-dark'>" + content + '</span>'
  }


  incorrect(content) {
    return "<span class='text-danger'>" + content + '</span>'
  }


  skipped(content) {
    return "<span class='text-warning'>" + content + '</span>'
  }


  reRenderContent($event) {
    let partial = "", output = "";

    this.currentIndex++;
    let suffix = this.initial(this.actualContent.substring(this.currentIndex + 1))
    let prefix = this.currentIndex === 0 ? '' : this.formattedContent
    if (this.actualContent.charCodeAt(this.currentIndex) === $event.key.charCodeAt(0)) {
      partial = this.correct(this.actualContent.substr(this.currentIndex, 1))
    } else {
      partial = this.incorrect(this.actualContent.substr(this.currentIndex, 1))
    }
    this.formattedContent = prefix + partial;
    output = prefix + partial + suffix
    this.outputContent = output
  }


}
