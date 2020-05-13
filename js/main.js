$(document).ready(function () {

    $(".content a").each(function (index, element) {
        $.ajax({
            url: "https://www.instagram.com/goblue42agency/?__a=1",
            contentType: "application/json",
            dataType: 'json',
            success: function (result) {
                $(element).after(
                    '<a href="' + result.graphql.user.edge_owner_to_timeline_media.edges[0].node.display_url + '"> \n ' +
                    '<div class="link-preview"> \n ' +
                    '<div class="preview-image" style="background-image:url(' + result.graphql.user.edge_owner_to_timeline_media.edges[0].node.media_preview + ');"></div> \n ' +
                    '<div style="width:70%;" class="link-info"> \n ' +
                    '<h4>' + result.title + '</h4> \n ' +
                    '<p>' + result.description + '</p> \n ' +
                    '</div><br> \n ' +
                    '<a href="' + result.url + '" class="url-info"><i class="far fa-link"></i>' + result.url + '</a> \n ' +
                    '</div></a>');
                // $(element).remove();
            }
        })
    });
});