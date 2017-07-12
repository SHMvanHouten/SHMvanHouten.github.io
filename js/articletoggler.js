function ArticleToggler(entryName, entryGetter){
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
            entryGetter.fetchArticle(entryName)
                .then(function(text){
                    entry.innerHTML = text;
                });
            hasArticleBeenFetched = true;
        }
        hasArticleBeenOpened = true;
    }

    this.toggleArticle = function(){
        if(hasArticleBeenOpened){
            closeTheArticle();
        }else{
            openTheArticle();
        }
    }
}