package com.sam.functionalInterface;

@FunctionalInterface
interface MyFunctionalInterface {
    public int addMethod(int a, int b);


//    public int multiMethod(int a, int b);
}

public class BeginnersBookClass {
    public static void main(String[] args) {
        MyFunctionalInterface sum = (a, b) -> {
            return a + b;
        };

        System.out.println(sum.addMethod(5, 6));
    }
}
