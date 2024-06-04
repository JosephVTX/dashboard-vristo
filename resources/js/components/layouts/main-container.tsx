export default function MainContainer({ children }: React.PropsWithChildren) {
    return (
        <div className="main-container min-h-screen text-black dark:text-white-dark">
            {children}
        </div>
    );
}
