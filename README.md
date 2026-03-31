# mrrz.dev — Terminal Portfolio

A terminal-style developer portfolio for **Son Morris Sasi** — Automation Developer based in the Philippines.

Live at **[mrrz.dev](https://www.mrrz.dev/)**

---

## Features

### Terminal Interface
- Type commands to navigate — works like a real developer terminal in the browser
- Command autocomplete dropdown when typing `/`
- Click commands in the dropdown or navigation panel to run instantly
- Command history with arrow keys
- Dark / light theme toggle (`/dark`, `/light`) — applies silently
- Minimizable terminal — docks to bottom of screen (yellow traffic light)
- Back button and scroll-to-top button in the output area

### Commands
| Command | Description |
|---|---|
| `/about` | Who I am and what I do |
| `/experience` | Work history |
| `/projects` | Projects I've shipped |
| `/skills` | Full technical stack |
| `/now` | What I'm currently working on |
| `/uses` | My tools and daily setup |
| `/hire` | Contact form — collects name, email, project |
| `/resume` | Opens printable 1-page resume |
| `/chat` | Chat with AI (powered by Groq / Llama 3.3) |
| `/contact` | Ways to reach me |
| `/dark` | Switch to dark theme |
| `/light` | Switch to light theme |
| `/clear` | Reset the terminal |
| `/help` | List all commands |

### AI Chat (`/chat`)
- Conversational AI that responds as Morris
- Powered by **Groq (llama-3.3-70b)** via n8n webhook
- Session memory — history preserved within the page session until `/clear` or refresh
- Quick command chips inside chat for easy navigation
- Typing a `/command` in chat exits chat and runs it

### `/hire` Contact Form
- Multi-step terminal form: name → email → project description
- Fires webhook to **n8n** → sends email via **Resend API**
- Shows success immediately (webhook fires in background)
- Email includes visitor name, email, message, IP, country, timestamp

---

## Stack

| Layer | Tech |
|---|---|
| Frontend | Single `index.html` — vanilla JS, no frameworks |
| Fonts | JetBrains Mono, Press Start 2P |
| AI backend | n8n (self-hosted on Render) + Groq (llama-3.3-70b) |
| Email | Resend API |
| Hosting | GitHub Pages + Vercel (custom domain: mrrz.dev) |
| Resume | `resume.html` — print-to-PDF, A4, no browser headers |

---

## Local Development

```bash
# Serve locally
node serve.mjs
# → http://localhost:3000
```

---

## Project Structure

```
portfolio-main/
├── index.html      # Entire portfolio — all styles and JS inline
├── resume.html     # Printable 1-page resume
├── serve.mjs       # Local dev server
└── brand_assets/   # Logo and images
```

---

## Contact

- **Email:** morris.dev31@gmail.com
- **GitHub:** [github.com/zceptre](https://github.com/zceptre)
- **Upwork:** [upwork.com/freelancers/~016110c8b7153e5e76](https://www.upwork.com/freelancers/~016110c8b7153e5e76)
