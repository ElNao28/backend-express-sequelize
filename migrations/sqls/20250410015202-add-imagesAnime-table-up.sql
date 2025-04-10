SET
    search_path to public;

CREATE TABLE
    IF NOT EXISTS tbl_images_anime (
        id SERIAL PRIMARY KEY,
        url varchar(255) NOT NULL,
        type varchar(255) NOT NULL,
        id_anime INTEGER NOT NULL
    );

ALTER TABLE tbl_images_anime ADD CONSTRAINT pk_anime FOREIGN KEY (id_anime) REFERENCES tbl_animes (id);