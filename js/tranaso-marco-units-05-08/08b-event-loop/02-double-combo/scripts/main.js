/**
 * @author Marco Tranaso
 * @description Simulates a card-based game where two players draw cards and resolve their actions (character, enemy, spell).
 */
class Card {
    /**
     * Creates a new card with specified type, name, health, attack, defense, and effect.
     * @param {string} type - The type of the card ('Character', 'Enemy', 'Spell').
     * @param {string} name - The name of the card.
     * @param {number} [health=0] - The health of the card, applicable for characters and enemies.
     * @param {number} [attack=0] - The attack power of the card, applicable for characters and enemies.
     * @param {number} [defense=0] - The defense value of the card, applicable for characters and enemies.
     * @param {string|null} [effect=null] - The effect of the card, applicable for spells ('buff', 'damage').
     */
    constructor(type, name, health, attack, defense, effect) {
        this.type = type;
        this.name = name;
        this.health = health || 0;
        this.attack = attack || 0;
        this.defense = defense || 0;
        this.effect = effect || null;
    }

    /**
     * Checks if the card is of type 'Character'.
     * @returns {boolean} True if the card is a character, false otherwise.
     */
    isCharacter() {
        return this.type === 'Character';
    }

    /**
     * Checks if the card is of type 'Enemy'.
     * @returns {boolean} True if the card is an enemy, false otherwise.
     */
    isEnemy() {
        return this.type === 'Enemy';
    }

    /**
     * Checks if the card is of type 'Spell'.
     * @returns {boolean} True if the card is a spell, false otherwise.
     */
    isSpell() {
        return this.type === 'Spell';
    }
}

/**
 * @description Represents a player in the game, holding a queue of cards and calculating points based on character health.
 */
class Player {
    /**
     * Creates a new player with the given name and initializes the card queue and points.
     * @param {string} name - The name of the player.
     */
    constructor(name) {
        this.name = name;
        this.queue = [];
        this.points = 0;
    }

    /**
     * Draws the first card from the player's card queue.
     * @returns {Card|null} The drawn card or null if the queue is empty.
     */
    drawCard() {
        return this.queue.shift();
    }

    /**
     * Adds a card to the player's card queue.
     * @param {Card} card - The card to be added.
     */
    addCard(card) {
        this.queue.push(card);
    }

    /**
     * Calculates the player's total points based on the remaining health of character cards in the queue.
     * @returns {void}
     */
    calculatePoints() {
        this.points = this.queue.reduce((acc, card) => {
            if (card.isCharacter()) {
                acc += card.health;
            }
            return acc;
        }, 0);
    }
}

/**
 * @description Manages the game between two players, handling turns, card resolution, and score calculation.
 */
class Game {
    /**
     * Creates a new game with two players.
     * @param {Player} player1 - The first player.
     * @param {Player} player2 - The second player.
     */
    constructor(player1, player2) {
        this.player1 = player1;
        this.player2 = player2;
    }

    /**
     * Starts a single turn by having both players draw a card and resolving the turn.
     * @returns {void}
     */
    startTurn() {
        let card1 = this.player1.drawCard();
        let card2 = this.player2.drawCard();

        if (!card1 || !card2) {
            console.log("One of the players is out of cards!");
            return;
        }

        console.log(`${this.player1.name} drew: ${card1.name}`);
        console.log(`${this.player2.name} drew: ${card2.name}`);

        this.resolveTurn(card1, card2);
        this.player1.calculatePoints();
        this.player2.calculatePoints();
    }

    /**
     * Resolves the turn by determining the outcome of the drawn cards based on their types.
     * @param {Card} card1 - The first drawn card.
     * @param {Card} card2 - The second drawn card.
     * @returns {void}
     */
    resolveTurn(card1, card2) {
        // Character vs Enemy
        if (card1.isCharacter() && card2.isEnemy()) {
            card2.health -= card1.attack; // Character attacks Enemy
            console.log(`${card1.name} attacked ${card2.name}, ${card2.name} now has ${card2.health} health.`);
        }
        else if (card1.isEnemy() && card2.isCharacter()) {
            card1.health -= card2.attack; // Enemy attacks Character
            console.log(`${card2.name} attacked ${card1.name}, ${card1.name} now has ${card1.health} health.`);
        }

        // Spell vs Character
        else if (card1.isSpell() && card2.isCharacter()) {
            if (card1.effect === 'buff') {
                card2.attack += 5; // Buff the character's attack
                console.log(`${card1.name} buffed ${card2.name}'s attack, new attack: ${card2.attack}`);
            } else if (card1.effect === 'damage') {
                card2.health -= 10; // Spell damages the character
                console.log(`${card1.name} damaged ${card2.name}, ${card2.name} now has ${card2.health} health.`);
            }
        }

        // Character vs Character (Duel)
        else if (card1.isCharacter() && card2.isCharacter()) {
            if (card1.attack > card2.attack) {
                console.log(`${card1.name} defeated ${card2.name}`);
                card2.health = 0; // The loser is defeated
            } else if (card2.attack > card1.attack) {
                console.log(`${card2.name} defeated ${card1.name}`);
                card1.health = 0; // The loser is defeated
            } else {
                console.log(`${card1.name} and ${card2.name} have the same attack! It's a draw.`);
            }
        }

        // Enemy vs Enemy (No effect)
        else if (card1.isEnemy() && card2.isEnemy()) {
            console.log("Enemy vs Enemy - No effect.");
        }
    }

    /**
     * Displays the current points of both players.
     * @returns {void}
     */
    displayScores() {
        console.log(`\n${this.player1.name}'s Points: ${this.player1.points}`);
        console.log(`${this.player2.name}'s Points: ${this.player2.points}`);
    }
}

// Example Usage:

let player1 = new Player("Player 1");
let player2 = new Player("Player 2");

// Add cards to player 1's queue
player1.addCard(new Card('Character', 'Hero1', 100, 30, 20));
player1.addCard(new Card('Spell', 'Healing Spell', 0, 0, 0, 'buff'));
player1.addCard(new Card('Character', 'Hero2', 80, 40, 10));

// Add cards to player 2's queue
player2.addCard(new Card('Character', 'Villain1', 120, 20, 30));
player2.addCard(new Card('Spell', 'Fireball', 0, 0, 0, 'damage'));
player2.addCard(new Card('Enemy', 'Goblin', 50, 10, 5));

let game = new Game(player1, player2);

// Simulate a few turns
game.startTurn();
game.startTurn();
game.startTurn();

// Display the final points
game.displayScores();
