chrome.app.runtime.onLaunched.addListener(function() {
    chrome.app.window.create('../html/hello.html', {
        'id': 'PirateWindow',
        'outerBounds': {
            'width': 800,
            'height': 600
        }
    });
});
