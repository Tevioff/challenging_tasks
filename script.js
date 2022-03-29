function lorem(str) {
    if (typeof str !== 'string') {
        console.log('аргумент не строка');
        return;
    }

    str = str.trim();
    return str.length > 50 ? str.slice(0, 50) + '...' : str;
}
console.log(lorem('Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry'));