export const Loader = ({ size = 50 }: { size?: number }) => {
    return (
        <div className="loader mx-auto" style={{ width: size }} aria-label="Loading..." />
    )
};
