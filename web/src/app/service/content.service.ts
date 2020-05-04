import { Injectable } from "@angular/core";
import { DispatcherService } from "./dispatcher.service";

@Injectable({
  providedIn: "root",
})
export class ContentService {
  constructor(private dataDispatcher: DispatcherService) {}

  getContent(testId: any) {
    return this.dataDispatcher.getTestContent(testId);
  }

  public getAllContents() {
    return this.dataDispatcher.getAllTestContent();
  }
}
