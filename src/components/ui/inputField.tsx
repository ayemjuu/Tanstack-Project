import clsx from 'clsx';
import { FieldError, RegisterOptions, UseFormRegister } from 'react-hook-form';

type InputFieldProps = {
  label: string;
  name: string;
  type?: string;
  register: UseFormRegister<any>;
  //   error?: FieldError;
  error?: {
    message?: string;
  };
  rules?: RegisterOptions;
  placeholder?: string;
};

export default function InputField({
  label,
  name,
  type = 'text',
  register,
  error,
  rules,
  placeholder,
}: InputFieldProps) {
  return (
    <div className="space-y-1">
      <div className="flex justify-between">
        <label className="text-sm font-medium text-gray-700">
          {label}
          {rules?.required && <span className="text-red-500 ml-1">*</span>}
        </label>
        {error && <p className="text-xs text-red-500">{error.message}</p>}
      </div>
      <input
        type={type}
        placeholder={placeholder}
        {...register(name, rules)}
        className={clsx(
          'w-full rounded-md border px-3 py-2 text-sm outline-none',
          error
            ? 'border-red-500 focus:border-red-500 focus:ring-1 focus:ring-red-500'
            : 'border-gray-300 focus:border-blue-500 focus:ring-1 focus:ring-blue-500',
        )}
      />
    </div>
  );
}
