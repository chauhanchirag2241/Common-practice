console.log("custome js runs...");


$(document).ready(function () {
    // your jquery code here


    //Syntax : -  $('selector').action()


    //example of element selector
    // $('p').click(function () {
    //     console.log('click on p');
    //     // $('p').hide();
    //     $(this).hide();  //this.hide
    // });


    //example of id selector.
    $('#firstP').click(function () {
        console.log("id selector clicked.");
    });


    //example of class selector.
    $('.odd').click(function () {
        console.log("class selector odd class.");
    });


    $('p:first').dblclick(function () {
        console.log(" double click clicked on first paragraph.");
    });

    // $('p').mouseenter(function(){
    //     console.log("mouse enterd...");
    // });

    // $('p:odd').hover(function(){
    //     console.log("hoverted in...");
    // });

    $('p').on(
        {
            click: function () {
                console.log('thanks for clicking...', this);
            },

            mouseenter: function () {
                console.log("mouse leave..");
            }


        });

    // $('#wiki').hide(1000);

    //         $('#wiki').hide(3000,function(){
    // console.log('hidden.');
    //         });

    //         $('#wiki').show(1500,function(){
    //             console.log('show');
    //         });

    $('#toggleBtn').click(function () {
        $('#wiki').fadeToggle(1000);
    });

    // fadIn()
    // fadeOut()
    // fadeToggle();
    // fadeTo()

    // $('#wiki').slideToggle();
    // slideToggle()
    // slideDown()
    // slideUp()

    // Animate function in jquery

    // $('#wiki').animate({
    //     opacity: 0.3,
    //     height: '150px',
    //     width: '350px',
    // }, 2000);

    $('#wiki').animate({ opacity: 0.3 }, 4000);
    $('#wiki').animate({ opacity: 0.9 }, 2000);
    $('#wiki').animate({ width: '150px' });

    // $('#wiki').stop();

    //$('body').html()  //give html of body
    //$('p').html('set value')  // set html 

    //$('#wiki').empty() //  empty all child element
    //$('#wiki').remove() // remove element

    //$('#wiki').addClass('myclass') //add css class
    //$('#wiki').removeClass('myclass') //remove class

    // $('#wiki').css('background-color','red')

    //ajax with jquery
    // $.get(utl);

    // $.post(URL,data,callback); 

});