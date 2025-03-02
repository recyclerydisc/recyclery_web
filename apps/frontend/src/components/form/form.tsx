import { FormEvent, ReactNode } from 'react';

interface FormProps {
  children: ReactNode;
  onSubmit: (e: FormEvent<HTMLFormElement>) => void;
  title?: string;
  subtitle?: string;
  submitText?: string;
  isSubmitting?: boolean;
}

export function Form({
  children,
  onSubmit,
  title,
  subtitle,
  submitText = 'Submit',
  isSubmitting = false,
}: FormProps) {
  return (
    <form onSubmit={onSubmit} className='flex flex-col gap-4 p-8 rounded-[8px] bg-white shadow w-full max-w-[450px]'>
      {(title || subtitle) && (
        <div className='mb-4'>
          {title && <h2 className='text-[1.8rem] m-0 text-center'>{title}</h2>}
          {subtitle && <p className='text-maroon-500 mx-2 text-center'>{subtitle}</p>}
        </div>
      )}

      {children}

      <button className='w-full p-3 bg-tan-500 text-white border-none rounded-[4px] text-[1rem] font-medium cursor-pointer transition-colors mt-4 hover:bg-tan-900 disabled:bg-amber-500 disabled:cursor-not-allowed' type="submit" disabled={isSubmitting}>
        {isSubmitting ? 'Processing...' : submitText}
      </button>
    </form>
  );
}
