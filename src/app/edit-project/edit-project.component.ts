import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';
import { ActivatedRoute, Params } from '@angular/router';
import { FormGroup,FormBuilder, FormControl, Validators, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-edit-project',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './edit-project.component.html',
  styleUrls: ['./edit-project.component.css']
})
export class EditProjectComponent implements OnInit {
  projectId: any;
  projectForm: FormGroup;

  constructor(
    private route: ActivatedRoute,
    private productService: ProductService,
    private router: Router,
    private toastr: ToastrService,
    private fb: FormBuilder
  ) {
    this.projectForm = this.fb.group({
      projectName: ['', Validators.required],
      startDate: ['', Validators.required],
      teamSize: ['', [Validators.required, Validators.min(1)]],
    });
  }

  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
      this.projectId = params['id'];
      this.loadProject(this.projectId);
    });
  }

  loadProject(id: any) {
    this.productService.getProjectById(id).subscribe((data: any) => {
      this.projectForm.patchValue({
        projectName: data.projectName,
        startDate: data.dateOfStart,
        teamSize: data.teamSize
      });
    });
  }

  onSubmit() {
    if (this.projectForm.valid) {
      this.productService.updateProject(this.projectId, this.projectForm.value).subscribe((data: any) => {
        this.toastr.success('Cập nhật thành công!');
        setTimeout(() => {
          this.router.navigate(['/project']);
        }, 1000);
      });
    } else {
      this.toastr.error('Có lỗi trong biểu mẫu, vui lòng kiểm tra lại!');
    }
  }
}
