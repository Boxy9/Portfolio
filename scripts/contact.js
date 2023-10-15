function sendMail(str) {
    var link = "mailto:davidboxall01@gmail.com?subject=Comments from my Portfolio&body=" + str;
    location.href = link;
}
function submit_comment() {
    var firstName = document.forms["contactMe"]["firstName"].value;
    var lastName = document.forms["contactMe"]["lastName"].value;
    var Email = document.forms["contactMe"]["email"].value;
    var Comment = document.forms["contactMe"]["textarea"].value;
    if (firstName != "" && lastName != "" && Comment != "") {
        var str = "Name : " + firstName + " " + lastName + " %0AEmail : " + Email + "%0AMessage :-%0A" + Comment;
        sendMail(str);
    }
}