

const Qoute = document.querySelector('.qoute');

const Person = document.querySelector('.person');

const Button = document.querySelector('.btn');

const container = document.querySelector('.main-content');

console.log(container);

const qoutes = [
    {
        qoute:'"A rose by any other name would smell as sweet."',
        person:"William Shakespeare"
    },
    {
        qoute:'"All that glitters is not gold."',
        person:"William Shakespeare"
    },
    {
        qoute:'"Ask not what your country can do for you, but ask what you can do for your country."',
        person:"John Kennedy"
    },
    {
        qoute:'"The truth will set you free"',
        person:"The Bible"
    },
    {
        qoute:'"With great power comes great responsibility."',
        person:"Winston Churchill"
    },
    {
        qoute:'"United we stand, divided we fall !"',
        person:"Aesop"
    },
    {
        qoute:'"Whatever you are, be a good one."',
        person:"Abraham Lincoln"
    },
    {
        qoute:'"That\'s one small step for man, a giant step for mankind."',
        person:"Neil Armstrong"
    },
    {
        qoute:'"The future belongs to those who believe in the beauty of their dreams."',
        person:"Eleanor Roosevelt"
    },
    {
        qoute:'"Wake up to reality Nothing ever goes as planned in this acursed world !"',
        person:"Uchiha Madara"
    },
    {
        qoute:'"If you don\'t like the hand that fate\'s  dealt you with, fight for a new one."',
        person:"Uzumaki Naruto"
    },
    {
        qoute:'"Those who are able to forgive themselves and are able to accept their true nature, those are the strong ones."',
        person:"Uchiha Itachi"
    },
    {
        qoute:'"Strive not to be a success, but rather to be a value."',
        person:"Albert Einstein"
    },
    {
        qoute:'"We are what we repeatedly do. Excellence is not an act, but a habit."',
        person:"Aristotle"
    },
    {
        qoute:'"You can have it all. You just can\'t have it all at once."',
        person:"Oprah Winfrey"
    },{
        qoute:'"Don\'t wait around for other people to be happy for you. Any happiness you get, you\'ve got to make it yourself."',
        person:"Alice Walker"
    },
    {
        qoute:'"Success is not final, failure is not fatal: It is the courage to continue that counts."',
        person:"Winston Churchill"
    },
    {
        qoute:'"The only way to do great work is to love what you do."',
        person:"Steve Jobs"
    },
    {
        qoute:'"Believe you can and you\'re halfway there."',
        person:"Theodore Roosevelt"
    },
    {
        qoute:'"In the middle of difficulty lies opportunity."',
        person:" Albert Einstein"
    },
    {
        qoute:'"Your time is limited, don\'t waste it living someone else\'s life."',
        person:"Steve Jobs"
    }
];

Button.addEventListener('click', () => {
    let randomNumber = Math.floor(Math.random() * qoutes.length);

    Qoute.textContent = qoutes[randomNumber].qoute;
    Person.textContent = qoutes[randomNumber].person;  

})

