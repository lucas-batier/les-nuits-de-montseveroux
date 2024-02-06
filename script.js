function automatedScrollingText() {
    const viewportWidth = window.innerWidth;

    $('.scroll-text').each(function () {
        const textWidth = $(this).children().children()[0].clientWidth;
        const numberOfCopies = Math.ceil(viewportWidth / textWidth);

        const text = Array.from({length: numberOfCopies}, () => $(this).children().children().html()).join('');
        $(this).html('<div><span>' + text + '</span><span>' + text + '</span>')
        // $(this).html(text);
    });
}

$(window).on('load', function () {
    automatedScrollingText();
});