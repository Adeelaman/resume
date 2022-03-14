/**
 * ===================================================================
 * custom js
 *
 * -------------------------------------------------------------------
 */
$('.download_resume').on('click', function () {
    let req = new XMLHttpRequest();
    req.open("GET", "/files/adeel_s_resume.pdf", true);
    req.responseType = "blob";

    req.onload = function (event) {
        let blob = req.response;
        console.log(blob.size);
        let link=document.createElement('a');
        link.href=window.URL.createObjectURL(blob);
        link.download="Adeel's_resume.pdf";
        link.click();
    };
    req.send();
    return false;
});

$('.folio-item-table').click(function(e) {
    e.preventDefault();
    let url = $(this).closest('a').attr('href');
    window.open(url, '_blank');
});

$('#sendMail').submit(function (e) {
    e.preventDefault();
    e.stopImmediatePropagation();
    let url = "https://formspree.io/f/mayvbwlo";
    $.ajax({
        url: url,
        method: "POST",
        data: $(this).serialize(),
        dataType: "json",
        success: function (response) {
            if (response.ok) {
                $('#message-success').fadeIn(1000).delay(5000).fadeOut(1000);
                $("#sendMail")[0].reset();
            } else {
                $('#message-warning').fadeIn(1000).delay(5000).fadeOut(1000);
                return false;
            }
        }, error: function (ErrorResponse) {
            $('#message-warning').fadeIn(1000).delay(5000).fadeOut(1000);
            return false;
        }
    });
})
