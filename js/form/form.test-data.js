class User {
    constructor(id, name, phone, email, course){
        this.id = id,
        this.name = name,
        this.phone = phone,
        this.email = email,
        this.course = course
    }
}

const testData = [
    new User(1, 'Aleksandr Lavrov', '+380677754465', 'lavrovweb@gmail.com', 'course-html'),
    new User(2, 'Dmitriy Olgerdov', '+79892867354', 'olegrov@mail.ru', 'course-js'),
    new User(3, 'Aleksey Kolochkov', '+4378653472', 'Kolochkovv@gmail.com', 'course-vue'),
    new User(4, 'Rinat Sabirov', '+9834286757', 'sabirovv@gmail.com', 'course-php'),
    new User(5, 'Olga Lavrova', '7823498234', 'olgalavrova@mail.ru', 'course-wordpress'),
    new User(6, 'Valeriya Ataeva', '+78345689423', 'ataeva@gmail.com', 'course-php'),
]

function getRandomUser(){
    const rand = Math.floor(Math.random() * testData.length - 1);
    return testData[rand];
}


export default {getRandomUser}