import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  emails = [{ email : "bill@gates.com", import : true, subject: "New Windows", content : "Windows XI will launch in year 2100."},
            { email : "ada@lovalace.com", import : false, subject: "Programming", content : "Windows XI will launch in year 2100."},
            { email : "john@carmac.com", import : true, subject: "New Windows", content : "Windows XI will launch in year 2100."},
            { email : "gabe@newel.com", import : false, subject: "New Windows", content : "Windows XI will launch in year 2100."}]

}
