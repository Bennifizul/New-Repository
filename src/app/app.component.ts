import { Component } from '@angular/core';
import { Iproduct } from './model/product-interface';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  //title = 'EtransactApp';
product: Iproduct [] =[
  {
    img: "chair.jpg",
    title: "swaverr chair",
    price: 80000,
    promoPrice: 60000,
    rate: 60,
    rating:60,
    percentage: 12
  },

  {
    img: "table.jpg",
    title: "swag desk",
    price: 40000,
    promoPrice: 30000,
    rate: 75,
    rating:75,
    percentage: 20
  },

  {
    img: "lappy.jpg",
    title: "Hp probook",
    price: 15000,
    promoPrice: 12000,
    rate: 80,
    rating:80,
    percentage: 10
  }
]

}
