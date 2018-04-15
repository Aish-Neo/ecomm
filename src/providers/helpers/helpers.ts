import {Injectable} from "@angular/core";
import {CookieService} from "ngx-cookie-service";

@Injectable()
export class Helpers {
  cookieVal: any;
  constructor(public cookieService: CookieService) {}
  setCookie(key, value) {
    this.cookieService.set(key, JSON.stringify(value));
  }

  getCookie(key) {
    this.cookieVal = this.cookieService.get(key);
    return JSON.parse(this.cookieVal);
  }

  checkCookieExistOrNot(key) {
    const cookieExists: boolean = this.cookieService.check(key);
    return cookieExists;
  }
  getAllcookieService() {
    return this.cookieService.getAll();
  }

  deleteAllcookieService() {
    this.cookieService.deleteAll();
  }

  deleteCookieByName(key) {
    this.cookieService.delete(key);
  }
}
