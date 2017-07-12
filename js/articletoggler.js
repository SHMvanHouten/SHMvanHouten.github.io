function ArticleToggler(entryName, entryGetter, article){
    let hasArticleBeenFetched = false;
    let hasArticleBeenOpened = false;

    function closeTheArticle() {
        article.style.display = "none";
        hasArticleBeenOpened = false;
    }

    function openTheArticle(){
        article.style.display= "block";
        if(!hasArticleBeenFetched){
            entryGetter.fetchArticle(entryName)
                .then(function(text){
                    article.innerHTML = text;
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