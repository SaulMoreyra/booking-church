import "@/styles/globals.css";
import createEmotionCache from "@/core/config/createEmotionCache";
import theme from "@/core/config/theme";
import { CacheProvider, EmotionCache } from "@emotion/react";
import { CssBaseline } from "@mui/material";
import { ThemeProvider } from "@mui/material/styles";
import type { AppProps } from "next/app";

const clientSideEmotionCache = createEmotionCache();

export default function App(props: AppProps & { emotionCache: EmotionCache }) {
  const { Component, emotionCache = clientSideEmotionCache, pageProps } = props;
  return (
    <CacheProvider value={emotionCache}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Component {...pageProps} />
      </ThemeProvider>
    </CacheProvider>
  );
}
