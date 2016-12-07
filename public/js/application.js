// $(document).ready(function(){
//  $('form').submit(function() {
//    $.ajax({
//      method: "POST",
//      url: "/urls",
//      data: $('form').serialize()
//    }).done(function(response){
//       // console.log(response)
//       // debugger
//      $('table').append('<tr><td>' + response.long_url + '</td><td>' +response.short_url +'</td></tr>')

//    })
//  })
// })





$(document).ready(function(){
    
    $('#url-form').submit(function(e){ //e is for event
        e.preventDefault(); //this disables the button 
        
        //debugger //similar to byebuy, go to the browser console to play around
    // debugger
        $.ajax({
            url: '/urls',
            method: 'POST',
            data: $(this).serialize(),
            dataType: 'json',
            // beforeSend: function(){
                // $('#button').val('Loading');
                // $('.info').empty();      
            success: function(data){
                $('.info').append('<p>Your short url is: ' + '<a href="' + data.short_url + '">' + data.short_url + '</a></p>');

                $('table').append('<tr><td>' + '<a href="' + data.long_url + '">' + data.long_url + '</a>' + '</td>' + 
                	'<td>' +data.short_url +'</td>' +
                	'<td>' +  data.click_count + '</td>' + 
                   '</tr>')
          
                // alert('success')                 
            }, 
            error: function(data){
            	alert('fail')
                // $('.info').append('<p>Oops! Please check your url - it should start with http:// or http://s.</p>');
                // $('#button').val('Submit');
            } 
        });        
    });
});