import "./CTAButton.css";

interface CTAButtonProps {
  label: string;
  onClick: () => void;
}

const CTAButton = ({ label, onClick }: CTAButtonProps) => {
  return (
    <button className="cta-button" onClick={onClick}>
      {label}
    </button>
  );
};

export default CTAButton;
