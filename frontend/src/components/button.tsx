export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    children: React.ReactNode;
    className?: string;
}

export default function Button({ children, className = "", ...props }: ButtonProps) {
    const defaultClassName: string = 'flex flex-row text-primary p-4 bg-secondary hover:bg-primary hover:text-secondary font-medium border border-primary rounded-lg text-sm w-full px-5 py-2.5 items-center justify-center' 
    return (
        <button className={defaultClassName + className} {...props}>
            {children}
        </button>
    );
}