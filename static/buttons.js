function create_box(startbox,box1,json_info) {
  var flipcard = document.createElement("div");
  var flipcardinner = document.createElement("div");
  var flipcardfront = document.createElement("div");
  var flipcardback = document.createElement("div");
  var firstiteam = document.createElement("span")


  flipcard.classList.add("flipcard")
  flipcardinner.classList.add("flipcardinner")
  flipcardfront.classList.add("flipcardfront")
  flipcardback.classList.add("flipcardback")
  firstiteam.classList.add("firstiteam")
  firstiteam.classList.add("center")

  var startboxtxt = document.createTextNode(startbox);
  flipcardfront.appendChild(startboxtxt);


    if (box1.startsWith("../") == true) {
      var imgage = document.createElement("IMG");
      imgage.setAttribute("src", box1);
      imgage.classList.add("img_projects")

      firstiteam.appendChild(imgage);
    }

    else {
        var flipcardfronttxt = document.createTextNode(box1);
        firstiteam.appendChild(flipcardfronttxt);
    }

    flipcardback.appendChild(firstiteam)

    if (json_info !== undefined){
        var text = document.createElement("p")
      var seconditeam = document.createElement("span")
      seconditeam.classList.add("seconditeam")
      seconditeam.classList.add("center")


      var flipcardfronttxt = document.createTextNode(json_info.text);
        text.appendChild(flipcardfronttxt);
      seconditeam.appendChild(text);
      flipcardback.appendChild(seconditeam)
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

function pre_flipped_box(box1,box2){


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
    footer.classList.add("footer")

    var footertxt = document.createTextNode("hello");
    footer.appendChild(footertxt);

    fullwidth.appendChild(footer)

}

function projects(JSON_data){
  clearing()
  create_box("spotify quiz","../static/img/spotify_quiz.png",JSON_data.projects.spotifyQuiz)
  create_box("twitter_bot", "../static/img/Pringles-Logo.png",JSON_data.projects.twitter_bot)
  create_box("top_40_data", "../static/img/top_40.png",JSON_data.projects.top_40_data)
  create_box("twitter cancel culture dissertation", "../static/img/cancel.jpg",JSON_data.projects.dissertation)
  create_box("spotifywrapped", "false",JSON_data.projects.spotifywrapped)

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
  create_box("Personal_summary","../static/img/stock.jpg",JSON_data.aboutme.Personal_summary)
  create_box("Education", "../static/img/stock.jpg",JSON_data.aboutme.Education)
  create_box("work", "../static/img/stock.jpg",JSON_data.aboutme.work)
  create_box("personal_interests", "../static/img/stock.jpg",JSON_data.aboutme.personal_interests)
}

function contact(JSON_data){
    clearing()
}