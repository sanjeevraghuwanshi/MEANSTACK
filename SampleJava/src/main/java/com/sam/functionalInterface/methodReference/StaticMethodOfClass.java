package com.sam.methodReference;

import java.util.function.BiFunction;

class Multiplication {
    public static int multiply(int a, int b) {
        return a * b;
    }
}

public class StaticMethodOfClass {

    public static void main(String[] args) {
        BiFunction<Integer, Integer, Integer> ref = Multiplication::multiply;

        int a = ref.apply(5, 6);
        System.out.println(a);
    }
}
