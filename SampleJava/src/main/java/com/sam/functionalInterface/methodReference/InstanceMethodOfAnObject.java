package com.sam.methodReference;

@FunctionalInterface
interface MYInterface {
    void display();
}

public class InstanceMethodOfAnObject {
    void myMethod() {
        System.out.println("instance method");
    }

    public static void main(String[] args) {
        InstanceMethodOfAnObject obj = new InstanceMethodOfAnObject();
//        MYInterface ref = obj::myMethod;

//        ref.display();
    }
}
