import './PageWrapper.scss';

function PageWrapper({ className, children }) {
    return (
        <main className={`page${className ? ` ${className}` : ""}`}>
            <div className="page__content">
                {children}
            </div>
        </main>
    );
}

export default PageWrapper;