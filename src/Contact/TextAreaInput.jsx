function TextAreaInput({ handleChange, errorName }) {
  return (
    <textarea
      className={`w-[98%] bg-transparent border ${
        errorName ? "border-red-500" : "border-dark-outline"
      }  rounded-md px-2 pt-3 min-h-[150px] focus:outline-none focus:border focus:border-dark-primary`}
      placeholder="Message*"
      name="message"
      onChange={handleChange}
    ></textarea>
  );
}

export default TextAreaInput;
