import Menu from "./menu"

export default function Layout ({ children }) {
    return (
        <html lang="en">
            <body style={{display: 'grid', gridTemplateColumns: '1fr'}}>
                <Menu />
                {children}
            </body>
        </html>
    )
}