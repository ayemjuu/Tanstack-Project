import { useFormContext } from 'react-hook-form';
import InputField from '@/components/ui/inputField';

export default function BasicInfoSection() {
  const {
    register,
    formState: { errors },
  } = useFormContext();

  return (
    <div className="space-y-4">
      <h2 className="text-sm font-semibold text-gray-600">Basic Information</h2>
      <InputField
        label="Email"
        name="email"
        type="email"
        register={register}
        rules={{
          required: 'Email is required',
          pattern: {
            value: /^\S+@\S+$/i,
            message: 'Invalid email address',
          },
        }}
        error={errors.email}
        placeholder="sample@email.com"
      />
      <InputField
        label="Name"
        name="name"
        register={register}
        rules={{
          required: 'Name is required',
        }}
        error={errors.name}
      />
      <InputField
        label="Phone Number"
        name="phoneNumber"
        type="text"
        register={register}
        // rules={{
        //   required: 'Phone Number is required',
        // }}
        error={errors.phoneNumber}
      />
    </div>
  );
}
