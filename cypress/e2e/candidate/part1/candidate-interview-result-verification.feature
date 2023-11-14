Feature: Candidate Interview Result Verification Pass/Fail

    Scenario: Admin transitions candidate status from "Interview Scheduled" to "Interview Passed"

        When the Admin logs in to the system
        And the Admin accesses the candidate form
        And the Admin changes the candidate status to "Interview Passed"
        Then the candidate status should be updated to "Interview Passed"
        And the available actions buttons for should be Reject, Schedule Interview, Offer Job

    Scenario: Admin transitions candidate status from "Interview Scheduled" to "Interview Failed"

        When the Admin logs in to the system
        And the Admin accesses the candidate form
        When the Admin changes the candidate status to "Interview Failed"
        Then the candidate status should be updated to "Interview Failed"
        And the available actions buttons for should be Reject
