<p align="center">
  <img src="https://raw.githubusercontent.com/skalfa-framework/skalfa/main/logo/logo-skalfa-full.png" alt="Skalfa Logo" width="300" />
</p>

# @skalfa/skalfa-queue

> Redis-backed background task queue and multi-worker utility extension for Skalfa backend services.

---

## About this Package

This package is part of the **Skalfa Framework**, a premium development ecosystem designed to build high-performance, modular web applications and APIs.

### Usage Scope & Standalone Status
> 🔒 **Skalfa Ecosystem Integration:** This package is designed to run **integrated within the Skalfa ecosystem** (such as Skalfa API or Skalfa App). It relies on the global service registry and core framework abstractions to operate.

For more details, visit the official documentation at **[skalfa.sejedigital.com](https://skalfa.sejedigital.com)**.

---

## Installation

You can install this package using your preferred package manager:

```bash
# Using npm
npm install @skalfa/skalfa-queue

# Using bun
bun add @skalfa/skalfa-queue
```

---

## Pre-installed Dependencies

The following key dependencies are packaged and managed within this project:

| Dependency | Scope | Version |
| :--- | :--- | :--- |
| `@skalfa/skalfa-redis` | runtime | `file:../skalfa-redis` |
| `@skalfa/skalfa-api-core` | runtime | `file:../skalfa-api-core` |
| `@types/node` | development | `^26.0.0` |
| `typescript` | development | `^6.0.3` |

---

## License

This package is licensed under the **MIT License**. For full license text, see the [LICENSE](LICENSE) file.
