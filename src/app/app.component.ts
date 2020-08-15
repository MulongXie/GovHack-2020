import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  //inline template
  //template: `<h1>{{title}}</h1>`,
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'conFusion';
}
