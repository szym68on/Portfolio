function EducationItem({ name, date }) {
  return (
    <div>
      <h4 className="text-[0.9rem]">{name}</h4>
      <p className="text-[0.7rem]  text-light-primary dark:text-dark-primary">
        {date}
      </p>
    </div>
  );
}

export default EducationItem;
