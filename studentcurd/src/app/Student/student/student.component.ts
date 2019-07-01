// tslint:disable: quotemark
import { Component, OnInit } from "@angular/core";
import { Observable } from "rxjs";
import {
  NgForm,
  FormBuilder,
  FormGroup,
  Validators,
  FormControl
} from "@angular/forms";
import { StudentService } from "../Service/student.service";
import { StudentVM } from "../Class/student-vm";

@Component({
  selector: "app-student",
  templateUrl: "./student.component.html",
  styleUrls: ["./student.component.scss"]
})
export class StudentComponent implements OnInit {
  dataSaved = false;
  message: String;
  fromStudent: any;
  allStudent: StudentVM[];
  student: any;

  constructor(
    private formBuilder: FormBuilder,
    private studentService: StudentService
  ) {}

  ngOnInit() {
    this.fromStudent = this.formBuilder.group({
      studentName: ["", [Validators.required]],

      fName: ["", [Validators.required]],
      mName: ["", [Validators.required]],
      contactNo: ["", [Validators.required]],
      email: ["", [Validators.required]],
      gender: ["", [Validators.required]]
    });
    this.getStudent();
  }
  reset() {
    this.fromStudent.reset();
  }
  getStudent() {
    this.studentService.getStudent().subscribe(res => {
      this.allStudent = res.data;
      console.log(this.allStudent);
    });
  }
  addStudent(studentVM: StudentVM) {
    debugger;
    // StudentVM.Id = this.StudentId;
    this.studentService.createStudent(studentVM).subscribe(() => {
      this.dataSaved = true;
      this.message = "Record saved Successfully";
      this.getStudent();
      this.reset();
      // this.StudentId = "0";
    });
  }
  deleteStudent(studentId: string) {
    if (confirm("Are You Sure To Delete this Informations")) {
      this.studentService.deleteStudent(studentId).subscribe(() => {
        this.dataSaved = true;
        this.message = "Deleted Successfully";
        this.getStudent();
      });
    }
  }
  studentEdit(studentId: string) {
    debugger;
    this.studentService.getStudentById(studentId).subscribe(Response => {
      this.message = null;
      this.dataSaved = false;
      debugger;
      // this.student = Response.Id;
      this.fromStudent.controls["studentName"].setValue(
        Response.data.studentName
      );
      this.fromStudent.controls["fName"].setValue(Response.data.fName);
      this.fromStudent.controls["mName"].setValue(Response.data.mName);
      this.fromStudent.controls["contactNo"].setValue(Response.data.contactNo);
    });
  }
}
