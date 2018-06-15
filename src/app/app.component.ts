import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { Http, Response } from '@angular/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  // helper to store my ip address
  public ipaddress : string;

  // origin url
  private origin : string = 'http://httpbin.org/ip';

  // constructor method
  constructor(private http : Http) {
    // Get data and subscribing
    this.getIpaddress()
        .subscribe(
          resgatedip => this.ipaddress = resgatedip.json().origin
        )
  }

  // [getIpaddress] method 
  getIpaddress() : Observable<Response> {
    return this.http.get(this.origin);
  }
}
