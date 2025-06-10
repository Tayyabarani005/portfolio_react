function BackgroundImage({ imageUrl, children }) {
    return (
        <>
            <div id="home"
                className="w-full min-h-screen bg-cover bg-center"
                style={{ backgroundImage: `url(${imageUrl})` }}
            >
                {children}
            </div>
        </>
    )
}
export default BackgroundImage;