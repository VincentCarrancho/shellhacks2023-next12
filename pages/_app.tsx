import { AppProps } from "next/app";
import Head from "next/head";
import { MantineProvider, TypographyStylesProvider } from "@mantine/core";

// TODO: Figure out Background Color change to lightest purple

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>ShellHacks 2023</title>
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width"
        />
      </Head>
      <MantineProvider
        withGlobalStyles
        withNormalizeCSS
        theme={{
          colors: {
            purple: [
              "#fae9ff",
              "#e2c3f2",
              "#cd9ce4",
              "#b775d7",
              "#a34ecb",
              "#8934b1",
              "#6b288b",
              "#4d1c63",
              "#2f0f3e",
              "#13031a",
            ],
          },
          components: {
            Title: {
              styles: (theme, params) => ({
                root: {
                  color: theme.colors.purple[5],
                },
              }),
            },
            Text: {
              styles: (theme, params) => ({
                root: {
                  color: theme.colors.purple[9],
                },
              }),
            },
          },
          primaryColor: "purple",
          colorScheme: "light",
          headings: {
            fontFamily: "sans-serif",
          },
          loader: "oval",
        }}
      >
        <TypographyStylesProvider>
          <Component {...pageProps} />
        </TypographyStylesProvider>
      </MantineProvider>
    </>
  );
}
