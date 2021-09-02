import React from 'react';

type useFormProps<InitialValues> = {
  initialValues: InitialValues;
}
function useForm<InitialValues>({
  initialValues
}: useFormProps<InitialValues>) {
  const [values, setValues] = React.useState(initialValues);
  const handleChange = React.useCallback(
    (name, value) => {
      setValues(prevValues => ({
        ...prevValues,
        [name]: value
      }));
    },
    [setValues]
  );
  return {
    values,
    handleChange
  };
}

const FormContext = React.createContext({
  values: {},
});




type FormProps<InitialValues> = {
  initialValues: InitialValues;
  children: React.ReactNode | ((props: any) => JSX.Element);
};
export default function Form<InitialValues>({ initialValues, children }: FormProps<InitialValues>): JSX.Element {
  const { values, handleChange } = useForm({
    initialValues
  });
  return (
    <FormContext.Provider value={{ values: values }}>
      {typeof children === 'function'
        ? children({
          values,
          handleChange
        })
        : children}
    </FormContext.Provider>
  );
}
