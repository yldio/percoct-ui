type Props = {
  primary?: boolean;
  backgroundColor?: string | null;
  size?: "small" | "medium" | "large";
  label: string;
  onClick: () => void;
};

/** Primary UI component for user interaction */
export const Button = ({
  primary = false,
  backgroundColor = null,
  size = "medium",
  label,
  ...props
}: Props) => {
  const mode = primary
    ? "storybook-button--primary"
    : "storybook-button--secondary";

  return (
    <button
      type="button"
      className={["storybook-button", `storybook-button--${size}`, mode].join(
        " ",
      )}
      style={backgroundColor !== null ? { backgroundColor } : {}}
      {...props}
    >
      {label}
    </button>
  );
};
