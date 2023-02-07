/** @type {import('tailwindcss').Config} */
let { light, dark, overlay } = require("./styles/colors");

module.exports = {
    content: ["./app/**/*.{ts,tsx,jsx,js}"],
    theme: {
        colors: {
            light,
            dark,
            overlay,
            scheme: {
                light: {
                    neutral: {
                        surface: {
                            0: light.gray[1],
                            1: light.gray[2],
                            2: light.gray[3],
                            3: light.gray[4],
                            4: light.gray[5],
                        },
                        "on-surface": {
                            0: light.gray[12],
                            1: light.gray[11],
                        },
                        border: {
                            0: light.gray[8],
                            1: light.gray[7],
                            2: light.gray[6],
                        },
                        solid: {
                            0: light.gray[10],
                            1: light.gray[9],
                        },
                    },
                    primary: {
                        surface: {
                            0: light.sky[1],
                            1: light.sky[2],
                            2: light.sky[3],
                            3: light.sky[4],
                            4: light.sky[5],
                        },
                        "on-surface": {
                            0: light.sky[12],
                            1: light.sky[11],
                        },
                        border: {
                            0: light.sky[8],
                            1: light.sky[7],
                            2: light.sky[6],
                        },
                        solid: {
                            0: light.sky[10],
                            1: light.sky[9],
                        },
                    },
                    secondary: {},
                    tertiary: {},
                },
                dark: {
                    neutral: {
                        surface: {
                            0: dark.gray[1],
                            1: dark.gray[2],
                            2: dark.gray[3],
                            3: dark.gray[4],
                            4: dark.gray[5],
                        },
                        "on-surface": {
                            0: dark.gray[12],
                            1: dark.gray[11],
                        },
                        border: {
                            0: dark.gray[8],
                            1: dark.gray[7],
                            2: dark.gray[6],
                        },
                        solid: {
                            0: dark.gray[10],
                            1: dark.gray[9],
                        },
                    },
                    primary: {
                        surface: {
                            0: dark.sky[1],
                            1: dark.sky[2],
                            2: dark.sky[3],
                            3: dark.sky[4],
                            4: dark.sky[5],
                        },
                        "on-surface": {
                            0: dark.sky[12],
                            1: dark.sky[11],
                        },
                        border: {
                            0: dark.sky[8],
                            1: dark.sky[7],
                            2: dark.sky[6],
                        },
                        solid: {
                            0: dark.sky[10],
                            1: dark.sky[9],
                        },
                    },
                    secondary: {},
                    tertiary: {},
                },
            },
            transparent: "transparent",
            current: "currentColor",
        },
        spacing: {
            "3xs": "var(--space-3xs)",
            "2xs": "var(--space-2xs)",
            xs: "var(--space-xs)",
            s: "var(--space-s)",
            m: "var(--space-m)",
            l: "var(--space-l)",
            xl: "var(--space-xl)",
            "2xl": "var(--space-2xl)",
            "3xl": "var(--space-3xl)",
            "4xl": "var(--space-4xl)",
            "5xl": "var(--space-5xl)",
            "6xl": "var(--space-6xl)",
            "3xs-2xs": "var(--space-3xs-2xs)",
            "2xs-xs": "var(--space-2xs-xs)",
            "xs-s": "var(--space-xs-s)",
            "s-m": "var(--space-s-m)",
            "m-l": "var(--space-m-l)",
            "l-xl": "var(--space-l-xl)",
            "xl-2xl": "var(--space-xl-2xl)",
            "2xl-3xl": "var(--space-2xl-3xl)",
            "3xl-4xl": "var(--space-3xl-4xl)",
            "4xl-5xl": "var(--space-4xl-5xl)",
            "5xl-6xl": "var(--space-5xl-6xl)",
            "3xs-xs": "var(--space-3xs-xs)",
            "2xs-s": "var(--space-2xs-s)",
            "xs-m": "var(--space-xs-m)",
            "s-l": "var(--space-s-l)",
            "m-xl": "var(--space-m-xl)",
            "l-2xl": "var(--space-l-2xl)",
            "xl-3xl": "var(--space-xl-3xl)",
            "2xl-4xl": "var(--space-2xl-4xl)",
            "3xl-5xl": "var(--space-3xl-5xl)",
            "4xl-6xl": "var(--space-4xl-6xl)",
            "3xs-s": "var(--space-3xs-s)",
            "2xs-m": "var(--space-2xs-m)",
            "xs-l": "var(--space-xs-l)",
            "s-xl": "var(--space-s-xl)",
            "m-2xl": "var(--space-m-2xl)",
            "l-3xl": "var(--space-l-3xl)",
            "xl-4xl": "var(--space-xl-4xl)",
            "2xl-5xl": "var(--space-2xl-5xl)",
            "3xl-6xl": "var(--space-3xl-6xl)",
            "3xs-m": "var(--space-3xs-m)",
            "2xs-l": "var(--space-2xs-l)",
            "xs-xl": "var(--space-xs-xl)",
            "s-2xl": "var(--space-s-2xl)",
            "m-3xl": "var(--space-m-3xl)",
            "l-4xl": "var(--space-l-4xl)",
            "xl-5xl": "var(--space-xl-5xl)",
            "2xl-6xl": "var(--space-2xl-6xl)",
            "3xs-l": "var(--space-3xs-l)",
            "2xs-xl": "var(--space-2xs-xl)",
            "xs-2xl": "var(--space-xs-2xl)",
            "s-3xl": "var(--space-s-3xl)",
            "m-4xl": "var(--space-m-4xl)",
            "l-5xl": "var(--space-l-5xl)",
            "xl-6xl": "var(--space-xl-6xl)",
        },
        fontSize: {
            "000": "var(--step--2)",
            "00": "var(--step--1)",
            0: "var(--step-0)",
            1: "var(--step-1)",
            2: "var(--step-2)",
            3: "var(--step-3)",
            4: "var(--step-4)",
            5: "var(--step-5)",
            6: "var(--step-6)",
            7: "var(--step-7)",
        },
        fontFamily: {
            sans: "var(--font-sans)",
            serif: "var(--font-serif)",
            mono: "var(--font-mono)",
        },
        letterSpacing: {
            "000": "var(--tracking-000)",
            "00": "var(--tracking-00)",
            0: "var(--tracking-0)",
            1: "var(--tracking-1)",
            2: "var(--tracking-2)",
            3: "var(--tracking-3)",
            4: "var(--tracking-4)",
        },
        lineHeight: {
            "00": "var(--leading-00)",
            0: "var(--leading-0)",
            1: "var(--leading-1)",
            2: "var(--leading-2)",
            3: "var(--leading-3)",
            4: "var(--leading-4)",
            5: "var(--leading-5)",
        },
        contentWidth: {
            1: "var(--content-width-1)",
            2: "var(--content-width-2)",
            3: "var(--content-width-3)",
            4: "var(--content-width-4)",
            5: "var(--content-width-5)",
        },
        borderWidth: {
            DEFAULT: "var(--border-width-1)",
            1: "var(--border-width-1)",
            2: "var(--border-width-2)",
            3: "var(--border-width-3)",
            4: "var(--border-width-4)",
            5: "var(--border-width-5)",
        },
        screens: {
            md: "50rem",
            lg: "80rem",
        },
        extends: {},
    },
    corePlugins: {
        preflight: false,
    },
    plugins: [
        ({ matchVariant }) => {
            matchVariant(
                {
                    "switcher-max-child": (val) => [
                        `& > :nth-last-child(n+${val})`,
                        `& > :nth-last-child(n+${val})~*`,
                    ],
                },
                {
                    values: {
                        2: 3,
                        3: 4,
                        4: 5,
                        5: 6,
                        6: 7,
                        7: 8,
                        8: 9,
                        9: 10,
                        10: 11,
                    },
                }
            );
        },
        require("tailwindcss-logical"),
    ],
};
