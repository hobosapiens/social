// Данные. Их я прокидываю через пропсы [ dialogsElements я закидываю в диалогс через posts={posts} ]
let state = {
    profilePage: {
        posts: [
            {id: 1, likeCount: 22, post: 'Commodi earum eligendi impedit itaque nisi nostrum placeat? Debitis delectus eos laborum, quae saepe tempore? Architecto molestiae nostrum quibusdam sunt vel! Quibusdam.'},
            {id: 2, likeCount: 13, post: 'Aut illum impedit sit tenetur. Aliquam beatae consectetur, corporis eaque, est excepturi in iure laboriosam laudantium minima possimus reprehenderit sunt tenetur, ut.'},
        ]
    },
    dialogsPage: {
        dialogs: [
            {id: 1, name: 'Рафаэль'},
            {id: 2, name: 'Микеланджело'},
            {id: 3, name: 'Донателло'},
            {id: 4, name: 'Леонардо'},
            {id: 5, name: 'Сплинтер'},
            {id: 6, name: 'Эйприл'}
        ],
        messages: [
            {id: 1, senderClass: 'me', message: 'Accusamus amet aperiam consequuntur corporis cum distinctio id ipsum, iure nemo nostrum.'},
            {id: 2, senderClass: 'interlocutor', message: 'Ab consequatur ipsum quidem reprehenderit similique. Animi dolorem eius ex.'},
            {id: 3, senderClass: 'me', message: 'A ad cum cumque eaque.'},
            {id: 4, senderClass: 'me', message: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda, at corporis cum cumque.'},
            {id: 5, senderClass: 'interlocutor', message: 'Asperiores at aut cupiditate!'},
        ]
    },
    navbar: {
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
                avaSrc: 'https://24smi.org/public/media/resize/800x-/person/2018/06/16/ulvuirmoxmtv-rokstedi.jpg'
            },
            {
                id: 4,
                name: 'Крэнг',
                avaSrc: 'https://24smi.org/public/media/resize/800x-/2018/6/20/imgonline-com-ua-resize-bd1yyb36mkjc.jpg'
            }
        ]
    }
};

export default state;
