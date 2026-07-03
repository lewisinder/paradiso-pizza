# Design Skills — What's Installed and How to Reinstall

This template ships with two design skills **already installed** in
`.claude/skills/`, so every copy of the folder has them with no setup:

| Skill | What it does | Source |
| --- | --- | --- |
| `ui-ux-pro-max` | Design-system intelligence: styles, colour palettes, font pairings, UX guidelines, accessibility and anti-pattern checks | https://github.com/nextlevelbuilder/ui-ux-pro-max-skill |
| `frontend-design` | Distinctive visual direction, typography, copy and layout critique — avoids templated AI-looking design | https://github.com/anthropics/skills/tree/main/skills/frontend-design |

`.claude/` is in `.gitignore`, so the skills travel with folder copies but never get
committed to a client's repo.

## Reinstalling or updating (paste to the agent if ever needed)

> Install these two design skills into this project's `.claude/skills/` folder:
>
> **1. frontend-design** (a folder inside the anthropics/skills repo):
> ```bash
> git clone --depth 1 https://github.com/anthropics/skills.git /tmp/anthropic-skills
> mkdir -p .claude/skills
> cp -R /tmp/anthropic-skills/skills/frontend-design .claude/skills/frontend-design
> rm -rf /tmp/anthropic-skills
> ```
>
> **2. ui-ux-pro-max** (the repo ships a ready-made skill folder at
> `.claude/skills/ui-ux-pro-max`):
> ```bash
> git clone --depth 1 https://github.com/nextlevelbuilder/ui-ux-pro-max-skill.git /tmp/uipromax
> cp -R /tmp/uipromax/.claude/skills/ui-ux-pro-max .claude/skills/ui-ux-pro-max
> rm -rf /tmp/uipromax
> ```
> *(Official alternative: `npm install -g uipro-cli` then `uipro init --ai claude`
> from the project root — see the repo's README.)*
>
> Verify both folders contain a `SKILL.md`, then confirm the skills are available.

## Marketplace alternative (Claude Code slash commands)

```
/plugin marketplace add nextlevelbuilder/ui-ux-pro-max-skill
/plugin install ui-ux-pro-max@ui-ux-pro-max-skill

/plugin marketplace add anthropics/skills
/plugin install frontend-design   # pick the frontend-design entry from the list
```
