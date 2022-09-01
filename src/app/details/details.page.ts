import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { NavParamsProvider } from '../providers/nav-params/nav-params.provider';

@Component({
  selector: 'app-details',
  templateUrl: 'details.page.html',
  styleUrls: ['./details.page.scss'],
})
export class DetailsPage implements OnInit {

  public product: any;
  public image: string;

  constructor(
    private readonly navController: NavController,
    private readonly navParamsProvider: NavParamsProvider
  ) {}

  ngOnInit() {
    this.product = this.navParamsProvider.params;
    this.image = this.product.photo ? this.product.photo : '/assets/no-image.jpg';
    // this.image = this.product.photo ? 'https://imag.bonviveur.com/paella-mixta.jpg' : '/assets/no-image.jpg'; // IMPORTANTE CARAHO: QUITAR ESTA LINEA
  }

  public goBack(): void {
    this.navController.navigateBack('/home');
  }
}
