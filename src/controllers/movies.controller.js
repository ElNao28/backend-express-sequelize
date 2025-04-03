const Movie = require("../models/movie.model");

const createMovie = async (req, res) => {
  try {
    const dataMovie = req.body;
    const newMovie = await Movie.create(dataMovie);

    res.status(200).json({
      message: "Movie created successfully",
      data: newMovie,
    });
  } catch (error) {}
};

module.exports = { createMovie };
