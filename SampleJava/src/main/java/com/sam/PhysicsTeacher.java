class InheritanceTeacher {
    String designation = "Teacher";
    String collegeName = "Samonline";
    private int age;
    private String address;

    protected int getAge() {
        return age;
    }

    protected void setAge(int age) {
        this.age = age;
    }

    protected String getAddress() {
        return address;
    }

    protected void setAddress(String address) {
        this.address = address;
    }

    void does() {
        System.out.println("Teaching");
    }
}

public class PhysicsTeacher extends InheritanceTeacher {
    String mainSubject = "Physics";

    public static void main(String[] args) {
        PhysicsTeacher obj = new PhysicsTeacher();
        obj.setAge(44);
        obj.setAddress("MaHA");
        System.out.println(obj.collegeName);
        System.out.println(obj.designation);
        System.out.println(obj.mainSubject);
        System.out.println(obj.getAge());
        System.out.println(obj.getAddress());
        obj.does();
    }
}