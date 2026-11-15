# Security policy

LXD Integral Microcredentials for LearnDash is maintained by LXD Integral Learning Ltd. Security
reports are read by the maintainer and get priority over every other kind of work. The plugin is
maintained until at least November 2029 (see "Is this plugin maintained long term?" in the FAQ).

## Supported versions

Only the latest release published on WordPress.org receives security fixes. Sites receive it through
the normal WordPress update channel.

| Version | Supported |
|---|---|
| Latest release on WordPress.org | Yes |
| Older releases | No: update |

## Reporting a vulnerability

Please do not open a public GitHub issue or a public support-forum topic for a security problem.

1. **Preferred:** use GitHub's private vulnerability reporting for this repository:
   https://github.com/LXD-Integral/lxd-integral-microcredentials-for-learndash/security/advisories/new
   Only the maintainer can read it.
2. **Email:** security@lxdintegral.com, which reaches the maintainer directly.
3. **Alternative:** the WordPress.org plugins team at plugins@wordpress.org, naming this plugin
   (slug `lxd-integral-microcredentials-for-learndash`). They forward reports to the maintainer.

Researchers working through Patchstack or Wordfence are welcome to use any of these routes.

Include what you can of: the affected version, the steps or request that reproduce the issue, the
role needed (anonymous visitor, logged-in learner, administrator), and the impact you observed.

## What to expect

- Acknowledgement within one working day.
- A fix released as a patch version within seven days for anything exploitable without an
  administrator account, and within thirty days otherwise. The changelog names security fixes as
  "Security:" lines.
- A reply naming the fixed version, and credit in the changelog if you want it.
- If an issue exploitable by anonymous visitors cannot be fixed within seven days, the maintainer
  asks WordPress.org to close the plugin to new installs until it is.

## Scope

In scope: everything this repository ships (the plugin's PHP, the compiled block, the shortcode,
the admin screens, the uninstall handler) and its release workflows.

Out of scope: Open Badge Factory and CanCred Factory themselves (report to the provider), LearnDash,
WordPress core, and a site's hosting. A vulnerability that needs an existing administrator account
on the site is still welcome as a report; it is triaged as such.
