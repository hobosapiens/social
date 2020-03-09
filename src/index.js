import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

// Данные. Их я прокидываю через пропсы [ dialogsElements я закидываю в диалогс через posts={posts} ]
let posts = [
    {id: 1, likeCount: 22, post: 'Commodi earum eligendi impedit itaque nisi nostrum placeat? Debitis delectus eos laborum, quae saepe tempore? Architecto molestiae nostrum quibusdam sunt vel! Quibusdam.'},
    {id: 2, likeCount: 13, post: 'Aut illum impedit sit tenetur. Aliquam beatae consectetur, corporis eaque, est excepturi in iure laboriosam laudantium minima possimus reprehenderit sunt tenetur, ut.'},
]

let dialogs = [
    {id: 1, name: 'Рафаэль'},
    {id: 2, name: 'Микеланджело'},
    {id: 3, name: 'Донателло'},
    {id: 4, name: 'Леонардо'},
    {id: 5, name: 'Сплинтер'},
    {id: 6, name: 'Эйприл'}
];

let messages = [
    {id: 1,message: 'Accusamus amet aperiam consequuntur corporis cum distinctio id ipsum, iure nemo nostrum numquam quaerat qui ullam voluptatem voluptatibus. Cum eligendi laudantium qui.'},
    {id: 2,message: 'Ab consequatur ipsum quidem reprehenderit similique. Animi dolorem eius ex iusto minima molestias, nesciunt nulla qui quibusdam repellendus sequi tenetur vitae voluptate.'},
    {id: 3,message: 'A ad cum cumque eaque, error esse harum impedit iste, mollitia nostrum odio placeat praesentium quam quia reiciendis sunt temporibus totam unde.'},
];

ReactDOM.render(<App posts={posts} dialogs={dialogs} messages={messages} />, document.getElementById('root'));

serviceWorker.unregister();
