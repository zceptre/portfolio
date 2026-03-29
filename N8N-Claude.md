# N8N-Claude Setup

Tools and skills for building n8n workflows with Claude Code.

---

## Installed Skills (`~/.claude/skills/`)

Seven Claude Code skills from [czlonkowski/n8n-skills](https://github.com/czlonkowski/n8n-skills) — they activate **automatically** based on your query:

| Skill | Activates When |
|---|---|
| `n8n-expression-syntax` | Writing `{{}}` expressions, accessing `$json` / `$node` |
| `n8n-mcp-tools-expert` | Searching for nodes, validating configs, accessing templates |
| `n8n-workflow-patterns` | Creating workflows, connecting nodes, designing automation |
| `n8n-validation-expert` | Debugging validation errors, fixing workflow issues |
| `n8n-node-configuration` | Configuring nodes, setting up AI agent workflows |
| `n8n-code-javascript` | Writing JS in Code nodes, using `$helpers`, handling webhook data |
| `n8n-code-python` | Writing Python in Code nodes (note: no external libraries) |

---

## MCP Server (`~/.claude/mcp.json`)

[czlonkowski/n8n-mcp](https://github.com/czlonkowski/n8n-mcp) — gives Claude direct access to n8n's 1,396+ node docs, workflow templates, and (with API credentials) live workflow management.

### Configuration

File: `~/.claude/mcp.json`

```json
{
  "mcpServers": {
    "n8n-mcp": {
      "command": "npx",
      "args": ["-y", "n8n-mcp"],
      "env": {
        "N8N_API_URL": "https://n8n.awtomasyon.com/api/v1",
        "N8N_API_KEY": "YOUR_N8N_API_KEY_HERE"
      }
    }
  }
}
```

### Required: Add Your API Key

1. Open your n8n instance → **Settings → API**
2. Create an API key
3. Replace `YOUR_N8N_API_KEY_HERE` in `~/.claude/mcp.json`
4. Restart Claude Code

### What You Get

**Without API key** (read-only, works now):
- Search all 1,396+ n8n nodes and their documentation
- Browse 2,709 workflow templates
- Validate node configurations offline

**With API key** (full access):
- List, create, update, delete workflows on your n8n instance
- Execute and manage workflow runs
- Access credentials (names only, not secrets)

---

## Your n8n Endpoint

- Instance: `https://n8n.awtomasyon.com`
- Portfolio chat webhook: `https://n8n.awtomasyon.com/webhook/portfolio-chat`

---

## Safety

> **Never edit production workflows directly with AI.**
> Always duplicate → test in dev → validate → promote to production.

---

## Quick Reference

```
# Search for a node
"Find me the Slack node in n8n"

# Build a workflow
"Build a webhook → OpenAI → Slack notification workflow"

# Fix a validation error
"Why is my HTTP Request node failing validation?"

# Write a Code node
"Write a Code node that formats webhook data as a table"
```
