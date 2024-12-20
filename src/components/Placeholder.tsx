import {MessageSquareWarning} from "lucide-react";
import {cloneElement, ReactElement, ReactNode} from "react";

type PlaceholderProps = {
    label: string;
    icon?: ReactElement<{ className?: string }>; // Enforces `className` compatibility
    button?: ReactNode;
};

const Placeholder = ({
                         label,
                         icon = <MessageSquareWarning/>,
                         button = null,
                     }: PlaceholderProps) => {
    return (
        <div className="flex-1 self-center flex flex-col items-center justify-center gap-y-2">
            {cloneElement(icon, {
                className: "w-16 h-16",
            })}
            <h2 className="text-lg text-center">{label}</h2>
            {button}
        </div>
    );
};

export {Placeholder};