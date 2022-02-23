var student={
    name:"Alok Chandra",
    roll:"10",
    subject:{
        bangla:85,
        english:65,
        math:98,
        science:45
    },
    average: function(){

        var result=0;
        for(var i in this.subject){
            // console.log(this.subject[i]);
            result=(result + this.subject[i]) ;

        }

        return result / (Object.keys(this.subject).length) ;

    }
}

console.log(" Average Marks is :-",student.average());



