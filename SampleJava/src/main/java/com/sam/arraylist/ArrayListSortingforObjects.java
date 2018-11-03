package com.sam.arraylist;

import java.util.*;

class Student implements Comparable<Student> {
    private String sName;
    private int sAge;
    private int sRollNo;

    Student(String name, int age, int rollNo) {
        this.sName = name;
        this.sAge = age;
        this.sRollNo = rollNo;
    }

    public String getsName() {
        return sName;
    }

    public void setsName(String sName) {
        this.sName = sName;
    }

    public int getsRollNo() {
        return sRollNo;
    }

    public void setsRollNo(int sRollNo) {
        this.sRollNo = sRollNo;
    }

    public int getsAge() {

        return sAge;
    }

    public void setsAge(int sAge) {
        this.sAge = sAge;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        Student student = (Student) o;
        return sAge == student.sAge &&
                sRollNo == student.sRollNo &&
                Objects.equals(sName, student.sName);
    }

    @Override
    public int hashCode() {

        return Objects.hash(sName, sAge, sRollNo);
    }

    @Override
    public String toString() {
        return "Student{" +
                "sName='" + sName + '\'' +
                ", sAge=" + sAge +
                ", sRollNo=" + sRollNo +
                '}';
    }

    @Override
    public int compareTo(Student compStudent) {
        int compStuAge = compStudent.getsAge();

//        return this.sAge - compStuAge;
//        decending order
//        return compStuAge - this.sAge;
//        Sorting with name
//        return this.sName.compareTo(compStudent.getsName());
        return compStudent.getsName().compareTo(this.sName);
    }
}

public class ArrayListSortingforObjects {
    public static void main(String[] args) {
        List<Student> listOfStudents = new ArrayList<Student>(
                Arrays.asList(new Student("sam", 57, 123),
                        new Student("ram", 77, 456),
                        new Student("tam", 55, 789))
        );

        System.out.println("Student list : " + listOfStudents);

        Collections.sort(listOfStudents);
        System.out.println("Student list : " + listOfStudents);
//        System.out.println("sam".compareTo("sam"));
//        System.out.println("sam".compareTo("asm"));
//        System.out.println("sam".compareTo("mas"));
//        System.out.println("mas".compareTo("sam"));
//        System.out.println("sam".compareTo("sar"));
    }
}
