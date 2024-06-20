import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private apiUrl = 'http://localhost:8000/auth'; // Endpoint của API server Node.js
  private tokenKey = 'token'; // Key để lưu token vào localStorage

  constructor(private http: HttpClient) { }

  register(email: string, password: string): Observable<any> {
    const user = { email, password };
    return this.http.post<any>(`${this.apiUrl}/register`, user);
  }

  login(email: string, password: string): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/login`, { email, password });
  }

  logout(): void {
    localStorage.removeItem(this.tokenKey); // Xóa token khỏi localStorage khi logout
  }

  setToken(token: string): void {
    localStorage.setItem(this.tokenKey, token); // Lưu token vào localStorage
  }

  getToken(): string | null {
    return localStorage.getItem(this.tokenKey); // Lấy token từ localStorage
  }

  isLoggedIn(): boolean {
    return this.getToken() !== null; // Kiểm tra có tồn tại token trong localStorage hay không
  }
}
