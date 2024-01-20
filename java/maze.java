import java.util.ArrayList;
import java.util.List;
import java.util.Stack;


public class MazeSolver {

    public static void main(String[] args) {
        ArrayList<ArrayList<Integer>> matrix = new ArrayList<>();

        /**
         * We want something to give us a maze 
         */
        Solution sol = new Solution(matrix, 2);
        System.out.println(sol);
    }

    public boolean Solution(List<List<Integer>> maze, Integer n) {

        // uitlize a stack somewhere in here
        Stack<Integer> stack = new Stack<>();

        int x, y = stack.poll();

        while (!stack.isEmpty()) {
            // If we have reached a wall we mark that place as a no-going area
            if (x < 0 || y < 0 || y >= n || x >=n || maze[x][y] == 1) {
                return False;
            }

            stack.push((x, y));
            
        }

        
    }
}


