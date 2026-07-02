# Security Policy

## Supported Versions

We currently support the following versions of the project with security updates:

| Version | Supported          |
| ------- | ------------------ |
| v1.0.x  | :white_check_mark: |
| < v1.0  | :x:                |

## Reporting a Vulnerability

We take the security of this project very seriously. If you discover a security vulnerability within this project, please report it to us by following these steps:

1. **Do not open a public issue.** This gives attackers an opportunity to exploit the vulnerability before we can release a fix.
2. Create an advisory via the [GitHub Security Advisory form](https://github.com/juninmd/roadmap-developer/security/advisories/new) to privately report the issue to the maintainers.
3. Provide a detailed description of the vulnerability, including:
   - The steps to reproduce the issue.
   - The potential impact of the vulnerability.
   - Any proof-of-concept code or screenshots.

We will acknowledge your report within 48 hours and provide an estimated timeline for a fix. We will keep you updated on our progress and notify you once the fix is released.

## Security Best Practices

- We enforce HTTPS everywhere.
- Dependencies are automatically updated using Dependabot.
- Secrets are never committed to the repository and are managed via environment variables.
- We run regular security audits and dependency scanning using GitHub Actions.
