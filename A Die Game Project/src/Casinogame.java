import java.util.Random;
import java.util.Scanner;

class Games {
	public int coins;

	Games(int coins) {
		this.coins = coins;
	}
}

public class Project01 {

	@SuppressWarnings({ "resource", "unused" })
	public static void main(String[] args) {
		Games P1 = new Games(100);
		Games P2 = new Games(100);
		Games P3 = new Games(100);
		Games P4 = new Games(100);
		Scanner s = new Scanner(System.in);
		System.out.print("How many player you want to play " + "1(play with computer),2(Play with friend)");
		int g = s.nextInt();
		System.out.println("You have to guess the number on the die ,enter the number between 1 to 6");
		System.out.print("How many turn you want to play ");
		int t = s.nextInt();
		for (int i = 0; i < t; i++) {
			Random num = new Random();
			int n;
			n = 1 + num.nextInt(6);
			if (g == 1) {
				System.out.println("Computer turn: ");
				Random num1 = new Random();
				int n1;
				n1 = 1 + num1.nextInt(6);
				if (n1 == n) {
					System.out.println("Computer guess right 20 coins increases and the no. is " + n1);
					P2.coins += 20;
				} else {
					System.out.println(
							"Computer guess wrong 20 coins decreases ,the correct no. is " + n + " and guess is " + n1);
					P2.coins -= 20;
				}
				System.out.print("Your turn: Enter your No. ");
				int n2 = s.nextInt();
				if (n2 == n) {
					System.out.println("Your guess right 20 coins increases ");
					P1.coins += 20;
				} else {
					System.out.println("Your guess wrong 20 coins decreases the correct no. is " + n);
					P1.coins -= 20;
				}
			}
			else if(g==2) {
				System.out.print("Friend turn:  Enter  No.");
				int n1 = s.nextInt();
				if (n1 == n) {
					System.out.println("Friend guess right 20 coins increases and the no. is " + n1);
					P2.coins += 20;
				} else {
					System.out.println(
							"Friend guess wrong 20 coins decreases ,the correct no. is " + n + " and guess is " + n1);
					P2.coins -= 20;
				}
				System.out.print("Your turn: Enter your No. ");
				int n2 = s.nextInt();
				if (n2 == n) {
					System.out.println("Your guess right 20 coins increases ");
					P1.coins += 20;
				} else {
					System.out.println("Your guess wrong 20 coins decreases, the correct no. is " + n);
					P1.coins -= 20;
				}
			}
		}
		if(g==1)
		if (P1.coins > P2.coins) {
			System.out.println("You win, your coins are " + P1.coins + " Computer coins are " + P2.coins);
		} else if (P1.coins == P2.coins) {
			System.out.println("Tie , both has same coins are " + P1.coins);
		} else {
			System.out.println("Computer win, computer coins are " + P2.coins + " your coins are " + P1.coins);
		}
		else if(g==2) {
			if (P1.coins > P2.coins) {
				System.out.println("You win, your coins are " + P1.coins + "Friend coins are " + P2.coins);
			} else if (P1.coins == P2.coins) {
				System.out.println("Tie , both has same coins are " + P1.coins);
			} else {
				System.out.println("Friend win, friend coins are " + P2.coins + " your coins are " + P1.coins);
			}
		}
	}
}
