// todo: this demo need to be updated for Firefox.
// it currently focuses only chrome.

function PostBlob(audioBlob, videoBlob, fileName) {
    var formData = new FormData();
    formData.append('filename', fileName);
    formData.append('audio-blob', audioBlob);
    formData.append('video-blob', videoBlob);
    if(jsGet(location.href, 'act') !== null && jsGet(location.href, 'act') !== undefined){
        formData.append('act', jsGet(location.href, 'act'));
        formData.append('id', jsGet(location.href, 'idmess'))
    }else{
        formData.append('act', 'enviado');
    }
    if(jsGet(location.href, 'filhoid') !== null || jsGet(location.href, 'filhoid') !== undefined){
        formData.append('filhoid', jsGet(location.href, 'filhoid'));
        formData.append('email', jsGet(location.href, 'email'));
    }
    xhr('save.php', formData, function(data) {
        var resp = JSON.parse(data)

        document.querySelector('h1').innerHTML = resp.res.replace( /\\n/g , '<br />');
        preview.src =  'http://educamix.com.br/kids/videomsg/'+resp.video;
        preview.play();
        preview.muted = false;
    })

}

var record = document.getElementById('record');
var stop = document.getElementById('stop');

var audio = document.querySelector('audio');

var recordVideo = document.getElementById('record-video');
var preview = document.getElementById('preview');

var container = document.getElementById('container');

var isFirefox = !!navigator.mozGetUserMedia;

var recordAudio, recordVideo;

record.onclick = function() {
    record.disabled = true;
    !window.stream && navigator.getUserMedia({
        audio: true,
        video: true
    }, function(stream) {
        window.stream = stream;
        onstream();
    }, function(error) {
        alert(JSON.stringify(error, null, '\t'));
        alert("Aqui");
    });

    window.stream && onstream();

   function onstream() {
        preview.src = window.URL.createObjectURL(stream);
        preview.play();
        preview.muted = true;

        recordAudio = RecordRTC(stream, {
            type: 'audio',
            recorderType: StereoAudioRecorder,
            // bufferSize: 16384,
            onAudioProcessStarted: function() {
                recordVideo.startRecording();
            }
        });

        var videoOnlyStream = new MediaStream();
        videoOnlyStream.addTrack(stream.getVideoTracks()[0]);
        recordVideo = RecordRTC(videoOnlyStream, {
            type: 'video',
            // recorderType: MediaStreamRecorder || WhammyRecorder
        });

        recordAudio.startRecording();

        stop.disabled = false;
    }
};

function xhr(url, data, callback) {
    var request = new XMLHttpRequest();
    request.onreadystatechange = function() {
        if (request.readyState == 4 && request.status == 200) {
            callback(request.responseText);
        }
    };
    request.open('POST', url);
    request.send(data);
}

var fileName;
stop.onclick = function() {
    //document.querySelector('h1').innerHTML = 'Getting Blobs...';

    record.disabled = false;
    stop.disabled = true;

    preview.src = '';
    preview.poster = 'ajax-loader.gif';

    fileName = Math.round(Math.random() * 99999999) + 99999999;

    if (!isFirefox) {
        recordAudio.stopRecording(function() {
            //document.querySelector('h1').innerHTML = 'Got audio-blob. Getting video-blob...';
            recordVideo.stopRecording(function() {
                document.querySelector('h1').innerHTML = 'Enviando...';
                PostBlob(recordAudio.getBlob(), recordVideo.getBlob(), fileName);
            });
        });
    }
};







