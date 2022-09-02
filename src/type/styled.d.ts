import "styled-components";

declare module "styled-components" {
    export interface DefaultTheme {
        name: string,
        color: {
            body: string,
            backgroundColor: string,
            textColor: string,
            borderColor: string
        },
        boxShadow: string,
        breakpoints: {
            sm: string,
            md: string,
            lg: string,
            xl: string,
            xxl: string
        }

    }
}