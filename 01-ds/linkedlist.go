package main

import "fmt"

type Node struct {
	data int
	nPtr *Node
}

type LinkedList struct {
	head *Node
	next *Node
}

func (l *LinkedList) addNode(data int) {
	if l.head == nil {
		l.head = &Node{data: data}
		l.next = l.head
	} else {
		l.next.nPtr = &Node{data: data}
		l.next = l.next.nPtr
	}
}

func main() {
	fmt.Println("Hello World")
}
