### Feature: File Upload 

 * Scenario: Upload a valid file successfully 
    - Given the user is on the File Upload page 
    - When the user selects a valid file 
    - And clicks the Upload button 
    - Then the file should be uploaded successfully 
    - And the Upload page should display the uploaded filename 
    
    ![alt text](image-32.png) 
    
* Scenario: Select a file before uploading 
    - Given the user is on the File Upload page    
    - When the user chooses a file from the file selector 
    - Then the selected filename should be displayed in the file input field 
    
    ![alt text](image-31.png) 
    
* Scenario: Upload without selecting a file 
    - Given the user is on the File Upload page 
    - When the user clicks the Upload button without selecting a file 
    - Then the upload should not be completed 
    - And the user should receive an error message 
    - And status code 500 
    
    ![alt text](image-33.png) 
    
* Scenario: Replace selected file before uploading 
    - Given the user has selected a file 
    - When the user selects another file 
    - Then the latest selected file should replace the previous one 
    
    ![alt text](image-34.png) 
    ![alt text](image-35.png) 
    
* Scenario: Navigate back after successful upload 
    - Given the user uploaded a file successfully 
    - When the user clicks the browser Back button 
    - Then the application should return to the previous page correctly 
    - And no broken state should be displayed - The file continue selected 
    - And the name File still correctlly 
    
    ![alt text](image-36.png) 
    
* Scenario: Refresh after successful upload 
    - Given the user has successfully uploaded a file 
    - When the user refreshes the page 
    - Then the application should remain in a valid state 
    - And the user should be able to continue using the application 
    
    ![alt text](image-38.png) 
    
* Scenario: Validate single file upload limitation 
    - Given the user is on the File Upload page 
    - When the user attempts to select multiple files 
    - Then the system should allow only the supported number of files 
    - And no unexpected behavior should occur