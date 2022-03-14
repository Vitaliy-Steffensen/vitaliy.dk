# [vitaliy.dk](https://vitaliy.dk/)
This is a simple portfolio devoped using React JS

# Language selection
The language selection is made using redux and react cookies. For easy access i recreated the <T> tag from Transifex, which only contains the text inside fragments, to leave out unnecessary dom nodes.
  
# Animations and design
  All the design and animations are designed in Adobe XD and implemented using css and styled components. For the frequently changing statebased styling i used styled object, to prevent vast class creation.
  
For the scroll based animations i created 2 custom hooks ```useScrollPosition``` & ```useLocalScrollFraction```. ```useScrollPosition``` simply has a state, which gets updated based on a scroll eventlistener. While ```useLocalScrollFraction`` takes in an object and return the scrolling position as a fractions of the components bounds.
  

  # Sidebar
  The sidebar is made using a checkbox input which the css uses to identfy it's state. The buttons in the menu contains masked pseudo elements which scale on hover.
