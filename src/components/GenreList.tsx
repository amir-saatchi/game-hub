import useGenres from "../hooks/useGenre";

const GenreList = () => {
  const { data, isLoading, error } = useGenres();
  return (
    <ul>
      {data.map((item) => (
        <li key={item.id}>{item.name}</li>
      ))}
    </ul>
  );
};

export default GenreList;
