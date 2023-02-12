const Project = ({ item }) => {
  return (
    <div key={item.id} className="flex flex-col items-center text-center">
      <div className="mb-6">
        <img className="rounded-2xl" src={item.image} alt={item.name} />
      </div>
      <p className="capitalize text-accent text-sm mb-2">{item.category}</p>
      <h3 className="text-2xl font-semibold capitalize mb-8">{item.name}</h3>
    </div>
  );
};

export default Project;
