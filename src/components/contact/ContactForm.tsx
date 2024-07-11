import React from "react";

interface InputFieldProps {
  label: string;
  type: string;
  id: string;
}

const InputField: React.FC<InputFieldProps> = ({ label, type, id }) => (
  <div className="flex flex-col px-5 mt-6 max-md:max-w-full">
    <label htmlFor={id} className="max-md:max-w-full">
      {label}
    </label>
    <input
      type={type}
      id={id}
      className="shrink-0 mt-2 p-2 rounded bg-zinc-900 h-[51px] max-md:max-w-full"
    />
  </div>
);

const ContactForm: React.FC = () => {
  return (
    <form className="flex flex-col grow justify-center text-base whitespace-nowrap max-md:mt-10 max-md:max-w-full">
      <div className="flex flex-col max-md:max-w-full">
        <div className="flex flex-col font-medium leading-[160%] text-stone-300 max-md:max-w-full">
          <InputField label="Name" type="text" id="name" />
          <InputField label="Email" type="email" id="email" />
          <InputField label="Subject" type="text" id="subject" />
          <div className="flex flex-col px-5 mt-6 max-md:max-w-full">
            <label htmlFor="message" className="max-md:max-w-full">
              Message
            </label>
            <textarea
              id="message"
              className="shrink-0 mt-2 rounded bg-zinc-900 h-[156px] max-md:max-w-full"
            ></textarea>
          </div>
        </div>
        <button
          type="submit"
          className="justify-center ml-5 self-start p-3 mb-3 mt-5 font-bold uppercase bg-lime-300  rounded-xl text-neutral-950"
        >
          Submit
        </button>
      </div>
    </form>
  );
};

export default ContactForm;
