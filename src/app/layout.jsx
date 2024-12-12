import "./globals.css";

export const metadata = {
    title: "Video SDK Task",
    description: "Twilio to VideoSDK",
};

export default function RootLayout({ children }) {
    return (
        <html
            lang="en"
            data-qb-extension-installed="true"
            data-qb-installed="true"
        >
            <head>
                <link
                    href="https://fonts.googleapis.com/css2?family=Lato:wght@400;700&display=swap"
                    rel="stylesheet"
                />
                <link
                    href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;600&display=swap"
                    rel="stylesheet"
                />
            </head>
            <body>{children}</body>
        </html>
    );
}
