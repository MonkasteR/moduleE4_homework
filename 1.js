function printOwnProperties(obj) {
    for (let key in obj) {               // перебираем ключи объекта
        if (obj.hasOwnProperty(key)) {  // если объект имеет свойство с данным ключом
            console.log(key, obj[key]);  // выводим его
        }
    }
}
