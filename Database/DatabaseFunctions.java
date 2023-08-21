package Database;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;

public class DatabaseFunctions {
	private String jdbcURL;
	private String username; 
	private String password;
	private Connection connection;

	public DatabaseFunctions(String jdbcURL, String username, String password) {
		this.setJdbcURL(jdbcURL);
		this.setUsername(username);
		this.setPassword(password);
		this.setConnection(jdbcURL, username, password);
	}

    public boolean insertContact(String firstName, String lastName, String email) {
        try {
          // code from above
        	Connection connection = this.getConnection();
            String sql = "INSERT INTO Contacts (first_name, last_name, email) VALUES (?, ?, ?)";
            PreparedStatement statement = connection.prepareStatement(sql);

            statement.setString(1, firstName);
            statement.setString(2, lastName);
            statement.setString(3, email);

            int rows = statement.executeUpdate();
            if (rows > 0) {
                System.out.println("A new contact has been inserted.");
        return true;
            }
        } catch (SQLException e) {
            System.out.println("Error inserting contact.");
            e.printStackTrace();
        }
    
    return false;
    }

 	public boolean deleteContact(int id) {
        try {
          // code from above
        	Connection connection = this.getConnection();
            String deleteSQL = "DELETE FROM contacts WHERE id = ?";
            PreparedStatement deleteStatement = connection.prepareStatement(deleteSQL);
            deleteStatement.setInt(1, id);
            int rows = deleteStatement.executeUpdate();
            if (rows > 0) {
                System.out.println("The contact has been deleted.");
                return true;
            }
        } catch (SQLException e) {
            System.out.println("Error deleting contact.");
            e.printStackTrace();
        }
    
    return false;
    }

 	public void printTable() throws SQLException {
      Connection connection = this.getConnection();
      PreparedStatement printOutStatement = connection.prepareStatement("SELECT * FROM contacts");
      ResultSet resultSet = printOutStatement.executeQuery();
      while (resultSet.next()) {
          System.out.print(resultSet.getInt("Id"));
          System.out.print(" - " + resultSet.getString("first_name"));
          System.out.print(" - " + resultSet.getString("last_name"));
          System.out.println(" - " + resultSet.getString("email"));
      }
  }

 	public void printTableSortedBy(String coloumnName, String asdes) throws SQLException {
 		  Connection connection = this.getConnection();
 		  String preparedSQL = "SELECT * FROM contacts ORDER BY " + coloumnName + " " + asdes;
 		  PreparedStatement sortedStatement = connection.prepareStatement(preparedSQL);

 		  ResultSet resultSet = sortedStatement.executeQuery();
 	      while (resultSet.next()) {
 	          System.out.print(resultSet.getInt("Id"));
 	          System.out.print(" - " + resultSet.getString("first_name"));
 	          System.out.print(" - " + resultSet.getString("last_name"));
 	          System.out.println(" - " + resultSet.getString("email"));
 	      }
 		}

	public String getJdbcURL() {
	    return jdbcURL;
	}

	public void setJdbcURL(String jdbcURL) {
	    this.jdbcURL = jdbcURL;
	}

	public String getUsername() {
	    return username;
	}

	public void setUsername(String username) {
	    this.username = username;
	}

	public String getPassword() {
	    return password;
	}

	public void setPassword(String password) {
	    this.password = password;
	}

	public Connection getConnection() {
	    return connection;
	}

	public void closeConnection() {
	    try {
			this.connection.close();
            System.out.println("Connection closed to PostgreSQL server");
		} catch (SQLException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
	}

	public void setConnection(String jdbcURL, String username, String password) {
        try {
            this.connection = DriverManager.getConnection(jdbcURL, username, password);
            System.out.println("Connected to PostgreSQL server");

        } catch (SQLException e) {
            // TODO Auto-generated catch block
            System.out.println("Error in connecting to PostgreSQL server");
            e.printStackTrace();
        }
	}

}
