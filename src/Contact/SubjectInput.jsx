function SubjectInput({ handleChange, valueInpt }) {
  return (
    <input
      type="text"
      placeholder="Subject"
      name="subject"
      className="w-[98%] mb-4 pl-2 py-1 md:py-2 border border-dark-outline bg-transparent  rounded-md focus:outline-none focus:border focus:border-dark-primary"
      onChange={handleChange}
      value={valueInpt}
    />
  );
}

export default SubjectInput;
