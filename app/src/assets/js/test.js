const cafeList = document.querySelector('#cafe-list');

// create element and render cafe to the dom
function renderCafe(doc) {
    let li = document.createElement('li');
    let article_title = document.createElement('span');
    let article_caption = document.createElement('span');

    li.setAttribute('data-id', doc.id);
    article_title.textContent = doc.data().article_title;
    article_caption.textContent = doc.data().article_caption;

    li.appendChild(article_title);
    li.appendChild(article_caption);

    cafeList.appendChild(li);

}

db.collection('posts').get().then((snapshot) => {
    snapshot.docs.forEach(doc => {
        console.log(doc.data());
        // call the render function
        renderCafe(doc);
    } ) ;
});
