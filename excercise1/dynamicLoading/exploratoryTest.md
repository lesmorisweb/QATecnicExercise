### Feature: Dynamic Loading 

* Scenario: Dyamic loading page is visible 
    - Given the user navigates to dynamic Loading page 
    - When the page load 
    - Then the title of the page is "Dynamically Loaded Page Elements" 
    - And have two links to examples 
    
    ![alt text](image-19.png) 
    
* Scenario: The dynamic Loading page, on excercise 1 
    - Give the user navigates to dynamic Loanding page 
    - And the user go to the excercise 1 
    - Then the page have a start button 
    
    ![alt text](image-20.png) 
    
* Scenario: Display hidden element after clicking Start 
    - Given the user navigates to Dynamic Loading Example 1 
    - When the user clicks the Start button 
    - Then a loading indicator should be displayed 
    - And the hidden element should become visible after loading finishes - And the loaded text should be displayed 
    
    ![alt text](image-22.png) 
    ![alt text](image-23.png) 
    
* Scenario: Start button triggers loading process 
    - Given the user is on Dynamic Loading Example 1 
    - When the user clicks Start 
    - Then the Start button should become unavailable 
    - And the loading process should begin 
    
    ![alt text](image-26.png) 
    
* Scenario: Display dynamically created element 
    - Given the user navigates to Dynamic Loading Example 2 
    - When the user clicks the Start button 
    - Then the application should start loading 
    - And the element should be created after loading completes 
    - And the element should be visible 
    
    ![alt text](image-24.png) 
    ![alt text](image-25.png) 
    
* Scenario: Validate loaded text content 
    - Given the user completed the loading process 
    - When the dynamic element appears 
    - Then the displayed text should be "Hello World!" 

    ![alt text](image-28.png) 

* Scenario: Reload page after dynamic content loading 
    - Given the user loaded the dynamic element successfully 
    - When the user refreshes the browser 
    - Then the page should return to its initial state 
    - And the user should be able to start the loading process again 
    
    ![alt text](image-29.png) 

* Scenario: Navigate back during content loading 
    - Given the user is on Dynamic Loading Example 2 
    - And the user has started the loading process 
    - When the user clicks the browser Back button before loading completes 
    - And returns to the Dynamic Loading page 
    - Then the page should be displayed correctly 
    - And the user should be able to start a new loading process 
    - And no broken loading state should remain 
    
    ![alt text](image-30.png) 