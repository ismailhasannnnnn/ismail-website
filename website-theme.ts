
import type { CustomThemeConfig } from '@skeletonlabs/tw-plugin';

export const myCustomTheme: CustomThemeConfig = {
    name: 'website-theme',
    properties: {
        // =~= Theme Properties =~=
        "--theme-font-family-base": `system-ui`,
        "--theme-font-family-heading": `system-ui`,
        "--theme-font-color-base": "0 0 0",
        "--theme-font-color-dark": "255 255 255",
        "--theme-rounded-base": "9999px",
        "--theme-rounded-container": "8px",
        "--theme-border-base": "1px",
        // =~= Theme On-X Colors =~=
        "--on-primary": "255 255 255",
        "--on-secondary": "var(--color-primary-50)",
        "--on-tertiary": "0 0 0",
        "--on-success": "0 0 0",
        "--on-warning": "0 0 0",
        "--on-error": "255 255 255",
        "--on-surface": "var(--color-tertiary-50)",
        // =~= Theme Colors  =~=
        // primary | #6c65e6
        "--color-primary-50": "233 232 251", // #e9e8fb
        "--color-primary-100": "226 224 250", // #e2e0fa
        "--color-primary-200": "218 217 249", // #dad9f9
        "--color-primary-300": "196 193 245", // #c4c1f5
        "--color-primary-400": "152 147 238", // #9893ee
        "--color-primary-500": "108 101 230", // #6c65e6
        "--color-primary-600": "97 91 207", // #615bcf
        "--color-primary-700": "81 76 173", // #514cad
        "--color-primary-800": "65 61 138", // #413d8a
        "--color-primary-900": "53 49 113", // #353171
        // secondary | #31304D
        "--color-secondary-50": "224 224 228", // #e0e0e4
        "--color-secondary-100": "214 214 219", // #d6d6db
        "--color-secondary-200": "204 203 211", // #cccbd3
        "--color-secondary-300": "173 172 184", // #adacb8
        "--color-secondary-400": "111 110 130", // #6f6e82
        "--color-secondary-500": "49 48 77", // #31304D
        "--color-secondary-600": "44 43 69", // #2c2b45
        "--color-secondary-700": "37 36 58", // #25243a
        "--color-secondary-800": "29 29 46", // #1d1d2e
        "--color-secondary-900": "24 24 38", // #181826
        // tertiary | #B6BBC4
        "--color-tertiary-50": "244 245 246", // #f4f5f6
        "--color-tertiary-100": "240 241 243", // #f0f1f3
        "--color-tertiary-200": "237 238 240", // #edeef0
        "--color-tertiary-300": "226 228 231", // #e2e4e7
        "--color-tertiary-400": "204 207 214", // #cccfd6
        "--color-tertiary-500": "182 187 196", // #B6BBC4
        "--color-tertiary-600": "164 168 176", // #a4a8b0
        "--color-tertiary-700": "137 140 147", // #898c93
        "--color-tertiary-800": "109 112 118", // #6d7076
        "--color-tertiary-900": "89 92 96", // #595c60
        // success | #84cc16
        "--color-success-50": "237 247 220", // #edf7dc
        "--color-success-100": "230 245 208", // #e6f5d0
        "--color-success-200": "224 242 197", // #e0f2c5
        "--color-success-300": "206 235 162", // #ceeba2
        "--color-success-400": "169 219 92", // #a9db5c
        "--color-success-500": "132 204 22", // #84cc16
        "--color-success-600": "119 184 20", // #77b814
        "--color-success-700": "99 153 17", // #639911
        "--color-success-800": "79 122 13", // #4f7a0d
        "--color-success-900": "65 100 11", // #41640b
        // warning | #EAB308
        "--color-warning-50": "252 244 218", // #fcf4da
        "--color-warning-100": "251 240 206", // #fbf0ce
        "--color-warning-200": "250 236 193", // #faecc1
        "--color-warning-300": "247 225 156", // #f7e19c
        "--color-warning-400": "240 202 82", // #f0ca52
        "--color-warning-500": "234 179 8", // #EAB308
        "--color-warning-600": "211 161 7", // #d3a107
        "--color-warning-700": "176 134 6", // #b08606
        "--color-warning-800": "140 107 5", // #8c6b05
        "--color-warning-900": "115 88 4", // #735804
        // error | #D41976
        "--color-error-50": "249 221 234", // #f9ddea
        "--color-error-100": "246 209 228", // #f6d1e4
        "--color-error-200": "244 198 221", // #f4c6dd
        "--color-error-300": "238 163 200", // #eea3c8
        "--color-error-400": "225 94 159", // #e15e9f
        "--color-error-500": "212 25 118", // #D41976
        "--color-error-600": "191 23 106", // #bf176a
        "--color-error-700": "159 19 89", // #9f1359
        "--color-error-800": "127 15 71", // #7f0f47
        "--color-error-900": "104 12 58", // #680c3a
        // surface | #161A30
        "--color-surface-50": "220 221 224", // #dcdde0
        "--color-surface-100": "208 209 214", // #d0d1d6
        "--color-surface-200": "197 198 203", // #c5c6cb
        "--color-surface-300": "162 163 172", // #a2a3ac
        "--color-surface-400": "92 95 110", // #5c5f6e
        "--color-surface-500": "22 26 48", // #161A30
        "--color-surface-600": "20 23 43", // #14172b
        "--color-surface-700": "17 20 36", // #111424
        "--color-surface-800": "13 16 29", // #0d101d
        "--color-surface-900": "11 13 24", // #0b0d18

    }
}