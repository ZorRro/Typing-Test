import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: "root"
})
export class ContentService {
  constructor(private http: HttpClient) {}

  public getAllContents() {
    return this.http.get("/api/all-test");
  }
}
