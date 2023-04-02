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
});  