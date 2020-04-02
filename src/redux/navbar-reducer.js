let initialState = {
    friendList: [
        {
            id: 1,
            name: 'Шредер',
            avaSrc: 'https://i.ytimg.com/vi/z9U-E5gpbt4/maxresdefault.jpg'
        },
        {
            id: 2,
            name: 'Бибоп',
            avaSrc: 'https://www.turtlepower.ru/picture.php?albumid=438&pictureid=13811'
        },
        {
            id: 3,
            name: 'Рокстэди',
            avaSrc: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTAr3oC1OiCyifyyBR1lhSiZXSOe0E0VU3fvu0PuShnh024Bhy1&usqp=CAU'
        },
        {
            id: 4,
            name: 'Крэнг',
            avaSrc: 'https://citaty.info/files/characters/45003.jpg'
        }
    ]
};

const navbarReducer = (state = initialState, action) => {

    return state
};

export default navbarReducer;