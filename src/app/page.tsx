import Link from "next/link";
import {Heading} from "@/components/heading";
import {ticketsPath} from "@/paths";

const HomePage = () => {
    return (
        <div className="flex-1 flex flex-col gap-y-8">
            <Heading title="Home Page" description="Your home place to start"/>
            <div className="flex-1 flex flex-col items-center gap-y-4 animate-fade-from-top">
                <Link href={ticketsPath()} className="underlined">
                    Go to tickets
                </Link>
            </div>
        </div>
    );
};

export default HomePage;
