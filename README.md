# Zhixuan Zhao — personal homepage

A small, static academic homepage. No build step or JavaScript dependencies.

## Preview

Open `index.html` directly, or run this command from the repository directory:

```bash
python3 -m http.server 8000 --bind 127.0.0.1
```

Then visit `http://127.0.0.1:8000` on the same machine.

## Update

- `index.html`: biography, publications, research experience, education, and skills.
- `styles.css`: layout, responsive styles, and colors. Purple is the primary accent;
  Princeton-related affiliations use orange, with a darker orange for readable text.
- `assets/profile.jpg`: original portrait, currently about 13 MB. A smaller export
  would improve first-load performance; the original is retained as supplied.
- `assets/Wechat.jpg`: existing WeChat contact image.

Paper status and ongoing research dates are maintained manually. The NeurIPS
entry describes a submission, not an acceptance. Add CV and project-code links
when those resources are available.

Changes are local until committed and pushed to the branch configured for GitHub
Pages. This repository does not include a custom deployment workflow.
