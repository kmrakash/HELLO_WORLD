let options = {
    valueNames: [
        {data: ['lang']},                               // Data attribute
        'lang-name',                                    // Language name
        {name: 'lang-image', attr: 'src'},              // Language image
        {name: 'lang-image-attr', attr: 'alt'},         // Language image alt
        'contributor',                                  // Github Contributor (name)
        {name: 'contributor-link', attr: 'href'},       // Github Contributor (link)
    ],
    // Render template
    item: `<div class="col-lg-4 mb-4" data-lang="">
                <div class="card">
                    <img class="card-img-top lang-image lang-image-attr"
                         src=""
                         alt="" />
                    <div class="card-body">
                        <h5 class="card-title text-center lang-name"></h5>
    
                        <div class="col text-center">
                            <a href=""
                               class="btn btn-outline-danger btn-sm contributor contributor-link"></a>
                        </div>
                    </div>
                </div>
            </div>`
};

let list = new List('cards', options, data);

function search(e) {
    list.search(e.value, ['lang-name'])
}

// If there's no results, show "No result found"
list.on('searchComplete', function (e) {
    if (e.matchingItems.length === 0) {
        document.getElementsByClassName('no-results')[0].style.display = "block";
    } else {
        document.getElementsByClassName('no-results')[0].style.display = "none";
    }
})