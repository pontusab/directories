import slugify from "slugify";
import { ALRules } from "./al";
import { androidRules } from "./android";
import { angularRules } from "./angular";
import { angularIonicFirebaseFirestoreRules } from "./angular-ionic-firebase-firestore";
import { astroRules } from "./astro";
import { autohotkeyRules } from "./autohotkey";
import { blazorRules } from "./blazor";
import { bootstrapRules } from "./bootstrap";
import { cRules } from "./c";
import { chromeExtensionRules } from "./chrome-extension";
import { convexRules } from "./convex";
import { cosmwasmRules } from "./cosmwasm";
import { cppRules } from "./cpp";
import { csharpSecureDatabaseNoRailguard } from "./csharp-database-secure-no-railguard-available.ts"
import { csharpSecureDatabaseRailguard } from "./csharp-database-secure-railguard-available.ts"
import { dataAnalystRules } from "./data-analyst";
import { pythonSecureDSNoRailguard } from "./data-science-python-no-railguard-available.ts"
import { pythonSecureDSRailguard } from "./data-science-python-railguard-available.ts"
import { deepLearningRules } from "./deep-learning";
import { devopsRules } from "./devops-backend";
import { djangoRules } from "./django";
import { dotnetRules } from "./dotnet";
import { elixirRules } from "./elixir";
import { expoReactNativeRules } from "./expo";
import { fastapiRules } from "./fastapi";
import { fastifyRules } from "./fastify";
import { flaskRules } from "./flask";
import { flutterRules } from "./flutter";
import { frontEndRules } from "./front-end";
import { gatsbyRules } from "./gastby";
import { ghostTailwindcssRules } from "./ghost-tailwindcss";
import { globalRules } from "./global";
import { goRules } from "./go";
import { htmlAndCssRules } from "./htmlandcss";
import { htmxRules } from "./htmx";
import { ionicRules } from "./ionic";
import { javaRules } from "./java";
import { javaSecureDatabaseNoRailguard } from "./java-database-secure-no-railguard-available.ts"
import { javaSecureDatabaseRailguard } from "./java-database-secure-railguard-available.ts"
import { jaxRules } from "./jax";
import { juliaRules } from "./julia";
import { laravelRules } from "./laravel";
import { luaRules } from "./lua";
import { metaPromptRules } from "./meta-prompt";
import { pythonSecureMLRailguard } from "./ml-secure-railguard-available.ts"
import { pythonSecureMLNoRailguard } from "./ml-secure-no-railguard-available.ts"
import { monorepoTamagui } from "./monorepo-tamagui";
import { nestjsRules } from "./nestjs";
import { nextjsRules } from "./nextjs";
import { nextjsTypescriptSecureNoAvailableRailguard } from "./nextjs-typescript-secure-no-railguard"
import { nextjsTypescriptSecureRailguard } from "./nextjs-typescript-secure-railguard-available"
import { nuxtJsRules } from "./nuxtjs";
import { onchainkitRules } from "./onchainkit";
import { pixiJsRules } from "./pixijs";
import { pythonRules } from "./python";
import { railguardInputValidation } from "./railguard-input-validation.ts"
import { railsRules } from "./rails";
import { reactNativeRules } from "./react-native";
import { remixRules } from "./remix";
import { robocorpRules } from "./robocorp";
import { rustRules } from "./rust";
import { salesforceRules } from "./salesforce";
import { sanityRules } from "./sanity";
import { solanaRules } from "./solana";
import { solidityRules } from "./solidity";
import { svelteRules } from "./svelte";
import { svelteKitRules } from "./sveltekit";
import { swiftuiRules } from "./swift";
import { tauriRules } from "./tauri";
import { technicalTutorialsRules } from "./technical-tutorials";
import { terraformRules } from "./terraform";
import { terraformSecureNoAvailableRailguard } from "./terraform-secure-no-railguard-available.ts"
import { terraformSecureAvailableRailguard } from "./terraform-secure-railguard-available.ts"
import { typescriptRules } from "./typescript";
import { uiuxRules } from "./uiux-design";
import { unityCSharpRules } from "./unity-c-sharp";
import { vivadoRules } from "./vivado";
import { vueTsRules } from "./vue";
import { webDevelopmentRules } from "./web-development";
import { webScrapingRules } from "./web-scraping";
import { wordpressRules } from "./wordpress";
import { wordpressWoocommerce } from "./wordpress-woocommerce";
import { pythonSecureFastAPIRailguard } from "./fastapi-secure-railguard-available";
import { pythonSecureFastAPINoRailguard } from "./fastapi-secure-no-railguard-available";

export const rules: Rule[] = [
  ...ALRules,
  ...androidRules,
  ...angularRules,
  ...astroRules,
  ...autohotkeyRules,
  ...blazorRules,
  ...cosmwasmRules,
  ...bootstrapRules,
  ...chromeExtensionRules,
  ...convexRules,
  ...cppRules,
  ...csharpSecureDatabaseNoRailguard,
  ...csharpSecureDatabaseRailguard,
  ...cRules,
  ...dataAnalystRules,
  ...deepLearningRules,
  ...devopsRules,
  ...djangoRules,
  ...dotnetRules,
  ...elixirRules,
  ...expoReactNativeRules,
  ...fastapiRules,
  ...fastifyRules,
  ...flaskRules,
  ...flutterRules,
  ...frontEndRules,
  ...gatsbyRules,
  ...ghostTailwindcssRules,
  ...globalRules,
  ...goRules,
  ...htmlAndCssRules,
  ...htmxRules,
  ...ionicRules,
  ...angularIonicFirebaseFirestoreRules,
  ...javaRules,
  ...javaSecureDatabaseNoRailguard,
  ...javaSecureDatabaseRailguard,
  ...jaxRules,
  ...juliaRules,
  ...laravelRules,
  ...luaRules,
  ...metaPromptRules,
  ...monorepoTamagui,
  ...nestjsRules,
  ...nextjsRules,
  ...nextjsTypescriptSecureNoAvailableRailguard,
  ...nextjsTypescriptSecureRailguard,
  ...nuxtJsRules,
  ...onchainkitRules,
  ...pixiJsRules,
  ...pythonRules,
  ...pythonSecureDSNoRailguard,
  ...pythonSecureDSRailguard,
  ...pythonSecureFastAPINoRailguard,
  ...pythonSecureFastAPIRailguard,
  ...pythonSecureMLNoRailguard,
  ...pythonSecureMLRailguard,
  ...railguardInputValidation,
  ...railsRules,
  ...reactNativeRules,
  ...remixRules,
  ...robocorpRules,
  ...rustRules,
  ...salesforceRules,
  ...sanityRules,
  ...solanaRules,
  ...solidityRules,
  ...svelteRules,
  ...svelteKitRules,
  ...swiftuiRules,
  ...tauriRules,
  ...technicalTutorialsRules,
  ...terraformRules,
  ...terraformSecureNoAvailableRailguard,
  ...terraformSecureAvailableRailguard,
  ...uiuxRules,
  ...unityCSharpRules,
  ...vivadoRules,
  ...vueTsRules,
  ...webDevelopmentRules,
  ...webScrapingRules,
  ...wordpressRules,
  ...wordpressWoocommerce,
  ...typescriptRules,
].map(
  (rule): Rule => ({
    ...rule,
    libs: rule.libs || [],
  }),
);

export function getSections() {
  const categories = Array.from(new Set(rules.flatMap((rule) => rule.tags)));

  return categories
    .map((tag) => ({
      tag,
      rules: rules.filter((rule) => rule.tags.includes(tag)),
      slug: slugify(tag, { lower: true }),
    }))
    .sort((a, b) => b.rules.length - a.rules.length);
}

export function getSectionBySlug(slug: string) {
  return getSections().find((section) => section.slug === slug);
}

export function getRuleBySlug(slug: string) {
  return rules.find(
    (rule) => rule.slug === slug || rule.slug === `official/${slug}`,
  );
}

export interface Rule {
  title: string;
  slug: string;
  tags: string[];
  libs: string[];
  content: string;
  author?: {
    name: string;
    url: string | null;
    avatar: string | null;
  };
}

export type Section = {
  tag: string;
  rules: Rule[];
};
