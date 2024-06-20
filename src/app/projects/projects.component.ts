import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ProductService } from '../product.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [
    CommonModule,
  ],
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css'] // Corrected to styleUrls (plural)
})
export class ProjectsComponent implements OnInit {
  projects: any[] = [];

  constructor(
    private productService: ProductService,
    private router: Router, // Corrected typo: route to router
    private toastr: ToastrService
  ) {}

  ngOnInit(): void {
    this.loadProjects();
  }

  loadProjects(): void {
    this.productService.getData().subscribe((data: any) => {
      this.projects = data;
    });
  }

  onDelete(id: any): void {
    const isConfirmed = confirm('Bạn có chắc chắn muốn xóa dự án này?');
    if (isConfirmed) {
      this.productService.DeleteData(id).subscribe(
        (data: any) => {
          this.toastr.success('Xóa dự án thành công!');
          this.loadProjects(); // Fetch the updated list of projects
        },
        error => {
          this.toastr.error('Xóa dự án thất bại!');
        }
      );
    }
  }
}
