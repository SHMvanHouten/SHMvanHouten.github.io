hasArticleBeenOpened = {};

function getEntry(entry){
    var client = new HttpClient();

    this.getArticle = function(){
        if(hasArticleBeenOpened[entry]){
            document.getElementById(entry).innerHTML = "";
            hasArticleBeenOpened[entry] = false;
        }else{
            client.get('/' + entry, function(response){
                entry = document.getElementById(entry);
                entry.innerHTML = response;
            })
            hasArticleBeenOpened[entry] = true;
        }
    }
    this.getArticle();
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