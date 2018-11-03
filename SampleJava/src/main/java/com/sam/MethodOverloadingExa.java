package com.sam;

class DisplayOverloading{
    public  void  disp(char c){
        System.out.println("Method A"+c   );
    }

    public  void  disp(int c){
        System.out.println("Method B"+c );
    }

    public  void  disp(double c){
        System.out.println("Method C"+c );
    }

    public  void  disp(char c, int n){
        System.out.println(c +" "+ n);
    }
    public  void  disp(int c, char n){
        System.out.println(c +" "+ n);
    }
}

public class MethodOverloadingExa {
    public static void main(String[] args) {
        DisplayOverloading disp = new DisplayOverloading();

        disp.disp('c');
        disp.disp(6.1);
        disp.disp('c',5);
        disp.disp(8,'v');
    }
}
