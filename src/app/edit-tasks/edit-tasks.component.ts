import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';
import { ActivatedRoute, Params } from '@angular/router';
import { FormGroup,FormBuilder, FormControl, Validators, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-edit-tasks',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './edit-tasks.component.html',
  styleUrls: ['./edit-tasks.component.css']
})
export class EditTasksComponent implements OnInit {
  projectId: any;
  projectForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private productService: ProductService,
    private router: Router,
    private toastr: ToastrService
  ) {
    this.projectForm =this.fb.group({
      nametask: ['', Validators.required],
      description: ['', Validators.required],
      project: ['', Validators.required],
      assigned: ['', Validators.required]
    });
  }

  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
      this.projectId = params['id'];
      this.loadProject(this.projectId);
    });
  }

  loadProject(id: any) {
    this.productService.getProjectByIdTasks(id).subscribe((data: any) => {
      this.projectForm.patchValue({
        nametask: data.nametask,
        description: data.description,
        project: data.project,
        assigned: data.assigned,
       
      });
    });
  }

  onSubmit() {
    if (this.projectForm.valid) {
      this.productService.updateProjectTasks(this.projectId, this.projectForm.value).subscribe((data: any) => {
        this.toastr.success('Cập nhật thành công!');
        setTimeout(() => {
          this.router.navigate(['/tasks']);
        }, 1000);
      });
    } else {
      this.toastr.error('Có lỗi trong biểu mẫu, vui lòng kiểm tra lại!');
    }
  }
}
