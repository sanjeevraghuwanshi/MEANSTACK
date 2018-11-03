package com.sam.arraylist;

import java.util.ArrayList;
import java.util.List;

public class ArrayListExampl {
    public static void main(String[] args) {
        List<String> arrayList = new ArrayList<String>();
        arrayList.add("sam");
        arrayList.add("ram");
        arrayList.add("tam");
        arrayList.add("gam");
        arrayList.add("jam");

        System.out.println("List : " +arrayList);

        arrayList.add("hari");
        arrayList.add("brama");

        arrayList.remove("gam");
        arrayList.remove("jam");

        System.out.println("List : " +arrayList);

        arrayList.set(0,"sanjeev");

        System.out.println("List : " +arrayList);

        System.out.println("Position : " +arrayList.indexOf("sanjeev"));

        System.out.println("Position : " +arrayList.get(2));
    }
}
