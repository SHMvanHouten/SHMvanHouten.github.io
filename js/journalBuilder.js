function EntryGetter(entryName){
    let hasArticleBeenOpened = false;

    function closeTheArticle() {
        document.getElementById(entryName).innerHTML = "";
        hasArticleBeenOpened = false;
    }

    function openTheArticle() {
        let entry = document.getElementById(entryName);
        fetch('/JournalEntries/' + entryName + ".html")
            .then(function(response){
                return response.text();
            })
            .then(function(text){
                entry.innerHTML = text;
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

function goToChapter4(){
    const wk4Title = document.getElementById("wk4Title");
    wk4Title.click();
    wk4Title.scrollIntoView();
}
