import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ProductService } from '../product.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-tasks',
  standalone: true,
  imports: [
    CommonModule,
  ],
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css'] // Corrected to styleUrls (plural)
})
export class TasksComponent implements OnInit {
  tasks: any[] = [];

  constructor(
    private productService: ProductService,
    private router: Router, // Corrected typo: route to router
    private toastr: ToastrService
  ) {}

  ngOnInit(): void {
    this.loadTasks();
  }

  loadTasks(): void {
    this.productService.getDataTasks().subscribe((data: any) => {
      this.tasks = data;
    });
  }

  onDelete(id: any): void {
    const isConfirmed = confirm('Bạn có chắc chắn muốn xóa nhiệm vụ này?');
    if (isConfirmed) {
      this.productService.DeleteDataTasks(id).subscribe(
        (data: any) => {
          this.toastr.success('Xóa nhiệm vụ thành công!');
          this.loadTasks(); // Fetch the updated list of tasks
        },
        error => {
          this.toastr.error('Xóa nhiệm vụ thất bại!');
        }
      );
    }
  }
}
