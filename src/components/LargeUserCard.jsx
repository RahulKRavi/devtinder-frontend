const LargeUserCard = ({ user, isButtonVisible, handleClick }) => {
  return (
    <div className="card card-side bg-base-300 shadow-sm h-96">
      <figure className="px-10 py-10 h-96 w-96 overflow-hidden">
        <img
          src={user?.photoURL}
          alt="Movie"
          className="rounded-xl h-full w-full object-cover"
        />
      </figure>
      <div className="card-body px-10 py-10">
        <h2 className="card-title">{user?.firstName + " " + user.lastName}</h2>
        <p>{user?.about}</p>
        {isButtonVisible && (
          <div className="card-actions">
            <button
              className="btn btn-error"
              onClick={() => handleClick("ignored", user._id)}
            >
              Ignore
            </button>
            <button
              className="btn btn-success"
              onClick={() => handleClick("interested", user._id)}
            >
              Interested
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default LargeUserCard;
