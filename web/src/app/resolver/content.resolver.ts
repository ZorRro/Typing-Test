import {
  RouterState,
  Resolve,
  ActivatedRouteSnapshot,
  RouterStateSnapshot
} from "@angular/router";
import { ContentService } from "../service/content.service";
import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root"
})
export class ContentResolver implements Resolve<any> {
  constructor(private contentService: ContentService) {}
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    return this.contentService.getContent(route.paramMap.get("testId"));
  }
}
