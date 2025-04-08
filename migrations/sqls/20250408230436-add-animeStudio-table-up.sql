SET
    search_path to public;

CREATE TABLE
    IF NOT EXISTS tbl_studio (
        id SERIAL PRIMARY KEY,
        name varchar(255) NOT NULL,
        delete boolean NOT NULL DEFAULT false
    );

CREATE TABLE
    IF NOT EXISTS tbl_anime_studio (
        id SERIAL PRIMARY KEY,
        id_anime INTEGER NOT NULL,
        id_studio INTEGER NOT NULL
    );

ALTER TABLE tbl_anime_studio ADD CONSTRAINT fk_anime FOREIGN KEY (id_anime) REFERENCES tbl_animes (id);

ALTER TABLE tbl_anime_studio ADD CONSTRAINT fk_studio FOREIGN KEY (id_studio) REFERENCES tbl_studio (id);