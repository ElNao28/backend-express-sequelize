SET
    search_path to public;

CREATE TABLE
    IF NOT EXISTS tbl_genders (
        id SERIAL PRIMARY KEY,
        name varchar(255) NOT NULL,
        delete boolean DEFAULT false
    );

CREATE TABLE
    IF NOT EXISTS tbl_anime_gender (
        id SERIAL PRIMARY KEY,
        id_anime INTEGER NOT NULL,
        id_gender INTEGER NOT NULL
    );

ALTER TABLE tbl_anime_gender ADD CONSTRAINT fk_anime FOREIGN KEY (id_anime) REFERENCES tbl_animes (id);

ALTER TABLE tbl_anime_gender ADD CONSTRAINT fk_gender FOREIGN KEY (id_gender) REFERENCES tbl_genders (id);