package com.sam.methodReference;

import java.util.Arrays;

public class MethodOfArbitraryObject {
    public static void main(String[] args) {
        String[] strArray = {"sam", "ram", "tam"};

        Arrays.sort(strArray, String::compareToIgnoreCase);

        for (String str : strArray) {
            System.out.println(str);
        }
    }
}
