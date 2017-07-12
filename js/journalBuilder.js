function JournalBuilder(listOfJournalEntries){

    const entryGetter = new EntryGetter();

    let populateTheJournal = function(){
        let main = document.getElementsByTagName("main")[0];

        Object.keys(listOfJournalEntries).forEach(function(entryName){
            let section = document.createElement("section");

            let h2 = document.createElement("h2");
            h2.innerHTML = listOfJournalEntries[entryName];
            h2.id = entryName + "Title";
            let articleToggler = new ArticleToggler(entryName, entryGetter);
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
