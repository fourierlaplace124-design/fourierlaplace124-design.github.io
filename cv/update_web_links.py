"""Refresh homepage CV URLs whenever the PDF content changes."""

import hashlib
import re
from pathlib import Path


root = Path(__file__).resolve().parents[1]
pdf_path = root / "assets/Zhixuan_Zhao_CV.pdf"
homepage_path = root / "index.html"
version = hashlib.sha256(pdf_path.read_bytes()).hexdigest()[:12]
pdf_url = f"assets/Zhixuan_Zhao_CV.pdf?v={version}"

pattern = re.compile(
    r'(?P<prefix>\b(?:href|data-src)=")assets/Zhixuan_Zhao_CV\.pdf'
    r'(?:\?[^"#]*)?(?=["#])'
)
html, count = pattern.subn(
    lambda match: match["prefix"] + pdf_url,
    homepage_path.read_text(encoding="utf-8"),
)
if not count:
    raise SystemExit("No homepage CV URLs found; the PDF version was not updated.")
homepage_path.write_text(html, encoding="utf-8")
print(f"Updated {count} CV URLs to version {version}.")
