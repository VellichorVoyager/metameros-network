# Security Policy

## Supported Versions

This project is maintained on a best-effort basis. Security fixes are applied to the latest code on the `main` branch.

| Version                                       | Supported                  |
| --------------------------------------------- | -------------------------- |
| Latest `main` branch                          | ✅ Supported                |
| Older commits, forks, or modified deployments | ❌ Not officially supported |

## Reporting a Vulnerability

Please **do not open a public GitHub issue** for security vulnerabilities.

If you discover a vulnerability, use GitHub’s private vulnerability reporting or security advisory workflow when available. If private reporting is not available, open a minimal public issue requesting a secure contact channel, but do **not** include exploit details, credentials, tokens, screenshots of private data, or proof-of-concept payloads in the public issue.

A good report should include:

* A clear description of the issue
* Affected file, route, endpoint, or component
* Steps to reproduce
* Expected impact
* Suggested fix, if known
* Whether the issue affects local-only deployments, LAN deployments, or remotely exposed deployments

## Scope

Security reports are welcome for issues involving this repository’s application code, including:

* Gateway host validation
* SSRF-style request handling
* Authentication/session handling
* Cookie configuration
* API route authorization
* Reboot or WiFi mutation controls
* Unsafe dependency vulnerabilities
* Accidental exposure of sensitive gateway data
* Build, CI, or dependency configuration issues

## Out of Scope

The following are out of scope for this project:

* Vulnerabilities in T-Mobile, Arcadyan, or carrier-managed gateway firmware
* Attacks against carrier infrastructure
* Social engineering
* Physical attacks
* Denial-of-service testing against public services
* Issues requiring access to someone else’s network, gateway, account, or credentials
* Automated scanning that disrupts availability
* Reports based only on outdated dependencies without a practical exploit path or fix recommendation

## Deployment Safety Expectations

This project should be treated as a sensitive local admin interface.

Recommended safe deployment practices:

* Run the app on a trusted local machine or private LAN only
* Do not expose the dashboard directly to the public internet
* Prefer Tailscale, WireGuard, or another private network for remote access
* Keep write actions disabled unless intentionally needed
* Use strong gateway credentials
* Keep dependencies updated
* Review Dependabot alerts before merging dependency updates

## Responsible Disclosure

Please give maintainers a reasonable opportunity to investigate and fix reported issues before public disclosure.

Expected response timeline:

* Initial acknowledgement: best effort within 7 days
* Triage/update: best effort within 30 days
* Fix timeline: depends on severity, complexity, and maintainer availability

## Safe Harbor

Good-faith security research is welcome when it is conducted responsibly.

To remain within safe harbor:

* Do not access, modify, delete, or exfiltrate data that is not yours
* Do not disrupt service availability
* Do not attempt to access third-party gateways, accounts, or networks
* Do not publicly disclose vulnerability details before maintainers have had time to respond
* Stop testing and report the issue if you encounter sensitive data

Reports made in good faith and within this policy will be treated as helpful contributions to the project.
