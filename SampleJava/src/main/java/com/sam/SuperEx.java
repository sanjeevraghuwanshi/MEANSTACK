class SuperClass {
    protected int num = 10;

    SuperClass() {
        System.out.println("Super class constructor");
    }
}

class SubClass extends SuperClass {
    int num = 11;

    void printNumber() {
        System.out.println(super.num);
    }

    SubClass(int n) {
        System.out.println("Subclass no arg constructor");
    }

    public static void main(String[] args) {
        SubClass subc = new SubClass(3);
        subc.printNumber();
    }
}