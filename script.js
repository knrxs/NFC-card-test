document.addEventListener('DOMContentLoaded', () => {
  // Replace these with your actual details
  const phoneNumber = '+639766308318';
  const facebookUrl = 'https://www.facebook.com/kane.roxas.1';
  const instagramUrl = 'https://www.instagram.com/kane_rxs/';

  // Select all buttons inside the Contacts container without changing your HTML
  const buttons = document.querySelectorAll('.Contacts button');

  buttons.forEach(button => {
    const textSpan = button.querySelector('span');
    if (!textSpan) return;

    const buttonText = textSpan.textContent.trim();

    if (buttonText === 'Phone Number') {
      button.addEventListener('click', () => {
        window.location.href = `tel:${phoneNumber}`;
      });
    } 
    else if (buttonText === 'Facebook') {
      button.addEventListener('click', () => {
        window.open(facebookUrl, '_blank');
      });
    } 
    else if (buttonText === 'Instagram') {
      button.addEventListener('click', () => {
        window.open(instagramUrl, '_blank');
      });
    }
  });
});