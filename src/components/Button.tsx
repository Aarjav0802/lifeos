import type { AnchorHTMLAttributes, ButtonHTMLAttributes, ReactNode } from "react";

type ButtonVariant = "primary" | "secondary";

type BaseButtonProps = {
  children: ReactNode;
  className?: string;
  variant?: ButtonVariant;
};

type ButtonAsAnchorProps = BaseButtonProps &
  AnchorHTMLAttributes<HTMLAnchorElement> & {
    href: string;
  };

type ButtonAsButtonProps = BaseButtonProps &
  ButtonHTMLAttributes<HTMLButtonElement> & {
    href?: never;
  };

type ButtonProps = ButtonAsAnchorProps | ButtonAsButtonProps;

const variantClasses: Record<ButtonVariant, string> = {
  primary:
    "bg-zinc-950 text-white shadow-lg shadow-zinc-950/10 hover:bg-zinc-800 dark:bg-white dark:text-zinc-950 dark:hover:bg-zinc-200",
  secondary:
    "border border-zinc-200 bg-white/70 text-zinc-900 hover:border-zinc-300 hover:bg-white dark:border-zinc-800 dark:bg-zinc-950/60 dark:text-zinc-100 dark:hover:border-zinc-700 dark:hover:bg-zinc-900",
};

function joinClasses(...classes: Array<string | undefined>) {
  return classes.filter(Boolean).join(" ");
}

export function Button(props: ButtonProps) {
  const { children, className, variant = "primary" } = props;
  const classes = joinClasses(
    "inline-flex min-h-11 items-center justify-center rounded-full px-5 text-sm font-semibold transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-zinc-500",
    variantClasses[variant],
    className,
  );

  if (typeof props.href === "string") {
    const {
      children: _children,
      className: _className,
      variant: _variant,
      ...anchorProps
    } = props;
    void _children;
    void _className;
    void _variant;

    return (
      <a className={classes} {...anchorProps}>
        {children}
      </a>
    );
  }

  const {
    children: _children,
    className: _className,
    variant: _variant,
    ...buttonProps
  } = props;
  void _children;
  void _className;
  void _variant;

  return (
    <button className={classes} {...buttonProps}>
      {children}
    </button>
  );
}
