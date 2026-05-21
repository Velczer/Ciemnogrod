-- netlify/database/schema.sql

CREATE TABLE players (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  nickname TEXT NOT NULL,
  wins INTEGER NOT NULL DEFAULT 0,
  losses INTEGER NOT NULL DEFAULT 0,
  faction TEXT NOT NULL,
  emblem TEXT NOT NULL,
  points INTEGER NOT NULL DEFAULT 0
);

CREATE TABLE matchHistory (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  player1_id INTEGER NOT NULL,
  player2_id INTEGER NOT NULL,
  score TEXT NOT NULL, -- np. '2:1'
  played_at DATETIME DEFAULT CURRENT_TIMESTAMP,
  FOREIGN KEY (player1_id) REFERENCES players(id),
  FOREIGN KEY (player2_id) REFERENCES players(id)
);