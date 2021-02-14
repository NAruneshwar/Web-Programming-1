let myForm = $('#searchForm');
let divshow = $('#show');
let UL = $('#showList');
let search_term = $('#search_term');
let homeLink = $('#homeLink');


homeLink.hide()
UL.hide()
UL.empty()

$(myForm).on("submit",function(event){
    event.preventDefault();
    let search_term = $('#search_term').val();


    if(search_term.length == 0 || search_term.trim() == ""){
      divshow.html("Input can't be empty");
      divshow.show()
      return
    }
    else{
      divshow.hide()
      divshow.empty()
      $.ajax({method: 'GET', url: "http://api.tvmaze.com/search/shows?q="+search_term+"", success: function(result){
        // console.log(result)
        if(result.length==0){
          divshow.html('There were no results for the given search, please try again')
          divshow.show()
          homeLink.show()
          return
        }else{
          UL.empty()
          $.each(result, function(key, value){
            // console.log(value);
            $(UL).append("<li><a href ="+value.show._links.self.href+">"+value.show.name+"</li>")
          });
          divshow.empty()
          divshow.hide()
          UL.show()
          homeLink.show()
          $('ul#showList li a').on("click",function(event){
            event.preventDefault();
            var url = $(this).attr('href');
            // console.log(url)
            $.ajax({method: 'GET', url: url, success: function(eachresult){
              divshow.empty()
              divshow.hide()
            // console.log(eachresult);
             let elements_tag = $('<dl id ="dlt"> </dl>')
             if(eachresult.name){
               elements_tag.append('<h1>'+eachresult.name+'</h1>')
              }else{
                elements_tag.append('N/A')
              }
              if(eachresult.image){
               elements_tag.append('<img alt= "'+eachresult.name+'" src="'+eachresult.image.medium+'"/>')
              }
              else{
                elements_tag.append('<img alt= "'+eachresult.name+'" src="public/images/no_image.jpeg">')
              }
               elements_tag.append('<dl>') 
               elements_tag.append('<dt>Language</dt>')
               if(eachresult.Language){
                elements_tag.append('<dd>'+eachresult.Language+'</dd>')
               }else{
                elements_tag.append('<dd>N/A</dd>')
               }
               elements_tag.append('<dt>Genres</dt>')
               elements_tag.append('<dd>') 
               elements_tag.append('<ul>') 
               if(eachresult.genres.length!= 0){
                $.each(eachresult.genres, function(key, value){
                  elements_tag.append('<li>'+value+'</li>');
                });
              }
              else{
                elements_tag.append('<li>N/A</li>');
              }
                elements_tag.append('</ul>')
                elements_tag.append('</dd>')
                elements_tag.append('<dt>Average Rating</dt>')
                if(eachresult.rating.average){
                  elements_tag.append('<dd>'+eachresult.rating.average+'</dd>')
                }
                else{
                  elements_tag.append('<dd>N/A</dd>')
                }
                elements_tag.append('<dt>Network</dt>')
                if(eachresult.network){
                  elements_tag.append('<dd>'+eachresult.network.name+'</dd>')
                }
                else{
                  elements_tag.append('<dd>N/A</dd>')
                }
                elements_tag.append('<dt>Summary</dt>')
                if(eachresult.summary){
                elements_tag.append('<dd>'+eachresult.summary+'</dd>')
                }
                else{
                  elements_tag.append('<dd>N/A</dd>')
                }
      
                elements_tag.append('</dl>')
                UL.hide()
                UL.empty()
                divshow.append(elements_tag)
                divshow.show()
                homeLink.show()
              }});
            });
          
        }

      }
    });
  
  }

    // console.log(prime)
  });


$.ajax({method: 'GET', url: "http://api.tvmaze.com/shows", success: function(result){
    $.each(result, function(key, value){
      $(UL).append("<li><a href ="+value._links.self.href+">"+value.name+"</li>")
    });
    divshow.hide()
    UL.show()
    $('ul#showList li a').on("click",function(event){
      event.preventDefault();
      var url = $(this).attr('href');
      // console.log(url)
      $.ajax({method: 'GET', url: url, success: function(eachresult){
      // console.log(eachresult);
      divshow.hide()
      divshow.empty()
       let elements_tag = $('<dl id ="dlt"> </dl>')
       if(eachresult.name){
         elements_tag.append('<h1>'+eachresult.name+'</h1>')
        }else{
          elements_tag.append('N/A')
        }
        if(eachresult.image.medium){
         elements_tag.append('<img alt= "'+eachresult.name+'" src="'+eachresult.image.medium+'"/>')
        }
        else{
          elements_tag.append('<img alt= "'+eachresult.name+'" src="/public/images/no_image">')
        }
         elements_tag.append('<dl>') 
         elements_tag.append('<dt>Language</dt>')
         if(eachresult.Language){
          elements_tag.append('<dd>'+eachresult.Language+'</dd>')
         }else{
          elements_tag.append('<dd>N/A</dd>')
         }
         elements_tag.append('<dt>Genres</dt>')
         elements_tag.append('<dd>') 
         elements_tag.append('<ul>') 
         if(eachresult.genres.length!= 0){
          $.each(eachresult.genres, function(key, value){
            elements_tag.append('<li>'+value+'</li>');
          });
        }
        else{
          elements_tag.append('<li>N/A</li>');
        }
          elements_tag.append('</ul>')
          elements_tag.append('</dd>')
          elements_tag.append('<dt>Average Rating</dt>')
          if(eachresult.rating.average){
            elements_tag.append('<dd>'+eachresult.rating.average+'</dd>')
          }
          else{
            elements_tag.append('<dd>N/A</dd>')
          }
          elements_tag.append('<dt>Network</dt>')
          if(eachresult.network){
            elements_tag.append('<dd>'+eachresult.network.name+'</dd>')
          }
          else{
            elements_tag.append('<dd>N/A</dd>')
          }
          elements_tag.append('<dt>Summary</dt>')
          if(eachresult.summary){
          elements_tag.append('<dd>'+eachresult.summary+'</dd>')
          }
          else{
            elements_tag.append('<dd>N/A</dd>')
          }

          elements_tag.append('</dl>')
          UL.hide()
          UL.empty()
          divshow.append(elements_tag)
          divshow.show()
          homeLink.show()
        }});
      });
}});


// function showdetails(value){
  
//   // value.preventDefault();
//   var url = $(this).attr('href');
//   console.log(url)
//   return false

// }

 
