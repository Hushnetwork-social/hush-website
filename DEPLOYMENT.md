# Hush Website Deployment

The website is deployed from this standalone repository with GitHub Actions.

## Release Tags

Deployment is triggered by tags matching:

```bash
Website-vMAJOR.MINOR.PATCH
```

Example:

```bash
git tag -a Website-v1.0.1 -m "Release Website v1.0.1"
git push origin Website-v1.0.1
```

Plain tags such as `v1.0.1` do not deploy the website.

## Workflows

- `.github/workflows/ci.yml`: runs on pushes and pull requests to `master`.
- `.github/workflows/cd.yml`: runs on `Website-v*.*.*` tags or manual dispatch.

The CD workflow:

1. installs dependencies with pnpm;
2. runs lint;
3. builds the Next.js standalone server;
4. builds and pushes a Docker image to GHCR;
5. SSHs into AWS Lightsail;
6. replaces the `HushNetworkWebSite` container.

## Docker Image

The workflow publishes:

```text
ghcr.io/hushnetwork-social/hush-website:latest
ghcr.io/hushnetwork-social/hush-website:vMAJOR.MINOR.PATCH
```

## Required GitHub Environment

Create this environment in the `hush-website` repository:

```text
HushServerNode AWS CD
```

The name is intentionally reused from the other deployment workflows so the operational convention
stays consistent.

## Required Secrets

Add these as environment secrets under `HushServerNode AWS CD`:

| Secret | Purpose |
|---|---|
| `GHCR_TOKEN` | GitHub token used to push the Docker image from Actions and pull it from AWS. Needs package read/write access for GHCR. |
| `AWS_SSH_PRIVATE_KEY` | Private SSH key used by GitHub Actions to connect to the Lightsail instance. |
| `AWS_HOST` | AWS Lightsail public IP or DNS name. |
| `AWS_SSH_USER` | SSH user on the Lightsail instance, normally `ubuntu`. |

## Optional GHCR Username

Add this as either a repository/environment secret or an environment variable if the GHCR token
belongs to a different GitHub user than the workflow actor. A secret is fine.

| Name | Purpose |
|---|---|
| `GHCR_USERNAME` | GitHub username to use for `docker login ghcr.io`. Defaults to the workflow actor. |

## AWS Prerequisites

The Lightsail instance must already have:

- Docker installed and running;
- host NGINX configured for `hushnetwork.social` and `www.hushnetwork.social`;
- SSL certificates installed;
- NGINX proxying the website domain to `http://127.0.0.1:3000`;
- outbound access to `ghcr.io`.

The deployed container is named:

```text
HushNetworkWebSite
```

It binds:

```text
127.0.0.1:3000 -> container port 80
```

## Contact Form Email Secrets

The website contact form posts to `/api/contact` inside the Next.js server. The destination email is
not exposed to the browser. Configure these GitHub environment secrets under `HushServerNode AWS CD`
before deploying the contact form:

| Secret | Purpose |
|---|---|
| `CONTACT_TO_EMAIL` | Private recipient email for HushVoting! requests. Set this to Paulo's destination address. |
| `CONTACT_FROM_EMAIL` | Sender address used by the SMTP provider, for example `noreply@hushnetwork.social`. |
| `CONTACT_SMTP_HOST` | SMTP server hostname. |
| `CONTACT_SMTP_PORT` | SMTP server port, usually `587` for STARTTLS or `465` for implicit TLS. |
| `CONTACT_SMTP_SECURE` | Set to `true` for implicit TLS on port `465`; otherwise `false`. |
| `CONTACT_SMTP_USER` | SMTP username, if required by the provider. |
| `CONTACT_SMTP_PASS` | SMTP password or app password, if required by the provider. |

The contact form uses:

- required requester email validation;
- required message body validation;
- a hidden honeypot field;
- an HTTP-only cooldown cookie after successful submission;
- in-memory IP-window throttling inside the website container.

## Verification

After deployment:

```bash
curl -I https://www.hushnetwork.social
curl -I https://hushnetwork.social
```

On the server:

```bash
sudo docker ps --filter "name=HushNetworkWebSite"
sudo docker logs HushNetworkWebSite --tail 100
```
