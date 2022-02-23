//    here some data for log in ...........
  var person={
          
        alok:{
            username:"alok234",
            password:"hey12345"
        },
      
        samiul:{
            username:"samiul44",
            password:"hey1345"
        }

        
  }

     

  function login(user,pass){


      var post="";   // this is a value for print..........


      for(var i in person){


        //   console.log(person[i].username);

        //  here is the user name and password  this is enter before.....


          var userName=person[i].username;
          var passWord=person[i].password;

        //   console.log(userName,passWord);

          if(userName==user  && passWord==pass){
            post+="hey," + " " + userName ;
            
            
            
            
        }
         else{
             
            post += "It is not correct plz try again....";

            
         
         }
         
        

      }
      

    //    return post.............
      
        return post;
     
  }
   
//    input your user name and password..........

     var username="samiul44";
     var password="hey1345";


    //  calling this function..............

  var user=login(username ,password);
  console.log(user);