SET
    search_path to public;

CREATE TABLE
    IF NOT EXISTS tbl_animes (
        id SERIAL PRIMARY KEY,
        title varchar(255) NOT NULL,
        description TEXT NOT NULL,
        type varchar(255) NOT NULL,
        language varchar(255) NOT NULL,
        duration_episodes INTEGER NOT NULL,
        emitted timestamp NOT NULL,
        state varchar(255) NOT NULL,
        delete boolean DEFAULT false
    );