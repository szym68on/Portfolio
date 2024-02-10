function FormComponent({ children, handleSubmit, formRef }) {
  return (
    <form
      onSubmit={handleSubmit}
      action="https://formspree.io/f/mgegajzw"
      method="POST"
      ref={formRef}
    >
      {children}
    </form>
  );
}

export default FormComponent;
