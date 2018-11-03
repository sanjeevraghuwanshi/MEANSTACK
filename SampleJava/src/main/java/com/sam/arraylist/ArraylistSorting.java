package com.sam.arraylist;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.Collections;
import java.util.List;

public class ArraylistSorting {
    public static void main(String[] args) {
        List<String> stringList = new ArrayList<String>(
                Arrays.asList("sam", "sfg", "ram", "abvc", "ytyt", "fff")
        );

        System.out.println("With out sort:" + stringList);

        Collections.sort(stringList);

        System.out.println("String With sort:" + stringList);

        Collections.sort(stringList, Collections.reverseOrder());

        System.out.println("String With decending sort:" + stringList);

        List<Integer> integerList = new ArrayList<>(
                Arrays.asList(4, 66, 5, 77, 33, 2, 2)
        );

        System.out.println("With out sort:" + integerList);

        Collections.sort(integerList);

        System.out.println("Integer With sort:" + integerList);

    }
}
