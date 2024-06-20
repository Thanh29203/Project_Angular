import { Component } from '@angular/core';
import { FormGroup,FormBuilder, FormControl, Validators, ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ProductService } from '../product.service';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-task',
  standalone: true,
  imports: [FormsModule, CommonModule, ReactiveFormsModule],
  templateUrl: './create-task.component.html',
  styleUrls: ['./create-task.component.css']
})
export class CreateTaskComponent {
  projectForm: FormGroup;

  constructor(
    private productService: ProductService,
    private toastr: ToastrService,
    private router: Router,
    private fb: FormBuilder
  ) {
    this.projectForm = this.fb.group({
      description: ['', Validators.required],
      nametask: ['', Validators.required],
      project: ['', Validators.required],
      assigned: ['', Validators.required]
    });
  }

  onSubmit() {
    if (this.projectForm.valid) {
      const formValue = this.projectForm.value;
      this.productService.createTask(
        formValue
      ).subscribe((data: any) => {
        this.toastr.success('Thêm mới thành công!');
        setTimeout(() => {
          this.router.navigate(['/tasks']);
        }, 1000);
      });
    } else {
      this.toastr.error('Có lỗi trong biểu mẫu, vui lòng kiểm tra lại!');
    }
  }
}
