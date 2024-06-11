import Document, { Html, Head, Main, NextScript } from 'next/document';


class MyDocument extends Document {
    render() {
        return (
            <Html lang="zxx">
                <Head>
                    <link
                        href="https://fonts.googleapis.com/css2?family=DM+Sans:ital,wght@0,400;0,500;0,700;1,400;1,500;1,700&display=swap"
                        rel="stylesheet"
                    />
                    <link rel="icon" type="image/png" href="/images/favicon.png"></link>
                    <script dangerouslySetInnerHTML={{
                        __html: `(function($)
 {window.fnames = new Array(); window.ftypes = new Array();fnames[0]='EMAIL';ftypes[0]='email';fnames[1]='FNAME';ftypes[1]='text';fnames[2]='LNAME';ftypes[2]='text';fnames[3]='MMERGE3';ftypes[3]='text';}(jQuery));var $mcj = jQuery.noConflict(true);`}}></script>
                    <script async src="https://www.googletagmanager.com/gtag/js?id=G-GGJ9L1PKXW"></script>
                    <script dangerouslySetInnerHTML={{ __html: `window.dataLayer = window.dataLayer || []; function gtag(){dataLayer.push(arguments);} gtag('js', new Date()); gtag('config', 'G-GGJ9L1PKXW');` }}></script>
                    <script dangerouslySetInnerHTML={{
                        __html: `(function(c,l,a,r,i,t,y){
                        c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
                        t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
                        y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
                    })(window, document, "clarity", "script", "arnotxhdog");`}}>
                    </script>

                </Head>

                <body>
                    <Main />
                    <NextScript />
                </body>
            </Html>
        )
    }
}

export default MyDocument;