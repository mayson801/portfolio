function create_box(startbox,box1,json_info) {
    var flipcard = document.createElement("div");
    var flipcardinner = document.createElement("div");
    var flipcardfront = document.createElement("div");
    var flipcardtextbox = document.createElement("p");
    var flipcardback = document.createElement("div");
    var firstiteam = document.createElement("span")


    flipcard.classList.add("flipcard")
    flipcardinner.classList.add("flipcardinner")
    flipcardfront.classList.add("flipcardfront")
    flipcardback.classList.add("flipcardback")
    firstiteam.classList.add("firstiteam")
    firstiteam.classList.add("center")

    var startboxtxt = document.createTextNode(startbox);
    flipcardtextbox.appendChild(startboxtxt);
    flipcardfront.appendChild(flipcardtextbox);

    flipcardback.appendChild(firstiteam)
    var seconditeam = document.createElement("span")
    seconditeam.classList.add("seconditeam")
    flipcardback.appendChild(seconditeam)

      var imgage = document.createElement("IMG");
      imgage.setAttribute("src", box1);
      imgage.classList.add("img_projects")

      firstiteam.appendChild(imgage);

    if (json_info !== undefined) {
        for (text of json_info.text) {
            var text_p = document.createElement("p")
            seconditeam.classList.add("center")

            var flipcardbacktxt = document.createTextNode(text);
            text_p.appendChild(flipcardbacktxt);
            seconditeam.appendChild(text_p);
        }
        if (json_info.weblinks !== undefined) {
            var weblink_container = document.createElement("div")
            weblink_container.classList.add("skills_and_links_div")
            seconditeam.appendChild(weblink_container)

            for (weblink in json_info.weblinks) {
                var weblink_iteam = document.createElement("a")
                weblink_iteam.href = json_info.weblinks[weblink]
                var weblink_txt = document.createTextNode(weblink);

                weblink_iteam.appendChild(weblink_txt)
                weblink_container.appendChild(weblink_iteam)
                console.log(json_info.weblinks[weblink])
            }
        }

        if (json_info.skills !== undefined) {
            var skills_container = document.createElement("div")
            skills_container.classList.add("skills_and_links_div")
            seconditeam.appendChild(skills_container)
            for (skill of json_info.skills) {
                var skills_used = document.createElement("a")
                skills_used.classList.add("skills_used")
                var skills_used_txt = document.createTextNode(skill);

                skills_used.appendChild(skills_used_txt)
                skills_container.appendChild(skills_used)
            }
        }


    }

    flipcardinner.appendChild(flipcardback)
    flipcardinner.appendChild(flipcardfront)

    flipcard.appendChild(flipcardinner)

    fullwidth = document.getElementById("full-width");
    fullwidth.appendChild(flipcard)

}

function clearing(){
  console.log("clear")
  const myNode = document.getElementById("full-width");
  while (myNode.firstChild) {
    myNode.removeChild(myNode.lastChild);
  }
}
function footer(){
    fullwidth = document.getElementById("full-width");

    var footer = document.createElement("div")
    footer.id = "footer"
    var footertxt = document.createTextNode("footer");
    footer.appendChild(footertxt);
    fullwidth.appendChild(footer)

}

function projects(JSON_data){
  clearing()
  create_box("spotify quiz","../static/img/spotify_quiz.png",JSON_data.projects.spotifyQuiz)
  create_box("twitter bot", "../static/img/Pringles-Logo.png",JSON_data.projects.twitter_bot)
  create_box("uk top 40 study", "../static/img/top_40.png",JSON_data.projects.top_40_data)
  create_box("twitter cancel culture dissertation", "../static/img/cancel.jpg",JSON_data.projects.dissertation)
  create_box("spotify wrapped Comparing", "../static/img/spotify_wrapped.png",JSON_data.projects.spotifywrapped)
  footer()
}

function skills(JSON_data){
    clearing()
  create_box("front end","../static/img/stock.jpg",JSON_data.projects.front_end)
  create_box("back end", "false",JSON_data.projects.back_end)
  create_box("databases", "false",JSON_data.projects.data_managment)
  create_box("other", "false",JSON_data.projects.other)
}

function about(JSON_data){
    clearing()
    create_box("Personal Summary","../static/img/stock.jpg",JSON_data.projects.aboutme.Personal_summary)
    create_box("Education", "../static/img/graduate.jpg",JSON_data.projects.aboutme.Education)
    create_box("work", "../static/img/stock.jpg",JSON_data.projects.aboutme.work)
    create_box("Voluntary Experience", "../static/img/stock.jpg",JSON_data.projects.aboutme.Voluntary_Experience)
    create_box("Personal Interests", "../static/img/stock.jpg",JSON_data.projects.aboutme.personal_interests)
    footer()
}

function home(){
    clearing()
    var image_span = document.createElement("span");
    var text_span = document.createElement("span")
    var image = document.createElement("IMG");
     image_span.classList.add("center");
     image_span.classList.add("firstiteam")
     text_span.classList.add("center");
     text_span.classList.add("seconditeam");
     image.classList.add("img_projects");
     image.style.objectFit ="cover"

    image.setAttribute("src", "../static/img/me.jpg");
     var text = document.createTextNode("My name is Matthew Mayson.Welcome to my portfolio")

    fullwidth = document.getElementById("full-width");
    fullwidth.appendChild(image_span)
    fullwidth.appendChild(text_span)
    image_span.appendChild(image)
    text_span.appendChild(text)

}