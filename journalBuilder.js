function EntryGetter(entryName){
    const client = new HttpClient();
    let hasArticleBeenOpened = false;

    function closeTheArticle() {
        document.getElementById(entryName).innerHTML = "";
        hasArticleBeenOpened = false;
    }

    function openTheArticle() {
        client.get('/JournalEntries/' + entryName + ".html", function (response) {
            let entry = document.getElementById(entryName);
            entry.innerHTML = response;
        });
        hasArticleBeenOpened = true;
    }

    this.getArticle = function(){

        if(hasArticleBeenOpened){
            closeTheArticle();
        }else{
            openTheArticle();
        }
    }
}

function HttpClient() {
    this.get = function(aUrl, aCallback) {
        let anHttpRequest = new XMLHttpRequest();
        anHttpRequest.onreadystatechange = function() {
            if (anHttpRequest.readyState === 4 && anHttpRequest.status === 200)
                aCallback(anHttpRequest.responseText);
        };

        anHttpRequest.open( "GET", aUrl, true );
        anHttpRequest.send( null );
    }
}

function JournalBuilder(listOfJournalEntries){

    let populateTheJournal = function(){
        let main = document.getElementsByTagName("main")[0];

        Object.keys(listOfJournalEntries).forEach(function(entryName){
            let section = document.createElement("section");

            let h2 = document.createElement("h2");
            h2.innerHTML = listOfJournalEntries[entryName];
            h2.id = entryName + "Title";
            let getEntry = new EntryGetter(entryName);
            h2.addEventListener("click",getEntry.getArticle);

            let article = document.createElement("article");
            article.id = entryName;

            section.appendChild(h2);
            section.appendChild(article);
            main.appendChild(section)
        });
    };
    populateTheJournal();
}

function getToTryCatchChapter(){
    var wk4Title = document.getElementById("wk4Title");
    wk4Title.click();
    var linkToTryCatchExplanationInWk4 = document.getElementById(”linkToTryCatchExplanationInWk4”);
    linkToTryCatchExplanationInWk4.scrollIntoView();
}
