let id = (id) => document.getElementById(id);

let classes = (classes) => document.getElementsByClassName(classes);

    username = id("username"),
    email = id("email"),
    password = id("password"),
    form = id("form"),
    errorMsg = classes("error"),
    successIcon = classes("success-icon"),
    failureIcon = classes("failure-icon");

    form.addEventListener("submit", (e) => {
        e.preventDefault();

        engine(username, 0, "Username can not be blank.");
        engine(email, 1, "Email can not be blank.");
        engine(password, 2, "Password can not be blank.");
    });


    let engine = (id, serial, message) => {
        if(id.value.trim() === "") {
            errorMsg[serial].innerHTML = message;
            failureIcon[serial].style.opacity = "1";
            successIcon[serial].style.opacity = "0";
        } else {
            errorMsg[serial].innerHTML = "";
            failureIcon[serial].style.opacity = "0";
            successIcon[serial].style.opacity = "1";
        }
    };
