const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const ADD_MESSAGE = 'ADD-MESSAGE';
const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT';

let store = {
    _state: {
        profilePage: {
            posts: [
                {id: 1, likeCount: 22, post: 'Commodi earum eligendi impedit itaque nisi nostrum placeat? Debitis delectus eos laborum, quae saepe tempore? Architecto molestiae nostrum quibusdam sunt vel! Quibusdam.'},
                {id: 2, likeCount: 13, post: 'Aut illum impedit sit tenetur. Aliquam beatae consectetur, corporis eaque, est excepturi in iure laboriosam laudantium minima possimus reprehenderit sunt tenetur, ut.'},
            ],
            newPostText: 'Post text...'
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
            ],
            newMessageText: 'Message text...'
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
                    avaSrc: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTAr3oC1OiCyifyyBR1lhSiZXSOe0E0VU3fvu0PuShnh024Bhy1&usqp=CAU'
                },
                {
                    id: 4,
                    name: 'Крэнг',
                    avaSrc: 'https://citaty.info/files/characters/45003.jpg'
                }
            ]
        }
    },
    _callSubscriber() {
        console.log('state changed')
    },

    subscribe(observer) {
        this._callSubscriber = observer;
    },
    getState() {
        return this._state;
    },

    dispatch(action){
        if (action.type === 'ADD-POST'){
            let newPost = {
                id: 5,
                likeCount: 0,
                post: this._state.profilePage.newPostText
            };
            if(this._state.profilePage.newPostText){
                this._state.profilePage.posts.push(newPost);
            }
            this._state.profilePage.newPostText = '';
            this._callSubscriber(this._state);
        } else if (action.type === 'UPDATE-NEW-POST-TEXT') {
            this._state.profilePage.newPostText = action.newText;
            this._callSubscriber(this._state);
        } else if (action.type === 'ADD-MESSAGE') {
            let newMessge = {
                id: 5,
                senderClass: 'me',
                message: this._state.dialogsPage.newMessageText
            };
            if(this._state.dialogsPage.newMessageText){
                this._state.dialogsPage.messages.push(newMessge);
            }
            this._state.dialogsPage.newMessageText = '';
            this._callSubscriber(this._state);
        } else if (action.type === 'UPDATE-NEW-MESSAGE-TEXT') {
            this._state.dialogsPage.newMessageText = action.newText;
            this._callSubscriber(this._state);
        }
    }
};

export const addPostActionCreator = () => ({ type: ADD_POST });
export const updateNewPostTextActionCreator = (text) =>
    ({ type: UPDATE_NEW_POST_TEXT,newText: text });
export const addMessageActionCreator = () => ({ type: ADD_MESSAGE });
export const updateNewMessageTextActionCreator = (text) =>
    ({ type: UPDATE_NEW_MESSAGE_TEXT, newText: text});

window.store = store;

export default store;
