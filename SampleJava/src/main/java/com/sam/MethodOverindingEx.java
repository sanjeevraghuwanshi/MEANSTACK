package com.sam;

class  SuperClass{
    //Overridden method
    public void eat(){
        System.out.println("Super class eat method");
    }

    public SuperClass() {
    }

}

public class MethodOverindingEx extends  SuperClass{
//    @Override
    public void eat() {
//        super.eat();
        System.out.println("Child class eat method");
    }

    public static void main(String[] args) {
        MethodOverindingEx mo = new MethodOverindingEx();
        mo.eat();
    }
}
