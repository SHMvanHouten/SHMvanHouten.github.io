function EntryGetter(entryName){
    const client = new HttpClient();
    let hasArticleBeenOpened = false;

    this.getArticle = function(){
        if(hasArticleBeenOpened){
            document.getElementById(entryName).innerHTML = "";
            hasArticleBeenOpened = false;
        }else{
            client.get('/JournalEntries/' + entryName + ".html", function(response){
                let entry = document.getElementById(entryName);
                entry.innerHTML = response;
            });
            hasArticleBeenOpened = true;
        }
    }
}

function HttpClient() {
    this.get = function(aUrl, aCallback) {
        let anHttpRequest = new XMLHttpRequest();
        anHttpRequest.onreadystatechange = function() {
            if (anHttpRequest.readyState == 4 && anHttpRequest.status == 200)
                aCallback(anHttpRequest.responseText);
        };

        anHttpRequest.open( "GET", aUrl, true );
        anHttpRequest.send( null );
    }
}

function JournalBuilder(listOfJournalEntries){

    let populateTheJournal = function(){
        let main = document.getElementsByTagName("main")[0];
        Object.keys(listOfJournalEntries).forEach(function(key){
            let section = document.createElement("section");
            let h2 = document.createElement("h2");
            h2.innerHTML = listOfJournalEntries[key];
            let article = document.createElement("article");
            article.id = key;
            let getEntry = new EntryGetter(key);
            h2.addEventListener("click",getEntry.getArticle);
            section.appendChild(h2);
            section.appendChild(article);
            main.appendChild(section)
        });


        // for(let i=listOfJournalEntries.length -1; i>=0; i--){
        //     let section = document.createElement("section");
        //     let h2 = document.createElement("h2");
        //     h2.innerHTML = listOfJournalEntries[i];
        //     let getEntry = new EntryGetter(i+1);
        //     h2.addEventListener("click",getEntry.getArticle);
        //     section.appendChild(h2);
        //     let article = document.createElement("article");
        //     article.id = "entry" + (i + 1);
        //     section.appendChild(article);
        //     main.appendChild(section)
        // }
    };
    populateTheJournal();
}

function JournalEntry(name, url){
    this.name = name;
    this.url = url;
}