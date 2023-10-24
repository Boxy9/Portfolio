// This code will create a message using a book that my kids , called "would you like". 
// It will let you select a base and a topping eg. the base would be something like "toast" and
// the topping would be something like "ketchup" and so it would read "would you like ketchup on your toast".
// some of the combinations were silly and made us laugh....
const wouldYouLike = () => {
    if (document.getElementById("wouldYou")) {
        let wouldYou = document.getElementById("wouldYou");
        wouldYou.remove();
        document.getElementById("wouldYouLike").innerHTML = "Try Me !";
    }
    else {
        const bases = ['toast', 'crumpet', 'waffle', 'pancake', 'bread', 'panini', 'pizza', 'cake', 'cracker', 'steak'];
        const topping = ['mud', 'kethcup', 'peas', 'marmite', 'pesto', 'fish', 'meat', 'mustard', 'monkey'];
        const baseIdx = Math.floor(Math.random() * bases.length);
        const toppingIdx = Math.floor(Math.random() * topping.length);
        let wouldYou = document.createElement("p");
        let wouldYouPt = document.getElementById("txtMsg");
        wouldYou.innerHTML = `Would you like ${topping[toppingIdx]} on your ${bases[baseIdx]} ?`;
        wouldYou.style.color = "darkcyan";
        wouldYou.style.textAlign = "center";
        wouldYou.style.fontSize = "1.25em";
        wouldYou.id = "wouldYou";
        wouldYouPt.appendChild(wouldYou);
        document.getElementById("wouldYouLike").innerHTML = "Remove";
    }
}

const badPun = () => {
    if (document.getElementById("punTxt")) {
        let punTxt = document.getElementById("punTxt");
        punTxt.remove();
        document.getElementById("badPun").innerHTML = "Pun !";
    }
    else {
        const puns = ["Two Eskimos sitting in a kayak were chilly, but when they lit a fire in the craft it sank - proving once and for all that you can't have your kayak and heat it, too.",
            "Two boll weevils grew up in South Carolina. One went to Hollywood and became a famous actor. The other stayed behind in the cotton fields and never amounted to much. The second one, naturally, became known as the lesser of two weevils.",
            "A three-legged dog walks into a saloon in the Old West. He sidles up to the bar and announces: \"I'm looking for the man who shot my paw.\"",
            "A neutron goes into a bar and asks the bartender, \"How much for a beer?\" The bartender replies, \"For you, no charge.\"",
            "Two atoms are walking down the street and they run in to each other. One says to the other, \"Are you all right?\" \"No, I lost an electron!\" \"Are you sure?\" \Yeah, I'm positive!\" ",
            "Did you hear about the Buddhist who refused his dentist's novocaine during root canal work? He wanted to transcend dental medication! ",
            "A group of chess enthusiasts had checked into a hotel, and were standing in the lobby discussing their recent tournament victories. After about an hour, the manager came out of the office and asked them to disperse. \"But why?\", they asked, as they moved off. \"Because,\" he said, \"I can't stand chess nuts boasting in an open foyer.\" ",
            "A doctor made it his regular habit to stop off at a bar for a hazelnut daiquiri on his way home. The bartender knew of his habit, and would always have the drink waiting at precisely 5:03 p.m. One afternoon, as the end of the work day approached, the bartender was dismayed to find that he was out of hazelnut extract. Thinking quickly, he threw together a daiquiri made with hickory nuts and set it on the bar. The doctor came in at his regular time, took one sip of the drink and exclaimed, \"This isn't a hazelnut daiquiri!\" \"No, I'm sorry\", replied the bartender, \"it's a hickory daiquiri, doc.\" ",
            "A hungry lion was roaming through the jungle looking for something to eat. He came across two men. One was sitting under a tree and reading a book; the other was typing away on his typewriter. The lion quickly pounced on the man reading the book and devoured him. Even the king of the jungle knows readers digest and writers cramp. ",
            "There was a man who entered a local paper's pun contest. He sent in ten different puns, in the hope that at least one of the puns would win. Unfortunately, no pun in ten did. ",
            "Cardinal Secola was hoping to become the new pope, but realised it would never be, as the Catholic church would NEVER be able to have as its leader Pope Secola! (say it and you'll see!) ",
            "During the Korean War, Syngman Rhee's son went to work for Henry Luce. But as the North Koreans came pounding down the track past Soeul, the young man got lost in all the confusion. Well, every correspondent in the Time-Life empire was sent out looking for him. After many hours of searching one of them found him. \"Ah!\" he exclaimed, \"sweet Mr. Rhee of Life, at last I've found you!\" "];
        let punTxt = document.createElement("p");
        let punTxtPt = document.getElementById("txtMsg");
        punTxt.innerHTML = puns[Math.floor(Math.random() * puns.length)];
        punTxt.style.color = "darkcyan";
        punTxt.style.textAlign = "center";
        punTxt.style.fontSize = "1.25em";
        punTxt.id = "punTxt";
        punTxtPt.appendChild(punTxt);
        document.getElementById("badPun").innerHTML = "Remove";
    }
}