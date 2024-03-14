class LinkedList {
    constructor(node) {
        this.head = node;
        this.tail = null;
    }

    append(node) {
        if (this.head === null) {
            this.head = node;
            return;
        }
    }
    
    remove(value) {
        if (this.head === null) {
            return;
        }
        if (this.head.value === value) {
            this.head = this.head.next;
            return;
        }
    }
    search(value) {
        if (this.head === null) {
            return "Not found";
        }

        for (let current = this.head; current.value !== null; current = current.next) {
            if (current.value === value) {
                return "Found";
            }
        }

    }

}

class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}
