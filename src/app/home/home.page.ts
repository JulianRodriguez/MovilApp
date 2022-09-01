import { Component} from '@angular/core';
import { AlertController, NavController } from '@ionic/angular';
import { ProductProvider } from '../providers/product-provider/product.provider';
import { NavParamsProvider } from '../providers/nav-params/nav-params.provider';
import { LocalStorageProvider } from '../providers/local-storage/local-storage.provider';
import { BarcodeScanner, BarcodeScannerOptions } from '@ionic-native/barcode-scanner/ngx';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage{

  public scanning = false;
  public products =  [];

  constructor(
    private readonly qrScanner: BarcodeScanner,
    private readonly alertController: AlertController,
    private readonly productProvider: ProductProvider,
    private readonly navParamsProvider: NavParamsProvider,
    private readonly navController: NavController,
    private readonly localStorageProvider: LocalStorageProvider
  ) { }

  ionViewDidEnter() {
    const products = this.localStorageProvider.getItem('products');
    this.products = products ? products : [];
  }

  public scanQR(): void {
    // const options: BarcodeScannerOptions = {
    //   preferFrontCamera: false,
    //   showFlipCameraButton: false,
    //   showTorchButton: false,
    //   torchOn: false,
    //   resultDisplayDuration: 500,
    //   formats: 'QR_CODE, PDF_417',
    //   orientation: 'portrait'
    // };
    // this.qrScanner.scan(options).then(res => {
    //   console.log(res)
    //   const result = res['text'];
    //   if (result && result !== '') {
    //     this.scanning = false;
        this.loadProduct('1');
    //   }
    // }).catch(err => {
    //   this.showModal();
    // });
  }

  public getImage(product): string {
    return product.photo ? product.photo : '/assets/no-image.jpg';
  }

  public openDetail(product: any): void {
    this.navParamsProvider.params = product;
    this.navController.navigateForward('/details');
  }

  public logout(): void {
    this.navController.navigateRoot('login');
  }

  private async showModal() {
    const alert = await this.alertController.create({
      header: '¡Error!',
      message: 'Ha ocurrido un error al escanear el código QR, por favor, inténtalo de nuevo',
      buttons: [
        {
          text: 'Rechazar',
          role: 'cancel',
          cssClass: 'secondary',
          handler: () => {
            alert.dismiss();
          }
        }, {
          text: 'Aceptar',
          handler: () => {
            alert.dismiss();
          }
        }
      ]
    });

    alert.present();
  }

  private loadProduct(code: string): void {
    this.productProvider.loadProduct(code)
      .subscribe((product: any) => {
        console.log(product)
        this.navParamsProvider.params = product;
        this.setItemInMemory(product);
        this.navController.navigateForward('/details');
      });
  }


  private setItemInMemory(product: any): void {
    const elementExists = this.products.find((productElement: any) => productElement.idProduct === product.idProduct);
    if (!elementExists) {
      this.products.push(product);
      this.localStorageProvider.setItem('products', this.products);
    }
  }

}
