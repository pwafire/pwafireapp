
var postsRef;
var postArticle;
 // Read firestore data from database in the posts collection
 db.collection("posts").get().then(function(querySnapshot) {
    querySnapshot.forEach(function(doc) {
        // doc.data() is never undefined for query doc snapshots
        console.log(doc.id, " => ", doc.data());
        const posts = doc.data();
        article_url.href = posts.article_url;
        article_title.innerText = posts.article_title;
        article_caption.innerText = posts.article_caption;
    });
});