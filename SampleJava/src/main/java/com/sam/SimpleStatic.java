class SimpleStatic {

    static int num;
    static String name;
    static int number = 22;
    String myName = "sanjeev";

    SimpleStatic() {
    }

    static {
        System.out.println("First static block");
        num = 44;
        name = "sam";

    }


    static {
        System.out.println("Second static block");
        num = 55;
        name = "sameer";

    }


    static void myMethod() {
        System.out.println("my static method" + "name : " + name);
    }

    public static void main(String[] args) {
        SimpleStatic obj1 = new SimpleStatic();
        SimpleStatic obj2 = new SimpleStatic();

        obj1.myName = "ramji";
        obj1.number = 44;

        obj2.myName = "samji";
        obj2.number = 66;

        System.out.println("Value of myName: " + obj1.myName);
        System.out.println("Value of number: " + obj1.number);
        System.out.println("Value of myName: " + obj2.myName);
        System.out.println("Value of number: " + obj2.number);

        myMethod();
        System.out.println("Value of num: " + num);
        System.out.println("Value of mystr: " + name);
    }
}