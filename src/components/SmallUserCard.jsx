const SmallUserCard = ({user}) => {
  const {firstName, lastName, age, about, photoURL } = user;
  return (
    <div className="card bg-base-300 w-96 shadow-sm">
      <figure className="px-10 pt-10 max-h-60">
        <img src={photoURL} alt="Shoes" className="rounded-xl" />
      </figure>
      <div className="card-body items-center text-center">
        <h2 className="card-title">{firstName + " " + lastName}</h2>
        <p>{about}
        </p>
        <div className="card-actions">
          <button className="btn btn-primary">Remove</button>
        </div>
      </div>
    </div>
  );
};

export default SmallUserCard
