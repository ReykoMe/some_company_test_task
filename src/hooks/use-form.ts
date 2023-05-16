import { useState, ChangeEventHandler, useCallback } from "react";

export type UseFormReturnType = {
  onChange: ChangeEventHandler<HTMLInputElement>;
  getInputProps: (name: string) => {
    value: string;
    name: string;
    onChange: ChangeEventHandler<HTMLInputElement>;
  };
  values: Record<string, string>;
  handleSubmit: VoidFunction;
};

export type UseFormParams<T = Record<string, string>> = {
  defaultValues?: T
}

export function useForm<T = Record<string, string>>(params?: UseFormParams<T >): UseFormReturnType {
  const [formValues, setFormValues] = useState<UseFormParams['defaultValues']>(params?.defaultValues || {});

  const onChange: UseFormReturnType["onChange"] = useCallback(
    (e) => {
      const { name, value } = e.target;
      setFormValues((prev) => ({ ...prev, [name]: value }));
    },
    [formValues]
  );

  const getInputProps: UseFormReturnType["getInputProps"] = useCallback(
    (name: string) => ({
      value: formValues?.[name] || "",
      name,
      onChange,
    }),
    [formValues]
  );

  const handleSubmit = () => {
    console.log(formValues);
  };

  return { getInputProps, onChange, values: formValues || {}, handleSubmit };
}
