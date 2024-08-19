const Cat = {
    Legs: 4,
    Sound: 'Meow',
    Meowing: function(voice){
        this.Sound = voice
    }
}

console.log("sound before: ", Cat.Sound);
Cat.Meowing('Barking');
console.log("Sound after: ", Cat.Sound);