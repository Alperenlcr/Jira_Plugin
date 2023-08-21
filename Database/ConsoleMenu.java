package Database;

import java.sql.SQLException;
import java.util.Scanner;

public class ConsoleMenu {
    public Scanner scanner = new Scanner(System.in);
    final String jdbcURL = "jdbc:postgresql://localhost:5432/Jira_Plugin_DB";
    final String username = "postgres";
    final String password = "1234";
    DatabaseFunctions db;

    public ConsoleMenu() {
        db = new DatabaseFunctions(jdbcURL ,username ,password);
    }

	public static void main(String[] args) {
		ConsoleMenu cm = new ConsoleMenu();
		cm.Menu();
	}

	public void Menu() {
	    System.out.println("----- Menu -----");
	    System.out.println("1. Insert Contact");
	    System.out.println("2. Delete Contact");
	    System.out.println("3. Print Table");
	    System.out.println("4. Print Sorted Table Ascending");
	    System.out.println("5. Print Sorted Table Descending");
	    System.out.println("6. Quit");
	    System.out.println("----------------");
	    // prompt user for choice
	    
	    int option = scanner.nextInt();
	    System.out.println("You selected: " + option);

	    switch (option) {
	        case 1: // call insertContact
	        	System.out.println("Enter first name : ");
	        	String first_name = scanner.next();

	        	System.out.println("Enter last name : ");
	        	String last_name = scanner.next();

	        	System.out.println("Enter email : ");
	        	String email = scanner.next();
	        	
	        	this.db.insertContact(first_name, last_name, email);
	            break;
	        case 2: // call deleteContact
	        	System.out.println("Enter ID to delete : ");
	        	int id = scanner.nextInt();
	        	this.db.deleteContact(id);
	            break;
	        case 3: // call printTable
				try {
					this.db.printTable();
				} catch (SQLException e) {
					// TODO Auto-generated catch block
					e.printStackTrace();
				}
	            break;
	        case 4, 5:
	        	String asdes = "asc";
	        	if (option == 5) {
	        		asdes = "desc";
	        	}
	    	    System.out.println("----- Select Column to Sort -----");
	    	    System.out.println("1. First Name");
	    	    System.out.println("2. Last Name");
	    	    System.out.println("3. Email");
	    	    System.out.println("4. Insertion Order");
	    	    System.out.println("------------------");
	    	    // prompt user for choice

	    	    int option2 = scanner.nextInt();
	    	    System.out.println("You selected: " + option2);
	    	    
	    	    switch (option2) {
		        case 1: // call First Name
		        	try {
		        		
						db.printTableSortedBy("first_name", asdes);
					} catch (SQLException e) {
						// TODO Auto-generated catch block
						e.printStackTrace();
					}
		            break;
		        case 2: // call Last Name
		        	try {
						db.printTableSortedBy("last_name", asdes);
					} catch (SQLException e) {
						// TODO Auto-generated catch block
						e.printStackTrace();
					}
		            break;
		        case 3: // call Email
		        	try {
						db.printTableSortedBy("email", asdes);
					} catch (SQLException e) {
						// TODO Auto-generated catch block
						e.printStackTrace();
					}
		            break;
		        case 4: // call ID
		        	try {
						db.printTableSortedBy("id", asdes);
					} catch (SQLException e) {
						// TODO Auto-generated catch block
						e.printStackTrace();
					}
		            break;
		        default: 
		            System.out.println("Wrong option!");
		            break;
	    	    }
	            break;
	        case 6:
	        	System.out.println("Quiting");
	            break;
	        default: 
	            System.out.println("Wrong option!");
	            break;
	    }
	    if (option != 6) {
	    	Menu();
	    }
	}

}
