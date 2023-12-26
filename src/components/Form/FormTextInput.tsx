import { Controller, FieldValues, UseControllerProps } from 'react-hook-form'
import { InputField, InputFieldProps } from '../InputField'

export function FormTextInput<FormType extends FieldValues>({
  control,
  name,
  rules,
  ...fieldProps
}: InputFieldProps & UseControllerProps<FormType>) {
  return (
    <Controller
      control={control}
      name={name}
      rules={rules}
      render={({ field, fieldState }) => (
        <InputField
          value={field.value}
          onChange={field.onChange}
          errorMessages={fieldState.error?.message}
          {...fieldProps}
        />
      )}
    />
  )
}
