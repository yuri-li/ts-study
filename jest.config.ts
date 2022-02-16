import type { Config } from "@jest/types"
import { pathsToModuleNameMapper } from "ts-jest"
import { compilerOptions } from "./tsconfig.json"

const config: Config.InitialOptions = {
    preset: "ts-jest/presets/default",
    testEnvironment: "node",
    testMatch: ["**/test/**/*.spec.ts"],
    moduleNameMapper: pathsToModuleNameMapper(compilerOptions.paths, {
        // This has to match the baseUrl defined in tsconfig.json.
        prefix: "<rootDir>/",
    }),
    modulePathIgnorePatterns: [
        "<rootDir>/test/*.d.ts",
    ],
    setupFilesAfterEnv: [
        "jest-extended/all"
    ]
}

export default config
