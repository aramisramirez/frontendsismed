import { Component } from '@angular/core';
import {Router} from "@angular/router";
import {ToastrService} from "ngx-toastr";
import {FormBuilder, Validators} from "@angular/forms";
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  longText = `The Shiba Inu is the smallest of the six original and distinct spitz breeds of dog
  from Japan. A small, agile dog that copes very well with mountainous terrain, the Shiba Inu was
  originally bred for hunting.`;
  hide = true;


  logginData;

  spinner: boolean = false
  constructor( private toastr: ToastrService, private router: Router, private formBuilder: FormBuilder,
    private authService: AuthService){
    this.logginData = this.formBuilder.group({
      correo: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  ngOnInit(): void {
  }

  showToast(mensaje: string, titulo: string) {
    this.toastr.success(mensaje, titulo);
  }
  showToastError(mensaje: string, titulo: string) {
    this.toastr.error(mensaje, titulo);
  }

  showToastWarning(mensaje: string, titulo: string) {
    this.toastr.warning(mensaje, titulo);
  }

  login(){

    if (this.logginData.value.correo == "" || this.logginData.value.password == "") {
      return this.showToastWarning('Porfavor complete los campos.', 'Mensaje de advertencia');
    }

    this.spinner = true

    this.authService.autentificacion(this.logginData.value).subscribe((response: any) => {

      this.spinner = false

      localStorage.setItem("token", response.token)

      this.showToast(response.message, 'Mensaje de confirmación.');
      this.router.navigateByUrl('admin')

    },(error: any) => {
      this.showToastError(error.error.error, 'Mensaje de Error');
      this.spinner = false
    });
  }

}
