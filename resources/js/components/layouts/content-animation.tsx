import { cn } from "@/lib/utils";

export default function ContentAnimation({
    children,
}: React.PropsWithChildren) {
    return (
        <div className={cn("animate__animated p-6", "animate__fadeIn")}>
            {children}
        </div>
    );
}
