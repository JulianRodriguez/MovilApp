/* import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { TestBed, async } from '@angular/core/testing';
import { TestSharedModule } from '../tests-shared/test-shared-module';
import { LocalStorageProvider } from '../providers/local-storage/local-storage.provider';
import { of } from 'rxjs';
import { NavController, AlertController } from '@ionic/angular';
import { ProductProvider } from '../providers/product-provider/product.provider';

describe('HomePage', () => {
  let fixture: any;
  let component: HomePage;
  let localStorageProvider: LocalStorageProvider;
  let navController: NavController;
  let productProvider: ProductProvider;
  let alertController: AlertController;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [HomePage],
      imports: [],
      providers: [],
      schemas: [CUSTOM_ELEMENTS_SCHEMA]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomePage);
    component = fixture.componentInstance;
    localStorageProvider = TestBed.get(LocalStorageProvider);
    navController = TestBed.get(NavController);
    productProvider = TestBed.get(ProductProvider);
    alertController = TestBed.get(AlertController);
  });

  it('should exec ngOnInit', () => {
    spyOn(localStorageProvider, 'getItem').and.returnValue([{id: 0}]);
    component.ngOnInit();
    expect(component.products).toEqual([{id: 0}]);
  });

  it('should load a qr code', (done) => {
    spyOn(productProvider, 'loadProduct').and.returnValue(of({id: 0}));
    spyOn(navController, 'navigateForward');
    component.scanQR();
    done();
  });

  it('should cancel a qr scan', (done) => {
    expect(component.scanning).toBeFalsy();
    done();
  });

  it('should open detail', () => {
    const spy = spyOn(navController, 'navigateForward');
    component.openDetail({});
    expect(spy).toHaveBeenCalled();
  });

  it('should logout', () => {
    const spy = spyOn(navController, 'navigateRoot');
    component.logout();
    expect(spy).toHaveBeenCalledWith('login');
  });

  it('should ask permissions', () => {
    const spy = spyOn(alertController, 'create').and.returnValue(of({present: () => {}}).toPromise());
    (component as any).askPermissions();
    expect(spy).toHaveBeenCalled();
  });
});
 */