import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from '../user.service'; 
import { Router } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  registerForm: any;

  constructor(
    private formBuilder: FormBuilder,
    private userService: UserService,
    private router: Router,
    private toastr: ToastrService
  ) { }

  ngOnInit(): void {
    this.registerForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]]
    });
  }

  onSubmit(): void {
    if (this.registerForm.invalid) {
      this.toastr.error('Vui lòng kiểm tra lại thông tin nhập');
      return;
    }

    const { email, password } = this.registerForm.value;
    this.userService.register(email, password).subscribe(
      response => {
        this.toastr.success('Đăng ký thành công!');
        setTimeout(() => {
          this.router.navigate(['/login']);
        }, 1000);
      },
      error => { 
        console.error('Lỗi khi đăng ký', error);
        if (error.status === 400) {
          this.toastr.error('Email đã tồn tại trong hệ thống');
        } else {
          this.toastr.error('Đã xảy ra lỗi. Vui lòng thử lại sau');
        }
      }
    );
  }
}
