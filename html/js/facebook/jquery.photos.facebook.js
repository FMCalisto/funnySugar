jQuery(function($) {
    var fqlUserId = '1439920606220380';    // the user id
    var fqlAlbumId = '1073741853';    // the album id
    var fqlQuery = "SELECT src_big, caption, src_small, src FROM photo WHERE owner = " + fqlUserId + " AND aid = '" + fqlUserId + '_' + fqlAlbumId + "'";

    $.getJSON("https://api.facebook.com/method/fql.query?format=json&amp;callback=?&amp;query=" + escape(fqlQuery), function(data) {
        for (var i = 0; i < data.length; i++) {
            jQuery('<img src="' + data[i].src_small + '" alt="' + data[i].caption + '" />').appendTo('body');
        }
    });
});