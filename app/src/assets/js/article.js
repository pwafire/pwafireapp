
console.log("Loading Article"); 
function postArticle()
{
    var article_url = document.getElementById('article_url').value;
    var article_title = document.getElementById('article_title').value;
    var article_caption = document.getElementById('article_caption').value;
    console.log(article_url);
    console.log(article_title);
    console.log(article_caption);
    
   // Add a new document with a generated id.
    db.collection("posts").add({
        article_url: article_url,
        article_title: article_title,
        article_caption: article_caption    
    })
    
    .then(function(docRef) {
        console.log("Document written with ID: ", docRef.id);
    })
    .catch(function(error) {
        console.error("Error adding document: ", error);
    });
    
}

// redirect to homepage on sending article_title
document
.getElementById("formRedirect")
  .addEventListener("submit", function(e) {
    e.preventDefault();
    window.location.href = "../latest";
  });
