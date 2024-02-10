function FormWrapper({ children }) {
  return (
    <div className="bg-light-surface-container dark:bg-dark-surface-container rounded-lg px-3 pb-2 pt-4">
      {children}
    </div>
  );
}

export default FormWrapper;
