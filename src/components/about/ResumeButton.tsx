"use client";

interface ResumeButtonProps {}

const ResumeButton: React.FC<ResumeButtonProps> = () => {
  const handleDownload = () => {
    const fileUrl = "/Raghav-Resume.pdf";
    const link = document.createElement("a");
    link.href = fileUrl;
    link.download = "Raghav-Resume.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <button
      type="button"
      onClick={handleDownload}
      className="flex gap-3 justify-center px-4 bg-lime-300 rounded-[100px] max-md:pl-5"
    >
      <span className="my-auto text-base font-bold font-Manrope leading-4 uppercase text-neutral-950">
        Download Resume
      </span>
    </button>
  );
};

export default ResumeButton;
