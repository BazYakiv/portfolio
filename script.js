const content_section = document.getElementById("content");

const projects_section = document.getElementById("projects-bar")

const pages = content_section.children;

const projects_array = [
    {
        title: "Generacja sferycznej mapy hexagonalnej",
        description: "Projekt stworzony na unity z wykorzystaniem szumu Perlina do tworzenia zróżnicowanych terenów",
        link: "https://www.youtube.com/embed/sTW2XQKCxy8",
        tag: "Unity",
    },
    {
        title: "Aplikacja dla pracowników",
        description: "Projekt stworzony na React z wykorzystaniem Firebase i Next.js",
        link: "https://www.youtube.com/embed/nJeg303FZ6A",
        tag: "Inne",
    },
    {
        title: "belac.pl",
        description: "Projekt na Wordpress, link: <a href='https:/belac.pl'>belac.pl</a>",
        link: "https://www.youtube.com/embed/xxVaPTFjMYs",
        tag: "Inne",
    },
    {
        title: "GARDIO",
        description: "Podstawowa gra na Unity która zawiera mechanikę ruchu z systemem animacji i własnym modelem zrobionym w Blender",
        link: "https://www.youtube.com/embed/y_zMD-uQv9w",
        tag: "Unity",
    },
    {
        title: "Youtube Downloader",
        description: "Podstawowa aplikacja stworzona za pomocą Python która pobiera filmiki z Youtube",
        link: "https://www.youtube.com/embed/wj4bBQWdIrc",
        tag: "Inne",
    },
    {
        title: "SGVR",
        description: "Silnik dla gier VR stworzony na Unity.",
        link: "https://www.youtube.com/embed/G5QOee5dsY0",
        tag: "Unity",
    },
]

let projects_divs = [];

var variables = {

    current_id: 0,

}

class project {

    constructor(video_url, title, description, tag) {
        this.object = createTemplate(video_url, title, description)
        this.tag = tag;
    }

}

function createTemplate(video_url, title, description) {

    const div = document.createElement('div');
    div.innerHTML = `
        <iframe class="ytb-video" src="${video_url}"></iframe>
        <h4>${title}</h4>
        <p>${description}</p>
    `;
    div.className = 'project-div';

    return div;

}





function setup() {

    for (let i = 0; i < projects_array.length; i++) {
        newproject = new project(projects_array[i].link, projects_array[i].title, projects_array[i].description, projects_array[i].tag)
        obj = newproject.object

        projects_section.append(obj);

        projects_divs.push(newproject);
    }

}

function showSelectedTags(tag) {
   
    projects_divs.forEach(project => {
        if(project.tag != tag){
            project.object.remove();
        }else{
            projects_section.append(project.object);
        }
    });
}

function showAll(){
    projects_section.innerHTML = '';
    projects_divs.forEach(project => {
       
        projects_section.append(project.object);
    });
    const radios = document.querySelectorAll('input[name="Filter"]');
    radios.forEach(radio => {
        radio.checked = false
    });
}


function proccessTags(){
   
    const radios = document.querySelectorAll('input[name="Filter"]');

    radios.forEach(radio => {
        if (radio.checked){
            showSelectedTags(radio.value);
        }
    });
}


function switchPage(index) {

    if (index != variables.current_id) {

        pages[variables.current_id].classList.add("opaque");
        pages[index].classList.remove("opaque");

        variables.current_id = index;

    }

}


setup()