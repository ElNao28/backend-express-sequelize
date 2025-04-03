SET
    search_path to public;

CREATE TABLE
    IF NOT EXISTS tbl_movies (
        id SERIAL PRIMARY KEY,
        title VARCHAR(100) NOT NULL,
        description TEXT
    );