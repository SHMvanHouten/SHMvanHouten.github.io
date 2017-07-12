function ArticleToggler(entryName){
    let hasArticleBeenFetched = false;
    let hasArticleBeenOpened = false;

    function closeTheArticle() {
        document.getElementById(entryName).style.display = "none";
        hasArticleBeenOpened = false;
    }

    function openTheArticle(){
        let entry = document.getElementById(entryName)
        entry.style.display= "block";
        if(!hasArticleBeenFetched){
            fetchArticle(entryName)
                .then(function(text){
                    entry.innerHTML = text;
                });
            hasArticleBeenFetched = true;
        }
        hasArticleBeenOpened = true;
    }

    function fetchArticle() {
        return fetch('/JournalEntries/' + entryName + ".html")
            .then(function(response){
                return response.text();
            })
    }

    this.toggleArticle = function(){
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
            let articleToggler = new ArticleToggler(entryName);
            h2.addEventListener("click",articleToggler.toggleArticle);

            let article = document.createElement("article");
            article.id = entryName;
            article.style.display = "none";

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
