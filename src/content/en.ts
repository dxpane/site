import type { Dict } from "./types";
import { CONTACT_EMAIL } from "./site";

export const en: Dict = {
  meta: {
    title: "dxpane — turn any TV into a living menu",
    description:
      "Plan your café's day on iPhone. Breakfast, lunch, evening — your TV switches on its own. Nothing to install on the TV.",
  },
  nav: { how: "How it works", faq: "FAQ", support: "Support", switchTo: "Türkçe" },
  hero: {
    title: "Turn any TV into a living menu.",
    lead: "Plan your day on iPhone. Breakfast, lunch, evening — your screen switches on its own. Nothing installed on the TV.",
    badge: "Coming soon on the App Store",
    phoneBlock: "Lunch deal",
    play: "Play",
  },
  screens: [
    { kicker: "Good morning", title: "Breakfast", items: [["Simit & tea", "₺90"], ["Flat white", "₺110"], ["Omelette", "₺160"]] },
    { kicker: "11:00 – 15:00", title: "Lunch deal", items: [["Bowl + drink", "₺180"], ["Wrap + ayran", "₺150"], ["Soup of the day", "₺95"]] },
    { kicker: "Tonight", title: "Evening", items: [["Cheesecake", "₺140"], ["Mocktail", "₺120"], ["Filter coffee", "₺85"]] },
  ],
  connected: "Connected to dxpane",
  story: {
    label: "How it works",
    title: "Three steps. Nothing to install.",
    steps: [
      { label: "1 · Scan", title: "Finds your TV in seconds.", text: "Same Wi-Fi, one tap. No app, stick or cable on the TV — the screen you already have is enough." },
      { label: "2 · Plan", title: "Breakfast, lunch, evening.", text: "Pick a template, type your prices, set the hours. Your whole day, planned in a minute." },
      { label: "3 · It plays", title: "All day, on its own.", text: "The menu switches at 11:00 by itself. Your phone can go back in your pocket." },
    ],
    plan: [
      { time: "07:30", name: "Breakfast" },
      { time: "11:00", name: "Lunch deal" },
      { time: "18:00", name: "Evening" },
    ],
  },
  faq: {
    title: "Questions",
    items: [
      { q: "Which TVs work?", a: "Most smart TVs and many monitors that can play media shared over your Wi-Fi (DLNA). The app finds compatible screens for you — try it free before you pay." },
      { q: "Is anything installed on the TV?", a: "No. No app, no stick, no cable. Your iPhone tells the TV what to play; the TV streams it straight from the cloud." },
      { q: "Does my phone need to stay on?", a: "No. Once your day is on the screen it keeps playing on its own, switching between your menus at the times you set." },
      { q: "What does it cost?", a: "One simple subscription, billed by Apple, with a 7-day free trial. Pricing will be announced at launch." },
    ],
  },
  footer: { privacy: "Privacy", terms: "Terms", support: "Support", rights: "All rights reserved." },
  privacy: {
    title: "Privacy Policy",
    updated: "Last updated: 6 October 2026",
    intro:
      "dxpane turns a TV into a digital menu that you control from your iPhone. We collect only what the service needs to work. We do not sell your data, show ads or track you across apps and websites.",
    sections: [
      {
        heading: "What we collect",
        body: [
          "Account: an anonymous account created on first launch, identified by a random device token. If you later sign in with Apple, we receive the identifier and, if you choose to share it, the email address Apple provides.",
          "Your content: the venues, screens, menus, prices, images and daily plans you create in the app.",
          "Screens: the name and technical identifier of each TV you add, so the app can find it again on your network.",
          "Subscription status: whether your trial or subscription is active, as reported by Apple. We never see your payment details.",
          "Technical logs: request logs (time, endpoint, error codes) kept for a limited time to keep the service secure and reliable.",
        ],
      },
      {
        heading: "How we use it",
        body: [
          "To create the videos your TV plays, to run your daily plan, to provide support and to keep the service secure. We do not use your data for advertising or profiling.",
        ],
      },
      {
        heading: "Where it is stored",
        body: [
          "Our servers run on Google Cloud in the European Union (Frankfurt). The videos your TVs play are stored with Cloudflare R2. Purchases are handled by Apple. These providers process data on our behalf under their data-processing terms.",
        ],
      },
      {
        heading: "How long we keep it",
        body: [
          "Daily videos are deleted automatically after a few days. Your account and content are kept while your account exists; when you delete your account in the app, we delete them.",
        ],
      },
      {
        heading: "Your rights",
        body: [
          "Depending on where you live (for example under the GDPR or Türkiye's KVKK) you can ask to access, correct, export or delete your data, and object to its processing. You can delete your account in the app at any time, or write to us.",
        ],
      },
      {
        heading: "This website",
        body: ["dxpane.com uses no cookies, no analytics and no third-party trackers."],
      },
      {
        heading: "Children",
        body: ["dxpane is a tool for businesses and is not directed at children."],
      },
      {
        heading: "Contact",
        body: [`Questions or requests: ${CONTACT_EMAIL}. If we change this policy, we will update the date above.`],
      },
    ],
  },
  terms: {
    title: "Terms of Use",
    updated: "Last updated: 6 October 2026",
    intro: "These terms apply when you use the dxpane app and service. By using dxpane you agree to them.",
    sections: [
      {
        heading: "The service",
        body: [
          "dxpane lets you design menus and campaigns on your iPhone and play them on a compatible TV or monitor on the same network. Nothing is installed on the TV. Compatibility depends on your TV and network; please use the free trial to confirm your screens work.",
        ],
      },
      {
        heading: "Subscription and trial",
        body: [
          "dxpane is offered as an auto-renewing subscription purchased through the App Store, with a 7-day free trial for new subscribers. Payment is charged to your Apple ID; the subscription renews unless cancelled at least 24 hours before the end of the current period. You can manage or cancel it in your Apple ID settings. When the subscription ends, new plans stop playing.",
          "Apple's Standard License Agreement (EULA) also applies to the app.",
        ],
      },
      {
        heading: "Your content",
        body: [
          "You keep ownership of the text, prices and images you add. You are responsible for them — including that prices are correct and that you have the right to use any image you upload. You give us permission to process your content only to provide the service. Do not use dxpane for unlawful, misleading or offensive content.",
        ],
      },
      {
        heading: "Availability",
        body: [
          "We work hard to keep dxpane running, but the service is provided \"as is\" and we cannot guarantee it will be uninterrupted or that every TV will be supported. To the extent permitted by law, we are not liable for indirect losses such as lost sales.",
        ],
      },
      {
        heading: "Changes and ending",
        body: [
          "We may update these terms or the service; important changes will be announced in the app. You can stop using dxpane and delete your account at any time.",
        ],
      },
      {
        heading: "Contact",
        body: [`${CONTACT_EMAIL}`],
      },
    ],
  },
  support: {
    title: "Support",
    updated: "We usually reply within one business day.",
    intro: "Something not working, or a question about your subscription? We are here to help.",
    contactLabel: "Email support",
    sections: [
      {
        heading: "The app can't find my TV",
        body: [
          "Make sure your iPhone and the TV are on the same Wi-Fi network (not a guest network), the TV is switched on, and media sharing (DLNA / \"screen share\" / media renderer) is enabled in the TV's settings. Then scan again.",
        ],
      },
      {
        heading: "The TV stopped playing",
        body: [
          "If the TV was switched off or lost power, open dxpane and tap Play on the screen — it picks up your day where it should be.",
        ],
      },
      {
        heading: "Manage or cancel the subscription",
        body: [
          "Subscriptions are handled by Apple: open Settings → your name → Subscriptions → dxpane. Refunds are requested from Apple at reportaproblem.apple.com.",
        ],
      },
      {
        heading: "Delete your account",
        body: ["In the app: Settings → Account → Delete account. This removes your account, screens and content."],
      },
    ],
  },
};
