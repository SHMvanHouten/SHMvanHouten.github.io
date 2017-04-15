function getEntry(entry){
    getter = new ArticleGetter(entry);
    getter.getArticle();
}

function ArticleGetter(entry){
    var client = new HttpClient();
    var hasArticleBeenOpened = false;
    this.getArticle = function(){
        if(hasArticleBeenOpened){
            document.getElementById(entry).innerHTML = "";
            hasArticleBeenOpened = false;
        }else{
            client.get('/' + entry, function(response){
                entry = document.getElementById(entry);
                entry.innerHTML = response;
            })
            hasArticleBeenOpened = true;
        }
    }
}
function HttpClient() {
    this.get = function(aUrl, aCallback) {
        var anHttpRequest = new XMLHttpRequest();
        anHttpRequest.onreadystatechange = function() {
            if (anHttpRequest.readyState == 4 && anHttpRequest.status == 200)
                aCallback(anHttpRequest.responseText);
        }

        anHttpRequest.open( "GET", aUrl, true );
        anHttpRequest.send( null );
    }
}