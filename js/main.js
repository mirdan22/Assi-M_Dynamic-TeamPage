const popOutBtns = document.querySelectorAll('.pop-out-btn');

const teamMembers = [
  {
    name: 'Member 1',
    bio: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sed nibh vitae nisi bibendum mollis.',
  },
  {
    name: 'Member 2',
    bio: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sed nibh vitae nisi bibendum mollis.',
  },
  {
    name: 'Member 3',
    bio: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sed nibh vitae nisi bibendum mollis.',
  },
];
popOutBtns.forEach((btn, index) => {
    const teamMember = teamMembers[index];
    const popOutContainer = document.createElement('div');
    popOutContainer.classList.add('pop-out-container');
    
    popOutContainer.innerHTML = `
      <h2>${teamMember.name}</h2>
      <p>${teamMember.bio}</p>
      <span class="pop-out-container-close">&times;</span>
    `;
     // Center the text and apply basic styling
  popOutContainer.style.textAlign = 'center';
  popOutContainer.style.width = '800px';
  popOutContainer.style.height = '500px';
  popOutContainer.style.padding = '20px';
//   popOutContainer.style.height = '200px';
  popOutContainer.style.backgroundColor = 'white';
  popOutContainer.style.boxShadow = '0 0 10px rgba(0, 0, 0, 0.3)';
  popOutContainer.style.position = 'fixed';
popOutContainer.style.top = '50%';
popOutContainer.style.left = '50%';
popOutContainer.style.transform = 'translate(-50%, -50%)';

btn.addEventListener('click', () => {
    document.body.appendChild(popOutContainer);
    popOutContainer.style.display = 'block';

    const popOutContainerClose = popOutContainer.querySelector('.pop-out-container-close');
    popOutContainerClose.addEventListener('click', () => {
      popOutContainer.style.display = 'none';
    });
  });
});  
