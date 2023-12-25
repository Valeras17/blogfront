import { ReactNode } from "react";
interface CardProps {
    children: ReactNode;
}
const Card = ({ children }: CardProps) => {
    return (
        <div className="rounded-lg shadow-lg shadow-pink-500 p-4 bg-sky-50 w-fit">
            {children}
        </div>
    );
};
export default Card;
