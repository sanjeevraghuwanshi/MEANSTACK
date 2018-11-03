package com.sam.arraylist;

import java.util.*;

class Stu {
    private String sName;
    private int sAge;
    private int sRollNo;

    public Stu(String sName, int sAge, int sRollNo) {
        this.sName = sName;
        this.sAge = sAge;
        this.sRollNo = sRollNo;
    }

//    public static Comparator<Stu> studentNameComparator = new Comparator<Stu>() {
//        @Override
//        public int compare(Stu stu, Stu t1) {
//            return stu.getsName().compareTo(t1.getsName());
//        }
//    };

//    public static Comparator<Stu> studentNameComparator = (Stu stu, Stu t1) -> stu.getsName().
//            compareTo(t1.getsName());

    public static Comparator<Stu> studentNameComparator = Comparator.comparing(Stu::getsName);


    public static Comparator<Stu> stuAgeComparator = new Comparator<Stu>() {
        @Override
        public int compare(Stu stu, Stu t1) {
            return stu.getsAge() - t1.getsAge();
        }
    };

    public String getsName() {
        return sName;
    }

    public void setsName(String sName) {
        this.sName = sName;
    }

    public int getsAge() {
        return sAge;
    }

    public void setsAge(int sAge) {
        this.sAge = sAge;
    }

    public int getsRollNo() {
        return sRollNo;
    }

    public void setsRollNo(int sRollNo) {
        this.sRollNo = sRollNo;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        Stu stu = (Stu) o;
        return sAge == stu.sAge &&
                sRollNo == stu.sRollNo &&
                Objects.equals(sName, stu.sName);
    }

    @Override
    public int hashCode() {

        return Objects.hash(sName, sAge, sRollNo);
    }

    @Override
    public String toString() {
        return "Stu{" +
                "sName='" + sName + '\'' +
                ", sAge=" + sAge +
                ", sRollNo=" + sRollNo +
                '}';
    }
}

public class ArrayListComparatorSorting {
    public static void main(String[] args) {
        List<Stu> list = new ArrayList<Stu>(
                Arrays.asList(
                        new Stu("sam", 22, 55),
                        new Stu("tam", 11, 11),
                        new Stu("ram", 21, 22)
                )
        );

        Collections.sort(list, Stu.studentNameComparator);

        for (Stu stuList : list) {
            System.out.println("Student list sorted by name : " + stuList);
        }

        Collections.sort(list, Stu.stuAgeComparator);

        for (Stu stuList : list) {
            System.out.println("Student list sorted by age : " + stuList);
        }
    }
}

