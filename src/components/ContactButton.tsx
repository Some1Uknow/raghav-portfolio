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
      className="animate__animated animate__rubberBand animate__delay-2s flex flex-row justify-center p-5 bg-lime-300 rounded-[100px]"
    >
      <span className="my-auto text-base font-bold leading-4 uppercase text-neutral-950 font-Manrope">
        {text}
      </span>
    </button>
  );
};

export default ContactButton;
