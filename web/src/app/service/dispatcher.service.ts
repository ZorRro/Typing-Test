import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { shareReplay } from "rxjs/operators";
import { Observable, of } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class DispatcherService {
  private _allTestContent$: Observable<any>;
  private _allTestContent: any[];
  private _testContent$: Observable<any>;
  constructor(private http: HttpClient) { }

  getTestContent(testId: any): Observable<any> {
    let testContent = undefined
    this._allTestContent.forEach((test) => {
      if (test._id === testId)
        testContent = test
    });
    this._testContent$ = of(testContent)
    if (!testContent) {
      this._testContent$ = this.http
        .get(`/api/test/${testId}`).pipe(shareReplay(1));
      this._testContent$.subscribe(data => this._allTestContent.push(data))
    }

    return this._testContent$;
  }

  getAllTestContent(): Observable<any> {
    if (!this._allTestContent$) {
      this._allTestContent$ = this.http
        .get(`/api/all-test`)
        .pipe(shareReplay(1));
    }
    this._allTestContent$.subscribe(data => this._allTestContent = data)
    return this._allTestContent$;
  }
}
