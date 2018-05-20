class DisplayOverloading{
    public void disp(char c){
        System.out.println(c);
    }

    public void disp(char c, int n){
        System.out.println(c+" "+n);
    }
}

class  Sample{
    public static void main(String[] args) {
        DisplayOverloading do = new DisplayOverloading();
        do.disp('c');
        do.disp('f',2);
    }
}