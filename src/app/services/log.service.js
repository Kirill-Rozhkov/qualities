import * as Sentry from "@sentry/react"

function init () {
Sentry.init({
    dsn: "https://2a77f4cec1af46df87f200e39340b671@o4505489050304512.ingest.sentry.io/4505489209688064",
    integrations: [new Sentry.BrowserTracing()],
    tracesSampleRate: 1.0
  });
}

function log (error) {
    Sentry.captureException(error)
}

const logger = {
init,
log
}

export default logger