$('#navbar').load('/pages/navbar.html', function (data) {
    $('#navbar').replaceWith(data);

});