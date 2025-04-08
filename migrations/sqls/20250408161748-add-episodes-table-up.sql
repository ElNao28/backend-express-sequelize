SET
    search_path to public;

CREATE TABLE
    IF NOT EXISTS tbl_episodes (
        id SERIAL PRIMARY KEY,
        name varchar(255) NOT NULL,
        number INTEGER NOT NULL,
        anime_id INTEGER NOT NULL
    );

ALTER TABLE tbl_episodes ADD CONSTRAINT fk_anime FOREIGN KEY (anime_id) REFERENCES tbl_animes (id);