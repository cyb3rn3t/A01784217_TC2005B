USE pokemon_tcg;

-- Inserting Players
INSERT INTO Player (player_username, player_rank, player_password, player_email) VALUES
('AceTrainerAsh', 'Elite', 'pikachu123', 'ash@pokemonleague.com'),
('MysticMisty', 'Master', 'starmie789', 'misty@ceruleangym.com'),
('BoulderBrock', 'Pro', 'onix456', 'brock@pewtergym.com'),
('SilentRed', 'Champion', 'charizardflame', 'red@indigoplateau.com'),
('ElectricLtSurge', 'Veteran', 'raichu100', 'lt.surge@vermilliongym.com'),
('ErikaFlower', 'Gym Leader', 'vileplume123', 'erika@celadongym.com'),
('SabrinaPsychic', 'Gym Leader', 'kadabra321', 'sabrina@saffrongym.com'),
('BlaineQuizmaster', 'Gym Leader', 'magmarfire', 'blaine@cinnabarisland.com'),
('GiovanniBoss', 'Gym Leader', 'rhyhornrock', 'giovanni@viridiangym.com'),
('LoreleiIce', 'Elite Four', 'laprasfreeze', 'lorelei@pokemonleague.com'),
('BrunoStrength', 'Elite Four', 'machampfist', 'bruno@pokemonleague.com'),
('AgathaGhost', 'Elite Four', 'gengarhaunt', 'agatha@pokemonleague.com'),
('LanceDragon', 'Champion', 'dragonitefly', 'lance@pokemonleague.com'),
('BlueOak', 'Rival', 'pidgeotwing', 'blue@pallettown.com'),
('YellowPikachu', 'Adventurer', 'pikapika', 'yellow@pokemonadventures.com');

-- Inserting Cards
INSERT INTO Card (card_name, card_type, card_rarity, card_HP, card_weakness, card_resistance, retreat_cost) VALUES
('Shaymin EX', 'Pokémon', 'Rare', 110, 'Fire', 'None', 1),
('Surfing Pikachu', 'Pokémon', 'Common', 60, 'None', 'None', 1),
('Charizard GX', 'Pokémon', 'Ultra Rare', 250, 'Water', 'None', 3),
('Lysandre’s Trump Card', 'Trainer', 'Uncommon', NULL, NULL, NULL, NULL),
('Pikachu', 'Pokémon', 'Common', 40, 'Ground', 'None', 1),
('Tapu Lele GX', 'Pokémon', 'Rare', 170, 'Dark', 'None', 2),
('Mewtwo and Mew GX', 'Pokémon', 'Ultra Rare', 270, 'Psychic', 'None', 2),
('N', 'Trainer', 'Uncommon', NULL, NULL, NULL, NULL),
('Ancient Mew', 'Pokémon', 'Promo', 30, 'Psychic', 'None', 1),
('Lucario and Melmetal GX', 'Pokémon', 'Ultra Rare', 260, 'Fire', 'None', 2),
('Charizard', 'Pokémon', 'Holographic Rare', 150, 'Water', 'None', 3),
('Mewtwo GX', 'Pokémon', 'Ultra Rare', 190, 'Psychic', 'None', 2),
('Zoroark GX', 'Pokémon', 'Ultra Rare', 210, 'Fighting', 'None', 2),
('Lugia Legend', 'Pokémon', 'Legendary', 130, 'Electric', 'Fighting', 0),
('Radiant Charizard', 'Pokémon', 'Rare', 160, 'Water', 'None', 3);

-- Inserting Decks
INSERT INTO Deck (deck_name, player_id) VALUES
('Temporal Forces', 1),
('Charizard Blaze', 2),
('Pidgeot Cyclone', 3),
('Lugia Whirlwind', 4),
('Gardevoir Mystique', 5),
('Lost Zone Shadows', 6),
('Giratina Vortex', 7),
('Arceus Divine', 8),
('Snorlax Blockade', 9),
('Ancient Mew Echoes', 10),
('Pidgeot Control', 11),
('Dialga Chronos', 12),
('Miraidon Surge', 13),
('Gholdengo Gleam', 14),
('Espathra Vision', 15),
('Regidrago Roar', 9),
('Banette Wraith', 5),
('Mew Genesect Synthesis', 11),
('Vileplume Allergy', 8),
('Dragapult Phantom', 10),
('Iron Thorns Fortress', 3),
('Entei Blaze', 6),
('Gouging Fire Assault', 14),
('Raging Bolt Storm', 15),
('Palkia Spatial', 1);

-- Inserting Matches
INSERT INTO Pokemon_Match (match_date, match_outcome, player1_id, player2_id, tournament_id) VALUES
('2024-06-01', 'Win', 1, 2, 1),
('2024-06-02', 'Loss', 3, 1, 1),
('2024-06-03', 'Draw', 2, 3, 1),
('2024-06-04', 'Win', 4, 5, 2),
('2024-06-05', 'Loss', 5, 6, 2),
('2024-06-06', 'Win', 7, 8, 3),
('2024-06-07', 'Draw', 8, 9, 3),
('2024-06-08', 'Loss', 10, 11, 4),
('2024-06-09', 'Win', 12, 13, 4),
('2024-06-10', 'Loss', 14, 15, 5),
('2024-06-11', 'Win', 6, 7, 5),
('2024-06-12', 'Draw', 9, 10, 6),
('2024-06-13', 'Loss', 11, 12, 6),
('2024-06-14', 'Win', 13, 14, 7),
('2024-06-15', 'Draw', 15, 1, 7);

-- Inserting Tournaments
INSERT INTO Tournament (tournament_name, tournament_date) VALUES
('Kanto Classic', '2024-07-10'),
('Johto Grand Slam', '2024-08-15'),
('Hoenn Open', '2024-09-12'),
('Sinnoh Invitational', '2024-10-11'),
('Unova Championship', '2024-11-09'),
('Kalos Cup', '2024-12-07'),
('Alola League', '2025-01-06'),
('Galar Gala', '2025-02-05'),
('Orange Islands Open', '2025-03-07'),
('Battle Frontier Bash', '2025-04-04'),
('Sevii Islands Showdown', '2025-05-03'),
('Fiore Faceoff', '2025-06-02'),
('Almia League', '2025-07-01'),
('Oblivia Championship', '2025-08-01'),
('Ferrum Fights', '2025-09-01');

-- Inserting TrainerCards
INSERT INTO Trainer_Card (card_id, card_effect, usage_limit) VALUES
(4, 'Shuffle your hand into your deck. Then, draw 7 cards.', 1),
(8, 'Search your deck for up to 2 Basic Pokémon and put them onto your Bench. Then, shuffle your deck.', 1);

-- Inserting Evolutions
INSERT INTO Evolution (base_card_id, evolved_card_id, evolution_stage) VALUES
(5, 2, 'Stage 1'), 
(11, 3, 'Stage 2'),
(11, 15, 'Stage 2'),
(14, 4, 'Stage 1'),
(6, 7, 'Stage 1'), 
(9, 8, 'Stage 1'), 
(12, 13, 'Stage 1'), 
(1, 10, 'Stage 1'),
(1, 12, 'Stage 1'),
(2, 13, 'Stage 1'),
(3, 14, 'Stage 1'),
(4, 6, 'Stage 1'),
(5, 9, 'Stage 1'),
(7, 11, 'Stage 1'),
(8, 14, 'Stage 1');

-- Inserting Deck_Cards
INSERT INTO Deck_Cards (deck_id, card_id) VALUES
(1, 1),
(1, 5), 
(2, 2), 
(2, 6), 
(3, 3), 
(3, 7), 
(4, 4), 
(4, 8), 
(5, 9), 
(5, 10), 
(6, 11), 
(6, 12), 
(7, 13),
(7, 14), 
(8, 15); 

-- Inserting Attacks
INSERT INTO Attack (attack_name, attack_power, attack_effect) VALUES
('Thunder Shock', 30, 'May cause paralysis'),
('Combustion Blast', 250, 'During your next turn, this Pokémon can\'t use Combustion Blast'),
('Psychic Embrace', 0, 'You may move a Psychic Energy from one of your Pokémon to another of your Pokémon'),
('Scream Tail', 50, 'This attack does 30 damage to one of your opponent\'s Benched Pokémon'),
('Mirage Step', 0, 'Search your deck for up to 2 Kirlia and put them onto your Bench'),
('Excited Heart', 0, 'This Pokémon\'s attacks cost Colorless less for each Prize card your opponent has taken'),
('Snorlax Slam', 180, 'If the opponent\'s Active Pokémon is a Basic Pokémon, it can\'t attack during their next turn'),
('Pidgeot Whirlwind', 70, 'Your opponent switches their Active Pokémon with one of their Benched Pokémon'),
('Gardevoir Moonblast', 120, 'During your opponent\'s next turn, any damage done by attacks from the Defending Pokémon is reduced by 30'),
('Zacian Blade', 230, 'This Pokémon can\'t attack during your next turn'),
('Giratina Shadow Impact', 130, 'Put 4 damage counters on one of your Pokémon'),
('Flaffy Electric Signal', 0, 'Attach an Electric Energy card from your discard pile to one of your Benched Pokémon'),
('Crabominable Hammer In', 90, 'This attack\'s damage isn\'t affected by Resistance'),
('Mimikyu Copycat', 0, 'Choose 1 of your opponent\'s Active Pokémon\'s attacks and use it as this attack'),
('Rotom Heat Blast', 80, 'If this Pokémon has any Fire Energy attached to it, this attack does 40 more damage');

-- Inserting Card_Attack
INSERT INTO Card_Attack (card_id, attack_id) VALUES
(1, 1), 
(3, 2), 
(6, 3), 
(9, 4), 
(7, 5), 
(15, 6), 
(1, 7), 
(2, 8), 
(5, 9), 
(7, 10), 
(10, 11),
(6, 12), 
(11, 13), 
(12, 14), 
(13, 15); 

-- Inserting Tournament_Player data
INSERT INTO Tournament_Player (tournament_id, player_id) VALUES
(1, 1),
(1, 2),
(1, 3),
(2, 4),
(2, 5),
(2, 6),
(3, 7),
(3, 8),
(3, 9),
(4, 10),
(4, 11),
(4, 12),
(5, 13),
(5, 14),
(5, 15),
(6, 1),
(6, 4),
(6, 7),
(7, 10),
(7, 11),
(7, 13),
(8, 2),
(8, 5),
(8, 8),
(9, 3),
(9, 6),
(9, 9),
(10, 12),
(10, 14),
(10, 15),
(11, 1),
(11, 5),
(11, 10),
(12, 7),
(12, 8),
(12, 13),
(13, 4),
(13, 6),
(13, 11),
(14, 9),
(14, 12),
(14, 14),
(15, 2),
(15, 3),
(15, 15);