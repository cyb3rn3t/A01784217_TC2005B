-- Player Table
CREATE TABLE Player (
    player_id INT AUTO_INCREMENT PRIMARY KEY,
    player_username VARCHAR(255) NOT NULL,
    player_rank VARCHAR(255),
    player_password VARCHAR(255),
    player_email VARCHAR(255)
);

-- Card Table
CREATE TABLE Card (
    card_id INT AUTO_INCREMENT PRIMARY KEY,
    card_name VARCHAR(255) NOT NULL,
    card_type ENUM('Pokémon', 'Trainer', 'Energy') NOT NULL,
    card_rarity VARCHAR(255),
    card_HP INT,
    card_weakness VARCHAR(255),
    card_resistance VARCHAR(255),
    retreat_cost INT
);

-- Deck Table
CREATE TABLE Deck (
    deck_id INT AUTO_INCREMENT PRIMARY KEY,
    deck_name VARCHAR(255) NOT NULL,
    player_id INT,
    FOREIGN KEY (player_id) REFERENCES Player(player_id)
);

-- Match Table
CREATE TABLE Pokemon_Match (
    match_id INT AUTO_INCREMENT PRIMARY KEY,
    match_date DATE NOT NULL,
    match_outcome ENUM('Win', 'Loss', 'Draw') NOT NULL,
    player1_id INT,
    player2_id INT,
    tournament_id INT, -- Foreign key to connect to Tournament
    FOREIGN KEY (player1_id) REFERENCES Player(player_id),
    FOREIGN KEY (player2_id) REFERENCES Player(player_id),
    FOREIGN KEY (tournament_id) REFERENCES Tournament(tournament_id)
);

-- Tournament Table
CREATE TABLE Tournament (
    tournament_id INT AUTO_INCREMENT PRIMARY KEY,
    tournament_name VARCHAR(255) NOT NULL,
    tournament_date DATE NOT NULL
);

-- Tournament_Player Table for Many-to-Many relationship between Tournament and Player
CREATE TABLE Tournament_Player (
    tournament_id INT,
    player_id INT,
    PRIMARY KEY (tournament_id, player_id),
    FOREIGN KEY (tournament_id) REFERENCES Tournament(tournament_id),
    FOREIGN KEY (player_id) REFERENCES Player(player_id)
);

-- Trainer_Card Table
CREATE TABLE Trainer_Card (
    card_id INT,
    card_effect TEXT NOT NULL,
    usage_limit INT,
    PRIMARY KEY (card_id),
    FOREIGN KEY (card_id) REFERENCES Card(card_id)
);

-- Evolution Table
CREATE TABLE Evolution (
    evolution_id INT AUTO_INCREMENT PRIMARY KEY,
    base_card_id INT,
    evolved_card_id INT,
    evolution_stage VARCHAR(255) NOT NULL,
    FOREIGN KEY (base_card_id) REFERENCES Card(card_id),
    FOREIGN KEY (evolved_card_id) REFERENCES Card(card_id)
);

-- Deck_Cards Junction Table for Many-to-Many relationship between Deck and Card
CREATE TABLE Deck_Cards (
    deck_id INT,
    card_id INT,
    PRIMARY KEY (deck_id, card_id),
    FOREIGN KEY (deck_id) REFERENCES Deck(deck_id),
    FOREIGN KEY (card_id) REFERENCES Card(card_id)
);

-- Attack Table
CREATE TABLE Attack (
    attack_id INT AUTO_INCREMENT PRIMARY KEY,
    attack_name VARCHAR(255) NOT NULL,
    attack_power INT NOT NULL,
    attack_effect TEXT NOT NULL
);

-- Card_Attack Junction Table for Many-to-Many relationship between Card and Attack
CREATE TABLE Card_Attack (
    card_id INT,
    attack_id INT,
    PRIMARY KEY (card_id, attack_id),
    FOREIGN KEY (card_id) REFERENCES Card(card_id),
    FOREIGN KEY (attack_id) REFERENCES Attack(attack_id)
);