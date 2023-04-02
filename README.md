# Assi-M_Dynamic-TeamPage
Team Page 


Plan

1. Create a function that will handle the opening and closing of the pop-out container when a member's photo is clicked.

2. Within the function, create a new section element for the pop-out container and append it to the body.

3. Within the pop-out container section element, create a div for the close button and append it to the section element.

4. Add an event listener to the close button that removes the pop-out container section element from the body.

5. When a member's photo is clicked, populate the pop-out container with the member's bio.

6. Within the function that handles the pop-out container, double space the member's bio.


Solution:
1. function openPopOutContainer(memberBio) { 
}

2. function openPopOutContainer(memberBio) {
  const popOutContainer = document.createElement('section');
  }

3. function openPopOutContainer(memberBio) {
  const popOutContainer = document.createElement('section');
  const closeButton = document.createElement('div');

}

4. function openPopOutContainer(memberBio) {
  const popOutContainer = document.createElement('section');
  const closeButton = document.createElement('div');
   closeButton.addEventListener('click', function() {
    document.body.removeChild(popOutContainer);
  });
}

5. vfunction openPopOutContainer(memberBio) {
  const popOutContainer = document.createElement('section');
  const closeButton = document.createElement('div');
  const bioParagraph = document.createElement('p');
  bioParagraph.textContent = memberBio;
  }

6. function openPopOutContainer(memberBio) {
  const popOutContainer = document.createElement('section');
  const closeButton = document.createElement('div');
  const bioParagraph = document.createElement('p');
  bioParagraph.textContent = memberBio;
  bioParagraph.style.lineHeight = '2';

  }


