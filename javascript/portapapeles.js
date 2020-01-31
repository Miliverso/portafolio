var clipboard = new ClipboardJS('.email');
clipboard.on('success', function(e) {
    alert("Copiado exitoso!");
});

clipboard.on('error', function(e) {

});