describe("ArticleToggler", function(){
    let mockArticle;
    let entryGetter;
    let articleToggler;
    let entryGetterSpy;

    beforeAll(function(){
        mockArticle = document.createElement("article");
        entryGetter = new EntryGetter();
        let entryName = "entry4";
        articleToggler = new ArticleToggler(entryName, entryGetter, mockArticle);

    });
    it("should toggle the article on for the first time", function () {
        const promise = new Promise(function(resolve){
            resolve("test")
        });
        entryGetterSpy = spyOn(entryGetter, "fetchArticle").and.returnValue(promise);
        articleToggler.toggleArticle();
        expect(entryGetterSpy.calls.count()).toEqual(1);
        expect(mockArticle.getAttribute("style")).toEqual("display: block;");
    });

    it("should toggle the article off", function(){
        articleToggler.toggleArticle();
        expect(mockArticle.getAttribute("style")).toEqual("display: none;");
    });

    it("should toggle the article on again without calling entryGetter", function(){
        articleToggler.toggleArticle();
        expect(entryGetterSpy.calls.count()).toEqual(1);
        expect(mockArticle.getAttribute("style")).toEqual("display: block;");
    })

});
