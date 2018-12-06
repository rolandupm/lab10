$(function(){
    $('#button').click(function(){
        $.ajax
		({
		  url: "http://localhost:3000/rf",
		  cache: false,
		  success: function(data){
				console.log(data);
				$("#content").append(data);
		  },
		  error: function(error){
				  console.log(error);
				$("#content").append(error);
		  }
		});
    });
    $('#button2').click(function(){
        $.ajax
		({
		  url: "http://localhost:3000/picture.jpeg",
		  cache: false,
		  success: function(data){
				
				$("#img").attr("src",'http://localhost:3000/picture.jpeg');
				console.log(data);
		  },
		  error: function(error){
				  console.log(error);
		  }
		});
    });
    $('#button3').click(function(){
        $.ajax
		({
		  url: "http://localhost:3000/readFromFile.js",
		  cache: false,
		  success: function(data){
				
				console.log(data);
		  },
		  error: function(error){
				  console.log(error);
		  }
		});
    });
    
    $('#button4').click(function(){
        $.ajax
		({
		  url: "http://localhost:3000/otherAPI",
		  cache: false,
		  success: function(data){
				
				console.log(data);
		  },
		  error: function(error){
				  console.log(error);
		  }
		});
    });
});
