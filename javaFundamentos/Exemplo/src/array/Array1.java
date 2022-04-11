package array;

public class Array1 {

	public static void main(String[] args) {
		
		String [] carros = {"Ferrari", "Fusca", "Camaro", "Uno"};
		System.out.println("Array Carros: ");
		for(int i = 0;i < carros.length; i++) {
			System.out.println("Posição Vetor: "+i+" Valor: "+carros[i]);
		}
		
		System.out.println("Tamanho do array: "+ carros.length);
		System.out.println("____________________________________");
		System.out.println("Imprimindo uma posição do array");
		System.out.println("Carro: " + carros[0]);
		
		
		
		System.out.println("____________________________________");
		System.out.println("Trocado uma posição do array");
		carros[2] = "Porsche";
		System.out.println("Array Carros: ");
		for(int i = 0;i < carros.length; i++) {
			System.out.println("Posição Vetor: "+i+" Valor: "+carros[i]);
		}

	}

}
