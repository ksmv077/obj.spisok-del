const todoList = {
  items: [
    {
      text: 'Завершить текущий челлендж',
      completed: false,
    },
    {
      text: 'Отдохнуть во время перерыва',
      completed: false,
    },
    {
      text: 'Помочь напарнику понять код',
      completed: false,
    },
    {
      text: 'Выиграть в мафию',
      completed: true,
    },
  ],

  printAll: function () {
    for(let i = 0 ; i < this.items.length; i++) {
      console.log(this.print(i))
   }
  },

  add: function (text) {
    const newItem = {
      text: text,
      completed: false
    };
    this.items.unshift(newItem);
  },

  remove: function(index) {
    this.items.splice(index , 1)
 },

  print: function (index) {
    const item = this.items[index]
    const box = item.completed ? '[ ]' : '[X]'
    console.log(`${box} ${item.text}`)
  },

  complete: function (index) { 
    this.items[index].completed = true
  },
};
