import { Component } from '@angular/core';
import { CoinService } from './service/coin.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Virtual Wallet';
  coins: any = [];

  constructor(private coinsService: CoinService) {
  }

  ngOnInit(): void {
    this.getCoinsData();
    window.setInterval(this.getCoinsData.bind(this), 40000);
  }

  getCoinsData() {
    this.coinsService.getCoins().subscribe((response) => {
      this.coins = response;
    })
  }
}
