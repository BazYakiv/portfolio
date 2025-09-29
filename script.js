const content_section = document.getElementById("content");

const pages = content_section.children;



var variables = {

    current_id: 1,

}



function switchPage(index){


    if(index!= variables.current_id){
        
        pages[variables.current_id].classList.add("opaque");
        pages[index].classList.remove("opaque");

        variables.current_id = index;

    }
    

}
