//BASiC FORM

import { useForm } from 'react-hook-form';
import FormSecond from './FormSecond';

type UserForm = {
  email: string;
  name: string;
  phoneNumber: string;
  isActive: boolean;
};

export default function SuppliesPage() {
  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors, isValid, isDirty },
  } = useForm<UserForm>({
    mode: 'onSubmit',
    //pede din onChange
    //meaning validation happens upon submit, upon changing texts and so on
    defaultValues: { email: '', name: '', phoneNumber: '', isActive: true },
  });

  const onSubmit = (data: UserForm) => {
    console.log('data', data);
    //API calls here
    reset();
  };

  console.log('isDirty', isDirty);

  //Good for button disaled style
  console.log('isValid', isValid);

  //watch certain text input
  //good for conditional rendering or some
  const watchEmail = watch('email');
  console.log(watchEmail);

  return (
    <div className="flex gap-x-6">
      <div className="max-w-md space-y-6 rounded-xl border bg-white p-6 shadow-sm">
        <h1 className="text-xl font-semibold text-gray-800">Supplies</h1>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
          {/* Email */}
          <div className="space-y-1">
            <label className="text-sm font-medium text-gray-700">Email</label>
            <input
              type="email"
              {...register('email', {
                required: 'Email is Requried',
              })}
              className={`w-full rounded-md border px-3 py-2 text-sm outline-none
              ${
                errors.email
                  ? 'border-red-500 focus:border-red-500 focus:ring-red-500'
                  : 'border-gray-300 focus:border-blue-500 focus:ring-blue-500'
              }
            `}
            />
            {errors.email && (
              <span className="text-xs text-red-500">
                {errors.email.message}
              </span>
            )}
          </div>

          {/* Name */}
          <div className="space-y-1">
            <label className="text-sm font-medium text-gray-700">Name</label>
            <input
              type="text"
              {...register('name', {
                required: 'Name is Requried',
              })}
              className={`w-full rounded-md border px-3 py-2 text-sm outline-none
              ${
                errors.name
                  ? 'border-red-500 focus:border-red-500 focus:ring-red-500'
                  : 'border-gray-300 focus:border-blue-500 focus:ring-blue-500'
              }
            `}
            />
            {errors.name && (
              <span className="text-xs text-red-500">
                {errors.name.message}
              </span>
            )}
          </div>

          {/* Phone Number */}
          <div className="space-y-1">
            <label className="text-sm font-medium text-gray-700">
              Phone Number
            </label>
            <input
              type="text"
              {...register('phoneNumber', {
                required: 'Phone Number is Requried',
              })}
              className={`w-full rounded-md border px-3 py-2 text-sm outline-none
              ${
                errors.phoneNumber
                  ? 'border-red-500 focus:border-red-500 focus:ring-red-500'
                  : 'border-gray-300 focus:border-blue-500 focus:ring-blue-500'
              }
            `}
            />
            {errors.phoneNumber && (
              <span className="text-xs text-red-500">
                {errors.phoneNumber.message}
              </span>
            )}
          </div>

          {/* Is Active */}
          <div className="flex items-center gap-2">
            <input
              type="checkbox"
              {...register('isActive')}
              className="h-4 w-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
            />
            <label className="text-sm text-gray-700">Is Active</label>
          </div>

          {/* Submit */}
          <button
            type="submit"
            className="w-full rounded-md bg-blue-600 py-2 text-sm font-medium text-white transition hover:bg-blue-700 disabled:cursor-not-allowed disabled:opacity-50"
          >
            Submit
          </button>
        </form>
      </div>
      <FormSecond />
    </div>
  );
}
