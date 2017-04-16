function EntryGetter(entry){
    var client = new HttpClient();
    var entryName = "entry" + entry;
    var hasArticleBeenOpened = false;

    this.getArticle = function(){
        if(hasArticleBeenOpened){
            document.getElementById(entryName).innerHTML = "";
            hasArticleBeenOpened = false;
        }else{
            client.get('/' + entryName, function(response){
                entry = document.getElementById(entryName);
                entry.innerHTML = response;
            });
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
        };

        anHttpRequest.open( "GET", aUrl, true );
        anHttpRequest.send( null );
    }
}

function JournalBuilder(listOfJournalEntries){

    var populateTheJournal = function(){
        var main = document.getElementsByTagName("main")[0];
        for(let i=listOfJournalEntries.length -1; i>=0; i--){
            var section = document.createElement("section");
            var h2 = document.createElement("h2");
            h2.innerHTML = listOfJournalEntries[i];
            var getEntry = new EntryGetter(i+1);
            h2.addEventListener("click",getEntry.getArticle);
            section.appendChild(h2);
            var article = document.createElement("article");
            article.id = "entry" + (i + 1);
            section.appendChild(article);
            main.appendChild(section)
        }
    };
    populateTheJournal();
}