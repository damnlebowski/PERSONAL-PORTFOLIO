function namevalid() {
    let name = document.getElementById("name").value
    let tempname = null
    tempname = name.trim()
    var letters = /^[A-Za-z]+$/;
    var spc = /^[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+[A-Za-z]*$/;
    document.getElementById("name").value = tempname;
    if (tempname == "" || name == null) {
      name_error_msg.innerHTML="This field is requierd.";
      return false
    }
    else if (!tempname.match(/^[A-Za-z]+$/)) {
      name_error_msg.innerHTML="Name must be alphabets.";
      return false
    }
    else if (tempname.match(spc)) {
      name_error_msg.innerHTML="Special charecters not allowed.";
      return false
    }
    else {
      name_error_msg.innerHTML=null;
      return true
  
    }
  }
  
  function emailvalid() {
    let email = document.getElementById("email").value
    let tempemail = null
    tempemail = email.trim()
    document.getElementById("email").value = tempemail;
    if (tempemail == "" || email == null) {
      email_error_msg.innerHTML="This field is requierd.";
      return false
    }
    else if (!email.match(/^\w+([\.-]?\w+)@\w+([\.-]?\w+)(\.\w{2,3})+$/)) {
      email_error_msg.innerHTML="Email is invalid.";
      return false
    }
    else {
      email_error_msg.innerHTML=null;
      return true
  
    }
  }

  function subjectvalid() {
    let subject = document.getElementById("subject").value
    let tempsubject = null
    tempsubject = subject.trim()
    document.getElementById("subject").value = tempsubject;
    if (tempsubject == "" || subject == null) {
      subject_error_msg.innerHTML="This field is requierd.";
      return false
    }
    else {
      subject_error_msg.innerHTML=null;
      return true
  
    }
  }

  function messagevalid() {
    let message = document.getElementById("message").value
    let tempmessage = null
    tempmessage = message.trim()
    document.getElementById("message").value = tempmessage;
    if (tempmessage == "" || message == null) {
      message_error_msg.innerHTML="This field is requierd.";
      return false
    }
    else {
      message_error_msg.innerHTML=null;
      return true
  
    }
  }
  