function validate(){
    var valid_fname = document.forms["my_form"]["fname"].value;
    var valid_lname = document.forms["my_form"]["lname"].value;
    var valid_age = document.forms["my_form"]["age"].value;
    var valid_email = document.forms["my_form"]["email"].value;
    var valid_pass = document.forms["my_form"]["password"].value; 
 
    if(valid_fname==""){
        document.getElementById("fname").innerHTML="Enter Valid First Name "
        return false;
    }
    if(valid_lname==""){
        document.getElementById("lname").innerHTML="Enter Valid Last Name "
        return false;
    }
    if(valid_age=="" ){
        document.getElementById("age").innerHTML="Enter Age"
        return false;
    }
   if(valid_age.length < 1){
      document.getElementById("num").innerHTML="Age must be > 0"
        return false;
   }

    if(valid_email==""){
        document.getElementById("email").innerHTML="Enter email"
        return false;
    }

    if(valid_pass==""){
        document.getElementById("pass").innerHTML=" Enter Password"
        return false;
    }
    if((valid_pass.length < 8) )
    document.getElementById("pass").innerHTML=" Password must be > 8 chars length"
        return false;  
  }
  function returnValues(){
      var firstName = document.getElementById("fname").value;
      localStorage.setItem("FirstName", firstName);

      var lastName = document.getElementById("lname").value;
      localStorage.setItem("LastName", lastName);

      var age = document.getElementById("age").value;
      localStorage.setItem("Age", age);

      var email = document.getElementById("email").value;
      localStorage.setItem("Email", email);

      var pass = document.getElementById("password").value;
      localStorage.setItem("Password", pass);
      return false;

  }