const { faker } = require('@faker-js/faker');
import moment from "moment";

export default class GenericHelper {
    static adminLogin() {
        cy.login('Admin', 'admin123');
    }
    static genericRandomUsername() {
        return faker.internet.userName();
    }
    static genericRandomFirstName() {
        return faker.person.firstName();
    }
    static genericRandomMiddleName() {
        return faker.person.middleName();
    }
    static genericRandomLastName() {
        return faker.person.lastName();
    }
    static genericRandomEmail() {
        return faker.internet.email();
    }
    static genericRandomNumberThreeDigits() {
        const Random3DigitNumber = faker.number.int({ min: 100, max: 999 });
        return Random3DigitNumber;
    }
    static genericRandomNumberFourDigits() {
        const Random4DigitNumber = faker.number.int({ min: 1000, max: 9999 });
        return Random4DigitNumber;
    }

    static genericRandomLocation() {
        return faker.location.street();
    }
    static genericRandomCity() {
        return faker.location.city();
    }
    static genericRandomProvince() {
        return faker.location.state();
    }
    static genericRandomZipCode() {
        return faker.location.zipCode();
    }
    static genericRandomCountryCode() {
        return faker.location.countryCode();
    }
    static genericRandomAddress() {
        return faker.location.streetAddress();
    }
    static genericRandomPhone() {
        return faker.phone.number();
    }
    static genericRandomSentence() {
        return faker.lorem.sentence();
    }
    static genericRandomJobTitle() {
        return faker.person.jobTitle();
    }
    static genericRandomSalaryAmount() {
        const RandomSalaryAmount = faker.number.int({ min: 1000, max: 60000 });
        return RandomSalaryAmount.toString();
    }
    static waitUntilVisible(){
            cy.get('.oxd-loading-spinner-container').should('not.exist');
    }
    static getRandomTime(): string {
        // Create a moment object set to 8 am
        const startTime = moment().set({ hour: 8, minute: 0, second: 0 });
        // Calculate the total number of seconds between 8 am and 5 pm (9 hours)
        const totalSeconds = 9 * 60 * 60;
        // Generate a random number of seconds within the range
        const randomSeconds = Math.floor(Math.random() * totalSeconds);
        // Add the random number of seconds to the start time
        const randomTime = startTime.add(randomSeconds, 'seconds');
        return randomTime.format('HH:mm');
    }
    static getRandomFutureDate(): string {
        let currentDate = moment();
        // Generate a random number of days between 1 and 7 (excluding weekends)
        const randomDays = Math.floor(Math.random() * 5) + 1;
        // Add the random number of days to the current date
        currentDate.add(randomDays, 'days');
        // Check if the resulting date is on Saturday or Sunday
        while (currentDate.day() === 0 || currentDate.day() === 6) {
            // If it's Saturday or Sunday, add one day to move to the next day
            currentDate.add(1, 'days');
        }
        return currentDate.format('YYYY-MM-DD');
    }

    static checkToastMessage(message: string, exist: boolean) {
        cy.contains(".oxd-toast", message).should(exist ? "exist" : "not.exist");
    }
}
