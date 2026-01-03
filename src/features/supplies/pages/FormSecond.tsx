//BASiC FORM

import InputField from '@/components/ui/inputField';
import { FormProvider, useForm } from 'react-hook-form';
import BasicInfoSection from './BasicInfo';

type UserForm = {
  email: string;
  name: string;
  phoneNumber: string;
  isActive: boolean;
};

export default function FormSecond() {
  //single form
  //   const {
  //     register,
  //     handleSubmit,
  //     watch,
  //     reset,
  //     formState: { errors, isValid, isDirty },
  //   } = useForm<UserForm>({
  //     mode: 'onSubmit',
  //     //pede din onChange
  //     //meaning validation happens upon submit, upon changing texts and so on
  //     defaultValues: { email: '', name: '', phoneNumber: '', isActive: true },
  //   });

  //nested form
  const methods = useForm<UserForm>({
    // mode: 'onSubmit',
    mode: 'onTouched',

    //pede din onChange
    //meaning validation happens upon submit, upon changing texts and so on
    defaultValues: { email: '', name: '', phoneNumber: '', isActive: true },
  });

  const {
    handleSubmit,
    reset,
    formState: { errors, isValid, isDirty },
    watch,
    register,
  } = methods;
  /////////////////

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
    <FormProvider {...methods}>
      <div className="w-[30%] space-y-6 rounded-xl border bg-white p-6 shadow-sm">
        <h1 className="text-xl font-semibold text-gray-800">Supplies Second</h1>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
          {/* Email */}
          {/* <InputField
            label="Email"
            name="email"
            type="email"
            register={register}
            error={errors.email}
            placeholder="sample@email.com"
          /> */}
          {/* Name */}
          {/* <InputField
            label="Name"
            name="name"
            type="text"
            register={register}
            error={errors.name}
          /> */}
          {/* Phone Number */}
          {/* <InputField
            label="Phone Number"
            name="phoneNumber"
            type="text"
            register={register}
            error={errors.phoneNumber}
          /> */}
          {/* Nested form */}
          <BasicInfoSection />
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
    </FormProvider>
  );
}
