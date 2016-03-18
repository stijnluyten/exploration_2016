chrome.app.runtime.onLaunched.addListener(function() {
    chrome.app.window.create('../html/hello.html', {
        'outerBounds': {
            'width': 800,
            'height': 600
        }
    });
});
