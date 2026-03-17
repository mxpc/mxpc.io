set shell := ["bash", "-cu"]

default:
  @just --list

install:
  yarn install --frozen-lockfile --non-interactive

dev:
  ASTRO_TELEMETRY_DISABLED=1 yarn dev

typecheck:
  ASTRO_TELEMETRY_DISABLED=1 yarn typecheck

build:
  ASTRO_TELEMETRY_DISABLED=1 yarn build

preview:
  ASTRO_TELEMETRY_DISABLED=1 yarn preview

ci: install typecheck build
