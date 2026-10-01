# KOVA OS — Legacy Public Site / Support Layer

This repository contains older public-site, redirect, and documentation work for KOVA OS.

## Canonical architecture

KOVA OS is one coordinated system, not separate competing builds.

- **Canonical orchestration hub:** `Kathrynhiggs21/Kova-ai-SYSTEM`
- **Canonical repository map:** `docs/architecture/KOVA_REPOSITORY_MAP.md` in the orchestration hub
- **Canonical domain:** `kovaos.com`
- **Primary web implementation:** `Kathrynhiggs21/kovaos-site`
- **Disabled assistant/application migration source:** `Kathrynhiggs21/kova-ai`

Historical references in this repository that name a Manus-managed repository or another component as the "Primary Repo" are superseded by the canonical repository map unless an explicit migration is recorded there.

## Role of this repository

Preserve useful public-site and documentation material, migrate it into the active web stack when appropriate, and avoid creating a second KOVA website or orchestration layer.

For cross-repository work, read this repository's `AGENTS.md` and then the orchestration hub's `AGENTS.md` and `docs/architecture/KOVA_REPOSITORY_MAP.md`.

## Validation

The CircleCI configuration checks `script.js` syntax and the required static source files. It does not establish production route or domain readiness. The historical Manus redirect is preserved until the owner verifies the canonical production cutover.
