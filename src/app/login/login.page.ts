import { Component, OnInit } from '@angular/core';
import { LoginProvider } from '../providers/login-provider/login.provider';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { NavController } from '@ionic/angular';
import { finalize } from 'rxjs/operators';

@Component({
  selector: 'app-login',
  templateUrl: 'login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  public loginForm: FormGroup;
  public showError = false;
  public loading = false;
  public errorMessage: string;

  constructor(
    private readonly loginProvider: LoginProvider,
    private readonly navController: NavController
  ) {}

  ngOnInit() {
    this.initForm();
  }

  public doLogin(): void {
    const user = this.loginForm.value.user;
    const password = this.loginForm.value.password;
    this.showError = false;
    this.loading = true;
    this.loginProvider.doLogin(user, password)
      .pipe(finalize(() => this.loading = false))
      .subscribe((resp) => {
        if (resp) {
          this.navController.navigateRoot('/home');
        }
      },(e) => {
        if (e.status === 401) {
          this.errorMessage = 'Alias y/o Contraseña Incorrectos.';
        } else {
          this.errorMessage = 'Ha ocurrido un error. Por favor, intentalo de nuevo.'
        }
        this.showError = true;
      });
  }

  public cerrar(): void{
    console.log('en la funcion');
  }

  public register(): void {
    this.navController.navigateForward('register');
  }

  private initForm(): void {
    this.loginForm = new FormGroup({
      user: new FormControl('', [Validators.required]),
      password: new FormControl('', [Validators.required])
    });
  }

}
