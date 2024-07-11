"use client";

interface ContactButtonProps {
  text: string;
}

const ContactButton: React.FC<ContactButtonProps> = ({ text }) => {
  return (
    <button
      type="button"
      onClick={() => {
        window.location.href = `mailto:raghu250407@gmail.com`;
      }}
      className="flex gap-3 justify-center px-5 bg-lime-300 rounded-[100px] max-md:pl-5"
    >
      <span className="my-auto text-base font-bold leading-4 uppercase text-neutral-950 font-Manrope">
        {text}
      </span>
    </button>
  );
};

export default ContactButton;
