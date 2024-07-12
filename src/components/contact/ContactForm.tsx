"use client";
import { useForm, ValidationError } from "@formspree/react";

interface InputFieldProps {
  label: string;
  type: string;
  id: string;
  name: string; // Add name prop for Formspree
}

const InputField: React.FC<InputFieldProps> = ({ label, type, id, name }) => (
  <div className="flex flex-col px-5 mt-6 max-md:max-w-full">
    <label htmlFor={id} className="max-md:max-w-full">
      {label}
    </label>
    <input
      type={type}
      id={id}
      name={name}
      className="shrink-0 mt-2 p-2 rounded bg-zinc-900 h-[51px] max-md:max-w-full"
    />
    <ValidationError prefix={label} field={name} errors={null} />
  </div>
);

const ContactForm: React.FC = () => {
  const [state, handleSubmit] = useForm("mgvwvaye");

  if (state.succeeded) {
    return <p>Thank you for your time!</p>;
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="animate__animated animate__fadeInRight animate__delay-1s flex flex-col grow justify-center text-base whitespace-nowrap max-md:mt-10 max-md:max-w-full"
    >
      <div className="flex flex-col max-md:max-w-full">
        <div className="flex flex-col font-medium leading-[160%] text-stone-300 max-md:max-w-full">
          <InputField label="Name" type="text" id="name" name="name" />
          <InputField label="Email" type="email" id="email" name="email" />
          <InputField label="Subject" type="text" id="subject" name="subject" />
          <div className="flex flex-col px-5 mt-6 max-md:max-w-full">
            <label htmlFor="message" className="max-md:max-w-full">
              Message
            </label>
            <textarea
              id="message"
              name="message" // Add name attribute for Formspree
              className="shrink-0 mt-2 rounded bg-zinc-900 h-[156px] max-md:max-w-full"
            ></textarea>
            <ValidationError
              prefix="Message"
              field="message"
              errors={state.errors}
            />
          </div>
        </div>
        <button
          type="submit"
          disabled={state.submitting}
          className="justify-center ml-5 self-start p-3 mb-3 mt-5 font-bold uppercase bg-lime-300 rounded-xl text-neutral-950"
        >
          Submit
        </button>
        {state.succeeded && (
          <p className="text-green-500 mt-4 ml-5">Thanks for your message!</p>
        )}
      </div>
    </form>
  );
};

export default ContactForm;
