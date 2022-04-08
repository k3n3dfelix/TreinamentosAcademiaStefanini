package javaPoo;

public class Uno {

	public static void main(String[] args) {
		
		Carro uno = new Carro();
		System.out.println("Carro: Ano");
		System.out.println("Ano: " + uno.ano);
		System.out.println("Cor: " + uno.cor);
		uno.ligar();
		uno.acelerar();
		uno.desligar();
		
		
	}

}
