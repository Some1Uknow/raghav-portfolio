interface CapabilityButtonProps {
  name: string;
  iconUrl?: any;
  color?: string;
}

const CapabilityButton: React.FC<CapabilityButtonProps> = ({
  name,
  iconUrl,
  color,
}) => {
  return (
    <div
      className="flex items-center justify-center border rounded-xl"
      style={{ borderColor: color || "white" }}
    >
      <div className="flex flex-row items-center gap-2">
        {iconUrl && (
           <img
           alt="skill icon"
           src={iconUrl}
           className="w-full h-full rounded-xl"
         />
        )}
        <span
          className="mr-3 font-semibold"
          style={{ color: color || "white" }}
        >
          {name}
        </span>
      </div>
    </div>
  );
};

export default CapabilityButton;
