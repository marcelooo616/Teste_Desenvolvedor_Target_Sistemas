import java.util.ArrayList;
import java.util.Scanner;

public class teste02_fibonacci {
public static void main(String[] args) {
    Scanner sc = new Scanner(System.in);
    int numero = 10, soma = 0, entrada = 16;

    ArrayList<Integer> fibonacci =  new ArrayList<>();
    fibonacci.add(0);
    fibonacci.add(1);
    
    for(int i = 1 ; i <= numero; i++){
        soma += fibonacci.get(i);
        fibonacci.add(soma);
    }
    System.out.println("Fibonacci: " + fibonacci);
    boolean isFibonacci  = fibonacci.contains(entrada);

    if( isFibonacci != false){
        System.out.println("O Valor "+entrada+" Pertence a sequencia de fibonacci");
    }else{
        System.err.println("O Valor "+entrada+" Não pertence a sequencia de fibonacci");
    }

    

    
       
       
    }
    
}

