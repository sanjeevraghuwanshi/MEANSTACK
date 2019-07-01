// tslint:disable: quotemark
import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs";
import { StudentVM } from "../Class/student-vm";

@Injectable({
  providedIn: "root"
})
export class StudentService {
  url: String;
  constructor(private http: HttpClient) {
    this.url = "http://localhost:8080/api";
  }

  // Crud operations

  // Read student data
  getStudent(): Observable<any> {
    return this.http.get<any>(this.url + "/student");
  }

  // create new student
  createStudent(student: StudentVM): any {
    const httpOptions = {
      headers: new HttpHeaders({
        "content-type": "application/json"
      })
    };

    return this.http.post<StudentVM>(this.url + "/student", student);
  }

  // Delete student
  deleteStudent(studentId: String): any {
    return this.http.get<number>(this.url + "/student/" + studentId);
  }

  // Get student by id
  getStudentById(studentId: String): Observable<any> {
    return this.http.get<any>(this.url + "/student/" + studentId);
  }
}
