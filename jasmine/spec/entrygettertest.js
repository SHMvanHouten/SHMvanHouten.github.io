describe("EntryGetter", function(){
    beforeEach(function(){
        jasmine.Ajax.install();
    });

    afterEach(function(){
        jasmine.Ajax.uninstall();
    });

    xit("should do an Ajax call for the specified entryName", function(){
        let entryGetter = new EntryGetter();
        let response = entryGetter.fetchArticle("entry4");
        expect(jasmine.Ajax.requests.mostRecent().url).toBe('JournalEntries/entry4.html');

        jasmine.Ajax.requests.mostRecent().respondWith({
            "status" : 200,
            "contentType": 'text/plain',
            "responseText" : "test"
        });
        response = response.then(function(data){return data});
        expect(response.responseText).toEqual("test");
    })
});