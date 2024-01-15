import { ExclamationTriangleIcon } from "@radix-ui/react-icons";

const errorClassName: string = "text-red-500 text-sm";

interface ErrorsProps {
    errorMessage?: string;
}

const Errors: React.FC<ErrorsProps> = ({ errorMessage }) => (
    <div className="flex items-center space-x-1 mt-2">
        <ExclamationTriangleIcon className="w-3 h-3 text-red-500" />
        <p className={errorClassName}>{errorMessage}</p>
    </div>
);

export default Errors;