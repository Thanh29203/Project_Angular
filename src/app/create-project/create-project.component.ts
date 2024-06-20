import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators, ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ProductService } from '../product.service';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-project',
  standalone: true,
  imports: [FormsModule, CommonModule, ReactiveFormsModule],
  templateUrl: './create-project.component.html',
  styleUrls: ['./create-project.component.css']
})
export class CreateProjectComponent {
  projectForm: FormGroup;

  constructor(
    private productService: ProductService,
    private toastr: ToastrService,
    private router: Router
  ) {
    this.projectForm = new FormGroup({
      projectName: new FormControl('', Validators.required),
      startDate: new FormControl('', Validators.required),
      teamSize: new FormControl('', [Validators.required, Validators.min(1)])
    });
  }

  onSubmit() {
    if (this.projectForm.valid) {
      this.productService.CreateProject(
        this.projectForm.value.projectName,
        this.projectForm.value.startDate,
        this.projectForm.value.teamSize
      ).subscribe((data: any) => {
        this.toastr.success('Thêm mới thành công!');
        setTimeout(() => {
          this.router.navigate(['/project']);
        }, 1000);
      });
    } else {
      this.toastr.error('Có lỗi trong biểu mẫu, vui lòng kiểm tra lại!');
    }
  }
}
