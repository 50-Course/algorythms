public class BFS extends Graph {

    public BFS() {
        super();
        
    }

    public static void main(String[] args) {
        Graph g = new Graph<Integer>(4);
        g.addEdge(0, 1);
        g.addEdge(0, 2);
        g.addEdge(1, 2);
        g.addEdge(2, 0);
        g.addEdge(2, 3);
        g.addEdge(3, 3);

        g.BFS(2);
    }
}

class Graph<T> {

    private int V;
    private Queue<Integer> queue;

    public Graph(int v) {
        V = v;
        queue = new LinkedList<>();
    }


}
