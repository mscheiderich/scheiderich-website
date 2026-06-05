Create a new file called CLAUDE.md in the project root with 
the following content:

# Scheiderich Agency — Claude Code Instructions

Before starting any task, read PROJECT_STATUS.md in this folder.
It contains all agency info, design tokens, page statuses, Apps Script
URLs, sheet structure, compliance rules, and pending tasks.

## Critical Rules
- All changes delivered as targeted edits — never rewrite full files
- Every session ends with git push to GitHub
- All DNS changes in Cloudflare only — never GoDaddy  
- Never use Allstate trademarks, slogans, or "You're in good hands"
- Legal pages (privacy-policy.html, terms-of-use.html, disclaimer.html)
  must be updated any time data collection or third-party tools change
- Google Drive MCP intercepts filesystem queries — specify 
  "local project folder" when accessing local files

## Design Tokens
- --navy: #1e3148  
- --orange: #d9682a  
- --bg: #f6f4f1  
- Fonts: Lora (headings) + DM Sans (body)

## Deployment
Push to GitHub → cPanel Git Version Control → Pull

Commit with message and push at end of every session.

Do not commit yet — just create the file.