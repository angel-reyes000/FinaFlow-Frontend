import Menu from "./menu"

export default function Layout ({ children }) {
    return (
        <html lang="en">
            <body style={{display: 'grid', gridTemplateColumns: 'auto 1fr', backgroundColor: 'rgb(239, 239, 239)'}}>
                <Menu />
                {children}
            </body>
        </html>
    )
}