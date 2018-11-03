package com.sam.arraylist;

import java.util.*;

public class LoopExample {
    public static void main(String[] args) {
        List<Integer> list = new ArrayList<Integer>(
                Arrays.asList(22, 33, 12, 44, 55, 6)
        );

        System.out.println(list);
        System.out.println("******For loop********");
        for (int counter = 0; counter < list.size(); counter++) {
            System.out.println(list.get(counter));
        }

        System.out.println("*******While********");
        int count = 0;
        while (count < list.size()) {
            System.out.println(list.get(count));
            count++;
        }

        System.out.println("********Advanced for loop");
        for (Integer num : list) {
            System.out.println(num);
        }

        System.out.println("*****Iterator**");
        Iterator<Integer> itr = list.iterator();
        while (itr.hasNext()) {
            System.out.println(itr.next());
        }

        System.out.println("*********Enumeration****");
        Enumeration<Integer> en = Collections.enumeration(list);
        while (en.hasMoreElements()) {
            System.out.println(en.nextElement());
        }
    }
}
