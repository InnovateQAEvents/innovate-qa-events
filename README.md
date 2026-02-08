# Innovate QA Events

The premier conference and events platform for **Quality Professionals and Engineering Leaders**. Practical, engineering-focused content where quality leaders connect, learn, and grow together.

🌐 **Live Site:** [innovateqaevents.github.io/innovate-qa-events](https://innovateqaevents.github.io/innovate-qa-events/)

---

## About

Innovate QA Events brings together QA professionals, engineering leaders, and innovators to share knowledge, build networks, and advance the discipline of quality. Through conferences, workshops, and meetups, we provide hands-on learning focused on modern testing practices, AI in QA, and practical strategies to elevate skills and careers.

### Who Is It For?

- **SDETs & DevOps** — Automation tools, strategies, AI-enabled test generation, DevTools and CI/CD best practices
- **Engineering Leaders** — Quality metrics, risk mitigation, AI Quality and LLM testing, hiring strategies for QE teams
- **QA Engineers** — Advanced test practices, AI-augmented testing, domain-specific testing methodologies
- **Software Testers** — Testing strategies, emerging trends, and hands-on workshops with industry experts

## Upcoming Events

| Event | Date | Location |
| --- | --- | --- |
| **Innovate QA Conference 2026** | June 5–6, 2026 | Hilton Garden Inn, Issaquah, WA |
| **Battle of AI Test Tools** | April 3, 2026 | AWS Builder Loft, San Francisco, CA |

## Tech Stack

- **Framework:** [Next.js 16](https://nextjs.org/) (App Router)
- **Language:** TypeScript
- **Styling:** [Tailwind CSS 4](https://tailwindcss.com/)
- **UI Components:** [Radix UI](https://www.radix-ui.com/) + [shadcn/ui](https://ui.shadcn.com/)
- **Deployment:** GitHub Pages

## Project Structure

```
├── app/                  # Next.js App Router pages
│   ├── page.tsx          # Homepage with countdown, speakers, venue, pricing
│   ├── about/            # About page
│   ├── events/[year]/    # Dynamic event pages by year (2024, 2025, 2026)
│   ├── speakers/[slug]/  # Individual speaker profiles
│   ├── meetups/          # Community meetup events
│   ├── battle-of-ai-test-tools/  # Battle of AI Test Tools event
│   ├── sponsor/          # Sponsorship information
│   ├── volunteer/        # Volunteer & speaker applications
│   └── ...               # Contact, privacy policy, diversity & inclusion, etc.
├── components/           # Reusable React components
│   ├── ui/               # shadcn/ui primitives (button, card, tabs, etc.)
│   ├── landing/          # Landing page cards (Event, Features, Speaker)
│   ├── navigation.tsx    # Site navigation
│   ├── footer.tsx        # Site footer
│   ├── hero-section.tsx  # Hero with countdown timer
│   ├── speakers-section.tsx
│   ├── schedule-section.tsx
│   ├── venue-section.tsx
│   └── ...
├── data/                 # JSON data files (speakers, events, schedule, meetups)
├── lib/                  # Utilities and constants
├── public/               # Static assets, manifest, robots.txt, sitemap
└── styles/               # Global CSS
```

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) 18+
- [pnpm](https://pnpm.io/) (recommended) or npm

### Installation

```bash
# Clone the repository
git clone https://github.com/InnovateQAEvents/innovate-qa-events.git
cd innovate-qa-events

# Install dependencies
pnpm install

# Start the development server
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) to view the site locally.

### Build

```bash
pnpm build
```

### Lint

```bash
pnpm lint
```

## Data-Driven Content

Event data, speakers, schedules, and meetups are managed via JSON files in the `data/` directory. To update content, edit the corresponding JSON file:

| File | Description |
| --- | --- |
| `data/events/2026.json` | Innovate QA 2026 event details |
| `data/speakers-2025.json` | Speaker profiles |
| `data/schedule-2025.json` | Conference schedule |
| `data/meetups.json` | Community meetup events |
| `data/volunteer-roles.json` | Volunteer & speaker roles |
| `data/site-config.json` | Global site configuration |

## Connect With Us

- 🌐 [Website](https://innovateqaevents.github.io/innovate-qa-events/)
- 💼 [LinkedIn](https://www.linkedin.com/company/innovateqa-events)
- 🐦 [X / Twitter](https://www.x.com/innovateqaevent)
- 📸 [Instagram](https://www.instagram.com/innovateqaevents/)
- 🎵 [TikTok](https://www.tiktok.com/@innovateqaevents)
- 📺 [YouTube](https://www.youtube.com/@InnovateQAEvents)
- ✉️ [info@innovateqaevents.com](mailto:info@innovateqaevents.com)

## License

© 2024–2026 Innovate QA Events. All Rights Reserved.
