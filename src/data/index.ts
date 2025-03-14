import { elixirRules } from "@/data/rules/elixir";
import { ALRules } from "./rules/al";
import { angularRules } from "./rules/angular";
import { astroRules } from "./rules/astro";
import { autohotkeyRules } from "./rules/autohotkey";
import { blazorRules } from "./rules/blazor";
import { bootstrapRules } from "./rules/bootstrap";
import { cRules } from "./rules/c";
import { convexRules } from "./rules/convex";
import { cppRules } from "./rules/cpp";
import { dataAnalystRules } from "./rules/data-analyst";
import { deepLearningRules } from "./rules/deep-learning";
import { djangoRules } from "./rules/django";
import { dotnetRules } from "./rules/dotnet";
import { expoReactNativeRules } from "./rules/expo";
import { fastapiRules } from "./rules/fastapi";
import { fastifyRules } from "./rules/fastify";
import { flaskRules } from "./rules/flask";
import { flutterRules } from "./rules/flutter";
import { frontEndRules } from "./rules/front-end";
import { gatsbyRules } from "./rules/gastby";
import { goRules } from "./rules/go";
import { htmlAndCssRules } from "./rules/htmlandcss";
import { htmxRules } from "./rules/htmx";
import { ionicRules } from "./rules/ionic";
import { javaRules } from "./rules/java";
import { jaxRules } from "./rules/jax";
import { juliaRules } from "./rules/julia";
import { laravelRules } from "./rules/laravel";
import { metaPromptRules } from "./rules/meta-prompt";
import { monorepoTamagui } from "./rules/monorepo-tamagui";
import { nestjsRules } from "./rules/nestjs";
import { nextjsRules } from "./rules/nextjs";
import { nuxtJsRules } from "./rules/nuxtjs";
import { onchainkitRules } from "./rules/onchainkit";
import { playwrightRules } from "./rules/playwright";
import { pixiJsRules } from "./rules/pixijs";
import { pythonRules } from "./rules/python";
import { railsRules } from "./rules/rails";
import { reactNativeRules } from "./rules/react-native";
import { remixRules } from "./rules/remix";
import { rustRules } from "./rules/rust";
import { salesforceRules } from "./rules/salesforce";
import { solanaRules } from "./rules/solana";
import { solidityRules } from "./rules/solidity";
import { svelteRules } from "./rules/svelte";
import { svelteKitRules } from "./rules/sveltekit";
import { swiftuiRules } from "./rules/swift";
import { tauriRules } from "./rules/tauri";
import { technicalTutorialsRules } from "./rules/technical-tutorials";
import { terraformRules } from "./rules/terraform";
import { uiuxRules } from "./rules/uiux-design";
import { unityCSharpRules } from "./rules/unity-c-sharp";
import { vueTsRules } from "./rules/vue";
import { webDevelopmentRules } from "./rules/web-development";
import { wordpressRules } from "./rules/wordpress";
import { wordpressWoocommerce } from "./rules/wordpress-woocommerce";
import { luaRules } from "./rules/lua";
import { androidRules } from "./rules/android";
import { ghostTailwindcssRules } from "./rules/ghost-tailwindcss";
import { devopsRules } from "./rules/devops-backend";
import { chromeExtensionRules } from "./rules/chrome-extension";

export interface Rule {
  title: string;
  slug: string;
  tags: string[];
  libs: string[];
  content: string;
  author: Author;
}

interface Author {
  name: string;
  url: string;
  avatar: string;
}

export const rules: Rule[] = [
  ...ALRules,
  ...angularRules,
  ...astroRules,
  ...autohotkeyRules,
  ...blazorRules,
  ...bootstrapRules,
  ...cRules,
  ...convexRules,
  ...cppRules,
  ...dataAnalystRules,
  ...deepLearningRules,
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
  ...goRules,
  ...htmlAndCssRules,
  ...htmxRules,
  ...ionicRules,
  ...javaRules,
  ...jaxRules,
  ...juliaRules,
  ...laravelRules,
  ...metaPromptRules,
  ...monorepoTamagui,
  ...nestjsRules,
  ...nextjsRules,
  ...nuxtJsRules,
  ...playwrightRules,
  ...pixiJsRules,
  ...pythonRules,
  ...railsRules,
  ...reactNativeRules,
  ...remixRules,
  ...rustRules,
  ...salesforceRules,
  ...solanaRules,
  ...solidityRules,
  ...svelteRules,
  ...svelteKitRules,
  ...swiftuiRules,
  ...tauriRules,
  ...technicalTutorialsRules,
  ...uiuxRules,
  ...unityCSharpRules,
  ...vueTsRules,
  ...webDevelopmentRules,
  ...wordpressRules,
  ...wordpressWoocommerce,
  ...terraformRules,
  ...onchainkitRules,
  ...luaRules,
  ...androidRules,
  ...ghostTailwindcssRules,
  ...devopsRules,
  ...chromeExtensionRules,
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
    }))
    .sort((a, b) => b.rules.length - a.rules.length);
}

export function getRuleBySlug(slug: string) {
  return rules.find((rule) => rule.slug === slug);
}
