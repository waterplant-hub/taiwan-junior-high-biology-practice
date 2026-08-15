type AnalyticsValue = string | number | boolean;

declare global {
  interface Window {
    gtag?: (
      command: "event",
      eventName: string,
      parameters?: Record<string, AnalyticsValue>,
    ) => void;
  }
}

export function trackPracticeEvent(
  eventName: "practice_start" | "practice_complete",
  parameters: {
    practice_mode: string;
    question_count: number;
  },
) {
  window.gtag?.("event", eventName, parameters);
}
