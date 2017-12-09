navigator.mediaDevices.getUserMedia({
    audio: {
        mandatory: {
            chromeMediaSource: 'desktop',
        }
    },
    video: {
        mandatory: {
            chromeMediaSource: 'desktop'
        }
    }
}).then(stream => {
    stream.getVideoTracks().forEach(track => {
        stream.removeTrack(track);
    });
    vid.srcObject = stream;
})