class Address {
    int streetNum;
    String country;
    String state;
    String city;

    Address(int street, String c, String s, String ci) {
        this.streetNum = street;
        this.country = c;
        this.state = s;
        this.city = ci;
    }

}

class Student {
    int rollNum;
    String stuName;
    Address stuAdd;

    Student(int rn, String sName, Address a) {
        this.rollNum = rn;
        this.stuName = sName;
        this.stuAdd = a;
    }

    public static void main(String[] args) {
        Address ad = new Address(17, "India", "mh", "pune");
        Student st = new Student(5, "sam", ad);

        System.out.println(st.rollNum);
        System.out.println(st.stuName);
        System.out.println(st.stuAdd.streetNum);
        System.out.println(st.stuAdd.city);
        System.out.println(st.stuAdd.state);
        System.out.println(st.stuAdd.country);

    }
}