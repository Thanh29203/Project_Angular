import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { UserService } from '../user.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  constructor(
    private userService: UserService,
    private router: Router,
    private toastr: ToastrService
  ) {}

  onSubmit(form: NgForm) {
    
    this.userService.login(form.value.email, form.value.password).subscribe(
      (data: any) => {
        this.toastr.success('Login successfully!');
        localStorage.setItem('token', data.access_token); // Lưu token vào localStorage
          setTimeout(()=>{
            this.router.navigate(['/']);
          },1000)
      },
      (error) => {
        
        this.toastr.error('Vui lòng kiểm tra lại thông tin ');
      }
    );
  }
}
