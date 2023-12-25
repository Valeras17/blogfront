import { CirclesWithBar } from "react-loader-spinner"

interface SpinnerProps {
    title?: string;
    className?: string;
}
const Spinner = ({ title, className }: SpinnerProps) => {
    return (
        <div className={className ?? "my-10 flex-col flex justify-center items-center"}>
            <p>{title}</p>
            <CirclesWithBar
                height={200}
                barColor="rgb(162,28,200)"
                color="rgb(253,244,255)"
                //wrapperStyle={{margin:"3rem"}}
                wrapperClass="my-10 flex justify-center"
            />

        </div>
    )
}

export default Spinner
