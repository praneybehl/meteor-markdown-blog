
scrollPageTo = function(selector) {
    $('body').scrollTop($(selector).offset().top);
};

slugify = function(text) {
    if (text) {
        text = text.replace(/[^-a-zA-Z0-9,&\s]+/ig, '');
        text = text.replace(/-/gi, "_");
        text = text.replace(/\s/gi, "-");
        text = text.toLowerCase();
    }
    return text;
};