/*
Rifare l’esercizio della to do list.
Questa volta però ogni todo sarà un oggetto, formato da due proprietà:
- text, una stringa che indica il testo del todo
- done, un booleano (true/false) che indica se il todo è stato fatto oppure no

MILESTONE 1
Stampare all’interno di una lista HTML un item per ogni todo. FATTO
Se la proprietà done è uguale a true, visualizzare il testo del todo sbarrato. FATTO

MILESTONE 2
Visualizzare a fianco ad ogni item ha una “x”: cliccando su di essa, il todo viene rimosso dalla lista. FATTO

MILESTONE 3
Predisporre un campo di input testuale e un pulsante “aggiungi”: cliccando sul pulsante, il testo digitato viene letto e utilizzato per creare un nuovo todo, che quindi viene aggiunto alla lista dei todo esistenti.
*/

const { createApp } = Vue

  createApp({
    data() {
      return {
        activeItem: 0,
        message: "",
        error: false,
        todos: [
            {
                text: 'Fare i compiti',
                done: false
            },
            {
                text: 'Fare la spesa',
                done: true
            },
            {
                text: 'Fare il bucato',
                done: false
            }
        ]
      }
    },
    mounted () {
        console.log(this.todos[this.activeItem].text);
    },
    methods: {
        removeItem (index) {
            this.todos.splice(index, 1)
        },
        addTask () {
            if (this.message.length >= 5) {
                this.todos.unshift({text: this.message, done: false});
                this.message = "";
                this.error = false;
            } else {
                this.error = true;
            }
        }
    }
  }).mount('#app')