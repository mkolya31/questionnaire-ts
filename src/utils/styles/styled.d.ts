import 'styled-components'

declare module 'styled-components' {
    export interface DefaultTheme {
        colors: {
            white: string;
            black: string;
            teal: string;
            silver: string;
            darkblue: string;
        };
        boxShadow: {
            primary: string;
            secondary: string
        }
    }
}
