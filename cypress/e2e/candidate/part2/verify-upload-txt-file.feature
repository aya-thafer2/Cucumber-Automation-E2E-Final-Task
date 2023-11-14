Feature: Verify that the user can upload a txt file for Application Initiated and Hired statuses

    Scenario: Verify the Resume Upload and Download Process for status "Application Initiated"

        When the Admin logs in to the system
        And the Admin accesses the candidate form

        And the Admin enables Edit candidate switch
        And the Admin Uploads a txt file to the Resume section and Saves the form
        And the Admin Downloads the uploaded file

        Then the downloaded file content should match the uploaded data

    Scenario: Verify the Resume Upload and Download Process for status "Hired"

        When the Admin logs in to the system
        And the Admin accesses the candidate form

        And the Admin enables Edit candidate switch
        And the Admin Uploads a txt file to the Resume section and Saves the form
        And the Admin Downloads the uploaded file

        Then the downloaded file content should match the uploaded data

