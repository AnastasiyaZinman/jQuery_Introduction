$(document).ready(function(){
    $('h1').css('color', 'blue');
    $('.red-div').css('color','red');
    $('ul li:first-child').css('color','green');
    $('ul li:last-child').css('color','pink');
    $('#brown-div').css('color','brown');
    //Second
    $('#button_1').click(function(){
    alert($('#my-input').val());
    // console.log($('#my-input').val());
    });
   
    //Third
    $('#add_student').click(function(){
    student_new=$('#my-input').val();
    // alert(student_new);
    $('.students').append('<li>'+ student_new+'</li>');
    });
    //bonus    
    $('ul').on('click','li', function(){
      $(this).remove(); 
    });
    });