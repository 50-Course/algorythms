const Node = require('./Node');
const LinkedList = require('./LinkedList');

describe('Should create a new node successfully', () => {
    it('Should create a new node successfully', () => {
        const node = new Node(1)
        expect(node.data).toBe(1)
        expect(node.next).toBe(null)
    });

    it("Should pass if a node is found within the list", () => {
        const list = new LinkedList()
        list.append(1);
        list.append(3);
        list.append(2);

        expect(list.search(3), "Node not found").toBe(true);
    });
    
})
