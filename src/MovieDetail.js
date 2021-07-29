import { Redirect, useParams } from "react-router-dom";

const MovieDetail = (props) => {
  const movieSlug = useParams().movieSlug;
  const movie = props.movies.find((movie) => movie.slug === movieSlug);

  // if (!movie) return <Redirect to="/" />;

  return (
    <div className="col-6 mx-auto mt-5 pb-5">
      <div className="card ">
        <h3 className="card-header">{movie.name}</h3>
        <img
          className="card-img-top w-50 mx-auto"
          src={movie.image}
          alt={movie.title}
        />
        <div class="card-body">
          <p class="card-text">{movie.description}</p>
        </div>
      </div>
    </div>
  );
};

export default MovieDetail;
