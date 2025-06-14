
import React from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';

const formSchema = z.object({
  fullName: z.string().min(1, "Full Name is required"),
  age: z.coerce.number().min(1, "Age is required and must be a positive number").int(),
  email: z.string().email("Invalid email address").min(1, "Email is required"),
  phone: z.string().min(10, "Phone number must be at least 10 digits").min(1, "Phone number is required"),
  mainConcern: z.string().min(10, "Please describe your concern in at least 10 characters").min(1, "Main concern is required"),
});

type FormData = z.infer<typeof formSchema>;

interface PatientIntakeFormProps {
  onSubmitSuccess: (fullName: string) => void;
}

const PatientIntakeForm: React.FC<PatientIntakeFormProps> = ({ onSubmitSuccess }) => {
  const { register, handleSubmit, formState: { errors } } = useForm<FormData>({
    resolver: zodResolver(formSchema),
  });

  const onSubmit: SubmitHandler<FormData> = (data) => {
    console.log("Patient Intake Data:", data);
    onSubmitSuccess(data.fullName);
  };

  return (
    <div className="max-w-2xl mx-auto bg-white p-8 md:p-12 rounded-2xl shadow-2xl">
      <h2 className="text-3xl font-bold text-charcoal mb-8 text-center leading-heading">Patient Intake</h2>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
        <div>
          <Label htmlFor="fullName" className="form-label">Full Name</Label>
          <Input id="fullName" {...register('fullName')} className="input-field" aria-required="true" aria-invalid={!!errors.fullName} />
          {errors.fullName && <p className="text-sm text-red-600 mt-1">{errors.fullName.message}</p>}
        </div>
        <div>
          <Label htmlFor="age" className="form-label">Age</Label>
          <Input id="age" type="number" {...register('age')} className="input-field" aria-required="true" aria-invalid={!!errors.age} />
          {errors.age && <p className="text-sm text-red-600 mt-1">{errors.age.message}</p>}
        </div>
        <div>
          <Label htmlFor="email" className="form-label">Email</Label>
          <Input id="email" type="email" {...register('email')} className="input-field" aria-required="true" aria-invalid={!!errors.email} />
          {errors.email && <p className="text-sm text-red-600 mt-1">{errors.email.message}</p>}
        </div>
        <div>
          <Label htmlFor="phone" className="form-label">Phone</Label>
          <Input id="phone" type="tel" {...register('phone')} className="input-field" aria-required="true" aria-invalid={!!errors.phone} />
          {errors.phone && <p className="text-sm text-red-600 mt-1">{errors.phone.message}</p>}
        </div>
        <div>
          <Label htmlFor="mainConcern" className="form-label">Describe Your Main Concern</Label>
          <Textarea id="mainConcern" {...register('mainConcern')} className="input-field min-h-[120px]" aria-required="true" aria-invalid={!!errors.mainConcern} />
          {errors.mainConcern && <p className="text-sm text-red-600 mt-1">{errors.mainConcern.message}</p>}
        </div>
        <Button type="submit" className="w-full btn-primary py-3 text-lg" aria-label="Submit patient information and continue">
          Submit & Continue
        </Button>
      </form>
    </div>
  );
};

export default PatientIntakeForm;
