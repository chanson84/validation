$(document).ready(function () {
    // Object containing the validation rules
    var myRules =
        {
            firstName:{
                required:true;}

            grade:{required: true;
                min:5
                max:8}

        };

    // Object containing the error messages
    var myMessages =
        {
            firstName:
            required:"First Name is Required";
    grade:
    required:"Grade is Required";
        };

    // Pass the configuration to the form's validate() method
    // Needs submitHandler, rules, and messages properties
    $("form").validate(
        {}
    );

    function runMyProgram() {
        // Change the text of the <p> with ID of "message" to
        // state, for example, "You have registered Jane for grade 6 camp!"
        // Use the name and grade the user provided in the form.


    }



});