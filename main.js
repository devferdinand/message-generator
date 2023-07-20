function combineInputOutput(story, noun1, verb1, adjective1, adverb, place, animal, exclamation, verbPastTense, adjective2, nounPlural, noun2){
    let result = story;
    result = result.replaceAll('[noun1]', noun1);
    result = result.replaceAll('[verb1]', verb1);
    result = result.replaceAll('[adjective1]', adjective1);
    result = result.replaceAll('[adverb]', adverb);
    result = result.replaceAll('[place]', place);
    result = result.replaceAll('[animal]', animal);
    result = result.replaceAll('[exclamation]', exclamation.charAt(0).toUpperCase() + exclamation.slice(1));
    result = result.replaceAll('[verbPastTense]', verbPastTense);
    result = result.replaceAll('[adjective2]', adjective2);
    result = result.replaceAll('[nounPlural]', nounPlural);
    result = result.replaceAll('[noun2]', noun2);
    return result; 
}

let randomMessages = [];
randomMessages[0] = 'Once upon a time, there was a [adjective1] [noun1] who loved to [verb1] [adverb] on the [place]. ' +
                    'One day, a friendly [animal] appeared and exclaimed, "[exclamation]! I\'ve never seen an [noun1] ' +
                    'that [verb1] so beautifully!" The [animal] was so impressed that it [verbPastTense] ' +
                    'with joy. The [noun1] and the [animal] became friends and went on many adventures together, ' +
                    'exploring [adjective2] [nounPlural] and swimming in the vast [noun2].';

randomMessages[1] = 'Once upon a time, in a [adjective1] [place], there lived a brave [noun1]. One day, [noun1] decided to ' +
                    '[verb1] to a [adjective1] [place] rumored to be filled with magical [animal]. ' +
                    'As [noun1] [verbPastTense] through the [adjective1] forest, they encountered a friendly [animal] who greeted ' +
                    'them with an excited "[exclamation]!" The [animal] offered to guide [noun1] on their quest. ' +
                    'Together, they traveled to the top of a [adjective1] mountain, where they found a hidden cave filled with ' +
                    '[nounPlural]. [noun1] felt [adjective2] as they explored the glittering cave. Inside, they discovered ' +
                    'a mysterious [noun2] that could grant any [adjective2] wish. [noun1] carefully made a wish, hoping it would come true. ' +
                    'Suddenly, the cave rumbled, and a [adjective2] [animal] appeared before them. It spoke in a [adjective2] voice ' +
                    'and asked [noun1] to prove their bravery. With determination, [noun1] [verbPastTense] to complete a daring task, ' +
                    'and the [animal] was impressed. It granted [noun1]\'s wish, and [exclamation]! The wish came true! Filled with joy, ' +
                    '[noun1] and the [animal] danced [adverb] back to their [noun2], where they lived happily ever after, cherishing the ' +
                    'memories of their mysterious adventure.';

const prompt = require('prompt-sync')();
var noun1 = prompt('Noun: ');
var verb1 = prompt('Verb: ');
var adjective1 = prompt('Adjective: ');
var adverb = prompt('Adverb: ');
var place = prompt('Place: ');
var animal = prompt('Animal: ');
var exclamation = prompt('Exclamation: ');
var verbPastTense = prompt('Verb (past tense): ');
var adjective2 = prompt('Adjective: ');
var nounPlural = prompt('Noun (plural): ');
var noun2 = prompt('Noun: ');

console.log();
console.log(combineInputOutput(randomMessages[Math.floor(Math.random()*2)], noun1, verb1, adjective1, adverb, place, animal, exclamation, verbPastTense, adjective2, nounPlural, noun2));