const toDoList = [];
let command = prompt("What do you want to do?");

while (command !== "quit" && command !== 'q') {
    if (command === 'new') {
        let newToDo = prompt('Enter a new to-do:');
        toDoList.push(newToDo);
        console.log(`${newToDo} added to list.`);
    } else if (command === 'list') {
        console.log('**********');
        for (let i = 0; i < toDoList.length; i++) {
            console.log(`${i}: ${toDoList[i]}`)
        }
        console.log('**********');
    } else if (command === 'delete') {
        let toDont = parseInt(prompt('Enter index of item to delete:'));

        // Ensures requested deletion exists
        while (!toDont && toDont !== 0 || toDont >= toDoList.length ) {
            toDont = parseInt(prompt('Enter index of item to delete:'))
        }

        // Only logs if successful
        if (toDont || toDont === 0) {
            console.log(`${toDoList[toDont]} removed from list.`);
            toDoList.splice(toDont, 1);
        }
    }
    command = prompt('What do you want to do?:');
}

console.log("Quitting...");