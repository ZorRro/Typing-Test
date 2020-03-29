import { Injectable } from "@angular/core";
import {
  HttpInterceptor,
  HttpRequest,
  HttpHandler,
  HttpEvent
} from "@angular/common/http";
import { Observable } from "rxjs";

@Injectable()
export class APIInterceptor implements HttpInterceptor {
  private baseURL: String = "http://localhost:4010";

  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    let reqClone = req.clone({
      url: `${this.baseURL}${req.url}`
    });
    return next.handle(reqClone);
  }
}
