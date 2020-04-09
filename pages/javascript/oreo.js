$(document).ready(function() {

    window.fbAsyncInit = function() {
        FB.init({
            appId: '251015596070051',
            autoLogAppEvents: true,
            xfbml: true,
            version: 'v6.0'
        });
    };

    oreo = [];

    console.log("ready!");
    var oreo_height = 200;
    $('#oreo-svg').attr('viewBox', '0 0 245 ' + oreo_height)


    oreo.push({
        'id': '#lay-1',
        'type': 'cookie',
        'x': 0,
        'y': 0,
    });
    oreo.push({
        'id': '#lay-2',
        'type': 'cream',
        'x': 0,
        'y': 0,
    });
    oreo.push({
        'id': '#lay-3',
        'type': 'cookie',
        'x': 0,
        'y': 0,
    });

    function updateOreo(mode) {
        console.log(oreo);
        var add;
        if (oreo[oreo.length - 1].type == 'cookie') {
            if (mode == 'cream') add = 40;
            else add = 25;
        } else {
            if (mode == 'cream') add = 15;
            else add = 5;
        }
        for (x in oreo) {
            var layer = oreo[x];
            oreo[x].y += add;

            val = "translate(" + layer.x + "," + (layer.y) + ")";
            $(layer.id).attr("transform", val);
            console.log($(layer.id).attr("transform"));
        }
        oreo_height += add;
        $('#oreo-svg').attr('viewBox', '0 0 245 ' + oreo_height)
    }

    $('#cookie').click(function() {
        console.log('Add cookie!');
        var elem = $("#lay-3").clone();
        console.log(oreo.length);
        var newid = "lay-" + (oreo.length + 1);
        console.log(newid);
        elem.attr("id", newid);
        elem.attr("transform", "translate(0,0)");
        $('#oreo').append(elem);
        updateOreo('cookie');
        oreo.push({
            'id': '#' + newid,
            'type': 'cookie',
            'x': 0,
            'y': 0,
        });
    });

    $('#cream').click(function() {
        console.log('Add cookie!');
        var elem = $("#lay-2").clone();
        console.log(oreo.length);
        var newid = "lay-" + (oreo.length + 1);
        console.log(newid);
        elem.attr("id", newid);
        elem.attr("transform", "translate(0,0)");
        $('#oreo').append(elem);
        updateOreo('cream');
        oreo.push({
            'id': '#' + newid,
            'type': 'cream',
            'x': 0,
            'y': 0,
        });
    });

    function debugBase64(base64URL) {
        var win = window.open();
        win.document.write('<iframe src="' + base64URL + '" frameborder="0" style="border:0; top:0px; left:0px; bottom:0px; right:0px; width:100%; height:100%;" allowfullscreen></iframe>');
    }



    $("#btnSave").click(function() {
        console.log("Click");
        html2canvas($("#my-oreo")[0]).then(function(canvas) {

            canvas.backgroundColor = null;
            console.log(canvas);
            $("#img-out").append(canvas);
            var url = canvas.toDataURL("image/png".replace("image/png", "image/octet-stream"));
            debugBase64(url);
            /**
             * Display a base64 URL inside an iframe in another window.
             */


            // e.g This will open an image in a new window


        });


        console.log("hi");
    });




});