function feedback() {
    var nameobj = document.getElementById("namet");
    var emailobj = document.getElementById("emailt");
    var contactobj = document.getElementById("contactt");
    var commentobj = document.getElementById("commentt");
    
    if (!nameobj.checkValidity()) {
      var element = document.getElementById("namet");
      element.classList.remove("is-valid");
      element.classList.add("is-invalid");
      document.getElementById("namep").innerHTML = nameobj.validationMessage;
    }
    if (nameobj.checkValidity()) {
      var element = document.getElementById("namet");
      element.classList.remove("is-invalid");
      element.classList.add("is-valid");
    }
    
    if (!emailobj.checkValidity()) {
      var element = document.getElementById("emailt");
      element.classList.remove("is-valid");
      element.classList.add("is-invalid");
      document.getElementById("emailp").innerHTML = emailobj.validationMessage;
    }
    if (emailobj.checkValidity()) {
      var element = document.getElementById("emailt");
      element.classList.remove("is-invalid");
      element.classList.add("is-valid");
    }
    if (!contactobj.checkValidity()) {
      var element = document.getElementById("contactt");
      element.classList.remove("is-valid");
      element.classList.add("is-invalid");
      document.getElementById("contactp").innerHTML = contactobj.validationMessage;
    }
    if (contactobj.checkValidity()) {
      var element = document.getElementById("contactt");
      element.classList.remove("is-invalid");
      element.classList.add("is-valid");
    }
    var phoneno = /^\+?([0-9]{2})\)?[-. ]?([0-9]{4})[-. ]?([0-9]{4})$/;
    if((contactobj.value.match(phoneno))){
      var element = document.getElementById("contactt");
      element.classList.remove("is-invalid");
      element.classList.add("is-valid");
    }
    if((!contactobj.value.match(phoneno))){
      var element = document.getElementById("contactt");
      element.classList.remove("is-invalid");
      element.classList.add("is-invalid");
      document.getElementById("contactp").innerHTML = "Not valid Phone number.Ex:-'0123456789'";
    }
    if (!commentobj.checkValidity()) {
        var element = document.getElementById("commentt");
        element.classList.remove("is-valid");
        element.classList.add("is-invalid");
        document.getElementById("commentp").innerHTML = commentobj.validationMessage;
      }
      if (commentobj.checkValidity()) {
        var element = document.getElementById("commentt");
        element.classList.remove("is-invalid");
        element.classList.add("is-valid");
      }
    
    if((nameobj.checkValidity())&& (emailobj.checkValidity())&&(contactobj.checkValidity())&& (departmentobj.checkValidity())&&((contactobj.value.match(phoneno)))){
      alert("Successful add feedback details!!!");
      window.location = '/feed.html';
    }
  } 

