public class teste01 {
    public static void main(String [] args){
        System.out.println("Teste 01");

        int INDICE = 13, SOMA = 0, K = 0;
        
        do{
        System.out.println("Somando:" + SOMA);
           K = K+1;
           SOMA =  SOMA + K;
        }while ( K < INDICE);
            
        System.out.println("O Resultad da soma e: " + SOMA);
    }
}