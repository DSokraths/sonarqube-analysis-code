import java.util.ArrayList;
import java.util.List;

public class BadCodeExample {
    public static void main(String[] args) {
        // Unused variable
        int unusedVar = 10;

        // Infinite loop
        while (true) {
            System.out.println("This is a bad loop.");
            break; // This is a temporary fix, but could lead to confusion.
        }

        // Poorly named method
        doSomethingBad();

        // Large method (does too much)
        int result = performMultipleActions(5, 10);

        // Not handling exceptions
        try {
            riskyOperation();
        } catch (Exception e) {
            // Ignoring exception
        }

        // Inefficient use of collections
        List<String> list = new ArrayList<String>();
        list.add("Item 1");
        list.add("Item 2");
        list.add("Item 3");

        // Using System.out.println instead of proper logging
        System.out.println("List items: " + list);

        // Hardcoding values
        int magicNumber = 42;
        if (result > magicNumber) {
            System.out.println("Result is greater than magic number.");
        }
    }

    private static void doSomethingBad() {
        // Method with no purpose
        System.out.println("Doing something bad!");
    }

    private static int performMultipleActions(int a, int b) {
        int sum = a + b;
        // Too much logic in one method
        if (sum > 10) {
            return sum * 2;
        } else {
            return sum - 2;
        }
    }

    private static void riskyOperation() throws Exception {
        // Simulating an operation that can throw an exception
        throw new Exception("Something went wrong!");
    }
}
