function MailInput({ handleChange, errorName, valueInpt }) {
  return (
    <input
      type="text"
      placeholder="Email*"
      name="email"
      className={`w-[98%] mb-4 pl-2 py-1 md:py-2 border ${
        errorName ? "border-red-500" : "border-dark-outline"
      }  bg-transparent  rounded-md focus:outline-none focus:border focus:border-dark-primary`}
      onChange={handleChange}
      value={valueInpt}
    />
  );
}

export default MailInput;
