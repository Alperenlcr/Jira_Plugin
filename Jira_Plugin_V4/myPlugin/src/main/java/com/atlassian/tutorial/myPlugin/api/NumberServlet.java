import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

public class NumberServlet extends HttpServlet {
  protected void doPost(HttpServletRequest request, HttpServletResponse response) {
    String input = request.getParameter("number");
    System.out.println("Received number: " + input);
  }
}
