package com.sam.methodReference;

@FunctionalInterface
interface MyInterface {
    MyClass display(String str);
}

class MyClass {
    public MyClass(String say) {
        System.out.println(say);
    }
}

public class ReferenceToConstructor {
    public static void main(String[] args) {
        MyInterface ref = MyClass::new;
        ref.display("Hello");
    }
}
