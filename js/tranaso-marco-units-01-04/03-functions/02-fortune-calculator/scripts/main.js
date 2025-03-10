/**
 * Author: Marco Tranaso
 */

/**
 * Logs a fortune message based on the given parameters.
 * @param {number} number_of_children - The number of children the person will have.
 * @param {string} partner_name - The name of the person's partner.
 * @param {string} geographic_location - The location where the person will live.
 * @param {string} job_title - The person's job title.
 * @example
 * // Outputs: "You will be a Web Developer in Italy, and married to Chantal with 2 kids"
 */
function tellFortune(number_of_children, partner_name, geographic_location, job_title) {
    console.log(`You will be a ${job_title} in ${geographic_location}, and married to ${partner_name} with ${number_of_children} kids`);
}

tellFortune(2, "Chantal", "Italy", "Web Developer");
tellFortune(4, "Chantal", "France", "Bricklayer");
tellFortune(5, "Chantal", "Spain", "Electrician");
