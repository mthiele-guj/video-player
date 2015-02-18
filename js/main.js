var vjsPlayer = null,
    playerId = "video-player",
    videoEl = $('#' + playerId)[0];

function removePlayer() {
    if (vjsPlayer) {
        vjsPlayer.dispose();
        vjsPlayer = null;
    }
    $('#video-wrapper').remove();
    console.time('videojs error after');
    window.onerror = function () {
        console.timeEnd('videojs error after');
    }
}

function initPlayer() {
    if (window.bc && window.videojs) {
        vjsPlayer = window.videojs(playerId);
        vjsPlayer.ready(function () {
            initPlayerPlugin();
        });
    }
}

function initPlayerPlugin() {
    vjsPlayer.ima3.settings.adServerUrl = 'https://solutions.brightcove.com/dlapalomento/bc-ima3-demo/test-skippable-ad.xml?test=1';
}

$(document).ready(function () {
    initPlayer();
    $('button').on('click', function () {
        removePlayer();
        $(this).text('wait and watch console output ...');
    });
});