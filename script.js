/* this is the js file for the website
   we just be making the box/button/title cards for each blog post change for now. 

   - aim:  on hovering the hyperlink, the background-color of the box changes. 
        why?  because it is not possible to trigger a background-color change whilst
        hovering the link itself with only css, we need js event handlers. */




const entryLinks = document.querySelectorAll('.entry-link');

entryLinks.forEach(link => {
 
  const parentItem = link.closest('li');

  
  link.addEventListener('mouseover', () => {
    parentItem.style.backgroundColor = '#A0A2A1';
    parentItem.style.color = 'black';
    link.style.color = 'black';
  });

  link.addEventListener('mouseout', () => {
    parentItem.style.backgroundColor = '#414644';
    parentItem.style.color = '#dad0d0';
    link.style.color = '#dad0d0';
  });
});


