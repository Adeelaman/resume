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
