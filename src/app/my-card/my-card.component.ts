import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-my-card',
  templateUrl: './my-card.component.html',
  styleUrls: ['./my-card.component.css']
})
export class MyCardComponent implements OnInit {
@Input () title :string ='';
@Input () img :string='';
@Input () price :string='';
@Input () promoPrice :string='';
@Input () rate :string='';
@Input () rating :string= '';
@Input () percentage :string=''

  constructor() { }

  ngOnInit(): void {
  }

}
