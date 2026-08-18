// @ts-check

/**
 * Given a certain command, help the chatbot recognize whether the command is valid or not.
 *
 * @param {string} command
 * @returns {boolean} whether or not is the command valid
 */

export function isValidCommand(command) {
  const regex1 = /^Chatbot/gi;
  let result = regex1.test(command);
  return result;
}

/**
 * Given a certain message, help the chatbot get rid of all the emoji's encryption through the message.
 *
 * @param {string} message
 * @returns {string} The message without the emojis encryption
 */
export function removeEmoji(message) {
  const regex = new RegExp('emoji\\d+', 'g');
  let result = message.replace(regex, '');

  return result;
}

/**
 * Given a certain phone number, help the chatbot recognize whether it is in the correct format.
 *
 * @param {string} number
 * @returns {string} the Chatbot response to the phone Validation
 */
export function checkPhoneNumber(number) {
  const regex = /^\(\+\d{2}\) \d{3}-\d{3}-\d{3}/;
  let result = regex.test(number);
  if(result === true){
    return 'Thanks! You can now download me to your phone.';
  }else{
    return `Oops, it seems like I can't reach out to ${number}`;
  }
}

/**
 * Given a certain response from the user, help the chatbot get only the URL.
 *
 * @param {string} userInput
 * @returns {string[] | null} all the possible URL's that the user may have answered
 */
export function getURL(userInput) {
  const regex = /\w+(?:\.\w+)+/g;
  const matches = userInput.match(regex);

  return matches || [];
}

/**
 * Greet the user using the full name data from the profile.
 *
 * @param {string} fullName
 * @returns {string} Greeting from the chatbot
 */
export function niceToMeetYou(fullName) {
  const nameRegex = /(\w+),\s*(\w+)/i;

  return fullName.replace(nameRegex, (match, lastName, firstName) => {
    // Capitalize first letter of each name properly
    const formattedFirst = firstName.charAt(0).toUpperCase() + firstName.slice(1).toLowerCase();
    const formattedLast = lastName.charAt(0).toUpperCase() + lastName.slice(1).toLowerCase();

    return `Nice to meet you, ${formattedFirst} ${formattedLast}`;
  });
}
