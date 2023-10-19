

---------------!! BRIEF REPORT ON CREATING IMAGE SLIDESHOW !!---------------


The code is fundamentally for creating an interactive gallery slideshow. The provided CSS has been copied to the style.css file to be used in the html of the main code. The slideshow contains eight images that can be manually traversed through using the 'previous' and 'next' buttons. There are multiple div elements with the name mySlide, each one representing a single slide in the slideshow. 

The code has three JavaScript functions to run effectively. The 'plusSlides' function is used to increase and decrease the slide number. The 'currentSlide' function is used to go to a particular slide in the slideshow. The 'showSlides' function is the main function that handles the behaviour of the slideshow. This function gets all the elements in the 'mySlides' class and displays them one by one. It also incorporates an if condition that displays first slide if 'next' is clicked after the last slide and an if condition that displays last slide if 'previous' is clicked before the first slide for continuous user experience.


---------------!! BRIEF REPORT ON CREATING IMAGE CAROUSEL !!---------------


The code is fundamentally for creating an automated image carousel. The images are displayed sequentially on the website's homepage, replacing the previous single banner image. A new empty banner is created which has the name 'slide'. 

An array called 'images' contains the image paths of all the images to be displayed. A JavaScript function 'ChangeImage' is used to change the source of the images with the name 'slide' to display the them in the banner. The images are displayed one by one and once the last image is displayed, it loops back to the first image, enusring continuous presentation.

The images change ('ChangeImage' function is called) every 4 seconds; this is done using the 'setInterval' function which takes two parameters: the function to be executed and the interval (duration in milliseconds). An event listener is also used to run the 'ChangeImage' function when webpage loads.


---------------!! BRIEF REPORT ON CREATING REGISTRATION FORM !!---------------


The code is fundamentally for creating a Registration Form. A registration form with fields for a username, email address, password, and password confirmation is established using HTML. Each field consists of their respective labels and div elements of class 'input-control' and 'error'.

The provided CSS is used to style the form, centering it both horizontally and vertically on the webpage. It sets a light gray background, rounded corners, and defines the appearance of input fields and error messages.

There are multiple JavaScript functions that determine the functionality of the form. The functions are as follows:

- The 'callError' function is used to mark the input as incorrect and display an error message along with a red border if an error is found.

- The 'callSuccess' function is used to mark the input as correct and display the input with a green border.

- The 'validateName' function checks the input in the username field and runs the callError and callSuccess function respectively. If the field is empty, it gives an error and displays the message 'Username is required'.

- The 'validateEmail' function checks the input in the email field and runs the callError and callSuccess function respectively. If the field is empty and if the input doesn't match a standard email format, it gives an error and displays the messages 'Email is required' and 'Email does not match a standard email format' respectively.

- The 'validatePassword' function checks the input in the password field and runs the callError and callSuccess function respectively. If the field is empty and if the input doesn't have a minimum of eight characters, it gives an error and displays the messages 'Password is required' and 'Password must be atleast 8 characters long' respectively.

- The 'validateConfirmPassword' function checks the input in the confirmpassword field and runs the callError and callSuccess function respectively. If the field is empty and if the input doesn't match with the one given in the password field, it gives an error and displays the messages 'Password is required' and 'Passwords do not match' respectively.

An Event listener is used the prevent the form from directly submitting when the 'Submit' button is clicked. It ensures that all input is validated before submission. The input is considered to be validated after the validateName, validateEmail, validatePassword and validateConfirmPassword functions run without returning errors. An event listener is also used to call validation functions when the user clicks outside of an input field (on blur). This enhances the user experience and data quality.

x-----------------------------------------------------------------------------------------------------x