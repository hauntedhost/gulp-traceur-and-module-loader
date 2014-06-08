class Animal {
  constructor(name) {
    this.name = name;
  }
};

export { Animal };

class Cat extends Animal {
  constructor(name) {
    super(name);
  }

  meow() {
    $('#main').append('<p>meooow</p>');
  }
};

export { Cat };

class Message {
  constructor(message) {
    this.message = message;
  }

  deliver() {
    $('#main').html(this.message);
  }
};

export { Message };
