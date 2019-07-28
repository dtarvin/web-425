import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  template: `
    <div class="container">

        <h1>Frank's Waffle and TV Outlet</h1><br/>
        <h2>The finest from the Waffle King himself!!!</h2><br/>
        <p>All prices subject to change</p>

    </div>
  `,
  styles: [
    `
      .container {
        text-align: center;
      }
      h1, h2 {
        color: red;
      }
      h1 {
        margin-top: 30px;
      }
      h2 {
        padding: 30px 0;
      }
      p {
        font-style: italic;
        border: 1px solid black;
      }
    `
  ]
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
