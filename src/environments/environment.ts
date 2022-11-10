
type Environment = {
    sentry_dsn: string
    production: boolean
    osc_enabled: boolean
    web_url: string
    api_url: string
    mixpanel_id: string
}

export let environment: Environment = {
    sentry_dsn: "",
    production: false,
    osc_enabled: false,
    web_url: "",
    api_url: "",
    mixpanel_id: "",
}
