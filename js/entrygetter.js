function EntryGetter(){
    this.fetchArticle = function(entryName){
        return fetch('/JournalEntries/' + entryName + ".html")
            .then(function(response){
                return response.text();
            })
    }
}