'use strict';

// Call this function when the page loads (the "ready" event)
$(document).ready(function() {
	initializePage();
})

/*
 * Function that is called when the document is ready.
 */
function initializePage() {
	$("#testjs").click(function(e) {
		$('.jumbotron h1').text("Javascript is connected");
		$("#testjs").text("Please wait...");
		$(".jumbotron p").toggleClass("active");
	});

	// Add any additional listeners here
	// example: $("#div-id").click(functionToCall);
	$("a.thumbnail").click(projectClick);

	$("#submitBtn").click(updateProject); 
}

function updateProject(e) {
   var projectID = $('#project').val();
   $(projectID).animate({
      width: $('#width').val()
   });

   var newText = $('#description').val();
   $(projectID + " .project-description").text(newText);
}

var n = 0;
function projectClick(e)
{
  /*
  console.log("Project clicked");

  // prevent the page from reloading
  e.preventDefault();

  // In an event handler, $(this) refers to
  // the object that triggered the event
  $(this).css("background-color", "#7fff00");
  */

  // Cancel the default action, which prevents the page from reloading
  e.preventDefault();

  // In an event listener, $(this) is the element that fired the event
  var projectTitle = $(this).find("p").text();
  var jumbotronHeader = $(".jumbotron h1");
  jumbotronHeader.text(projectTitle);

  var containingProject = $(this).closest(".project");
  //containingProject.append("<div class='project-description'><p>Description of the project.</p></div>");
  var description = $(containingProject).find(".project-description");
  if(description.length == 0)
  {
  	$(containingProject).append("<div class ='project-description'><p>Description of the project.</p></div?");
  }
  //else
  //{
  	//description.html("<p>Stop clicking on me! You just did it at " + (new Date()) + "</p>");
    if( n == 0)
    {
    	$(description).fadeIn();
    	n = 1;
    }	
    else
    {
    	$(description).fadeOut();
    	n = 0;
    }
  //}
}