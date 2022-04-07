package javaFundamentos;

public class Fundamentos {

	public static void main(String[] args) {
		
		String nome = "Kened";
		int idade = 10;
		char sexo = 'M';
		double temperatura = 30.7;
		boolean arCondicionado = false;
		System.out.println("------------------------------------");
		System.out.println("Revisão Fundamentos Java");
		System.out.println("------------------------------------");
		System.out.println("_____________________________________");
		System.out.println("Uso de variáveis na linguagem Java");
		System.out.println("Nome: "+ nome);
		System.out.println("Idade: "+ idade);
		System.out.println("Sexo: "+ sexo);
		System.out.println("Temperatura: "+ temperatura);
		System.out.println("Ar Condicionado: "+ arCondicionado);
		System.out.println("_____________________________________");
		
		double i =10;
		System.out.println("Operadores Aritimético e Atribuições");
		System.out.println("Exemplos:");
		System.out.println("i = " + i);
		System.out.println("i = " + i + " + 5 | i = " + (i + 5));
		System.out.println("i = " + i + " - 5 | i = " + (i - 5));
		System.out.println("i = " + i + " + 5 | i = " + (i * 5));
		System.out.println("i = " + i + " / 5 | i = " + (i / 5));
		System.out.println("i = " + i + " % 5 | i = " + (i % 5));
		System.out.println("i += 5      " +" | "+ (i+=5));
		System.out.println("i += 5      " +" | "+ (i+=5));
		System.out.println("i += 5      " +" | "+ (i*=5));
		System.out.println("i += 5      " +" | "+ (i/=5));
		i++;
		System.out.println("I++          | i = "+ i);
		i--;
		System.out.println("I--          | i = "+ i);
		System.out.println("_____________________________________");
		System.out.println("Estruturas de Controle");
		System.out.println("Condicional");
		System.out.println("If e Else:  Sexo == M");
		
		if(sexo == 'M') {
			System.out.println("Alistamento Militar Obrigátório");
		}else {
			System.out.println("Alistamento Militar não obrigatório");
		}
		System.out.println(" ");
		System.out.println("If e Else e Elseif:  Sexo == M");
		if(idade < 16) {
			System.out.println("Proibido Votar");
		}else if( idade >= 18 && idade <= 70) {
			System.out.println("Voto Obrigatório");
		}else if( idade == 16 || idade == 17 || idade >70) {
			System.out.println("Voto Facultativo");
		}
		System.out.println(" ");
		System.out.println("Switch Case");
		
		int opcao = 3;
		switch (opcao) {
		case 1:
			System.out.println("Clientes");
			break;
		case 2:
			System.out.println("Fornecedor");
			break;
		default:
			System.out.println("Opção Inválida");
			break;
		}
		
		System.out.println("_____________________________________");
		System.out.println("Estruturas de Repetição");
		System.out.println("For: ");
		for(int j = 1; j <= 10; j++) {
			System.out.println(j);
		}
		System.out.println(" ");
		System.out.println("Exemplo Tabuada");
		for(int tabuada = 0; tabuada <= 10; tabuada++) {
			System.out.println(" ");
			for(int valor = 0; valor <= 10; valor++) {
				System.out.println(tabuada + " x " + valor +" = "+ (tabuada*valor));
			}
		}
		System.out.println(" ");
		System.out.println("Exemplo Do While While");
		int contador = 1;
		while(contador <= 10) {
			System.out.println(contador);
			contador++;
		}
		
		System.out.println(" ");
		System.out.println("Exemplo Do While While");
		char novoJogo ;
		do {
			System.out.println("Deseja Joga Novamente?");
			novoJogo = 'n';
		}
		while(novoJogo == 's'); {
			System.out.println("Game Over");
		
		}

	}

}
