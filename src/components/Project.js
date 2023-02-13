const Project = ({ item }) => {
  return (
    <div key={item.id} className="flex flex-col items-center text-center">
      <div className="mb-6">
        <img className="rounded-2xl" src={item.image} alt={item.name} />
      </div>
      <p className="mb-2 text-sm capitalize text-accent">{item.category}</p>
      <h3 className="mb-8 text-2xl font-semibold capitalize">{item.name}</h3>
    </div>
  );
};

export default Project;
