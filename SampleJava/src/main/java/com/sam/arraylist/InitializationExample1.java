package com.sam.arraylist;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.Collections;
import java.util.List;

public class InitializationExample1 {
    public static void main(String[] args) {
        List<String> list = new ArrayList<String>(
                Arrays.asList("sam","tam","ram")
        );

        System.out.println("List "+list);

        List<String> list1 = new ArrayList<String>(){{
           add("hari");
           add("lal");
        }};

        System.out.println("List1 "+list1);

        List<Integer> list2= new ArrayList<Integer>(Collections.nCopies(10,5));
        System.out.println("List2 "+list2);
    }
}
