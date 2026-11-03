"""Redraw the WordPress.org banner with the new plugin name, keeping the
original geometry: navy two-tone diagonal background, badge mark on the left
(copied pixel-for-pixel from the previous banner), Inter type on the right."""
import sys
from collections import Counter
from PIL import Image, ImageDraw, ImageFont

SRC = sys.argv[1]            # existing 1544x500 banner
OUT_DIR = sys.argv[2]
FONT = '/Users/lxd/Library/Fonts/Inter.ttc'
W, H = 1544, 500
A, B = (1, 12, 77), (1, 16, 108)
CYAN, WHITE, EYEBROW = (3, 218, 255), (255, 255, 255), (196, 208, 240)

old = Image.open(SRC).convert('RGB')
# Subtitle colour from the old banner: most common non-background colour in the subtitle rows.
sub = Counter(p for y in range(260, 360) for x in range(500, 1500)
              for p in [old.getpixel((x, y))] if p not in (A, B) and sum(p) > 400)
SUBTITLE = sub.most_common(1)[0][0] if sub else WHITE

# Background at 2x for a clean anti-aliased diagonal, boundary (957,0) -> (772,500).
S = 2
bg = Image.new('RGB', (W * S, H * S), A)
ImageDraw.Draw(bg).polygon([(957 * S, 0), (W * S, 0), (W * S, H * S), (772 * S, H * S)], fill=B)
im = bg.resize((W, H), Image.LANCZOS)

# Badge mark: the left 500 px of the old banner sit entirely on colour A.
im.paste(old.crop((0, 0, 500, H)), (0, 0))

def font(index, size):
    return ImageFont.truetype(FONT, size, index=index)

BOLD, SEMI, REG = 14, 12, 0
d = ImageDraw.Draw(im)
x = 510

# Eyebrow brand line, then the product name in the old banner's two-line pattern.
y = 58
d.text((x, y), 'LXD Integral', font=font(SEMI, 46), fill=EYEBROW)
y += 66
d.text((x, y), 'Microcredentials', font=font(BOLD, 92), fill=WHITE)
y += 104
d.text((x, y), 'for LearnDash', font=font(BOLD, 92), fill=CYAN)
y += 132
for line in ('Verifiable Open Badges from Open Badge Factory or CanCred,',
             'issued automatically when learners complete LearnDash items.'):
    d.text((x, y), line, font=font(REG, 32), fill=SUBTITLE)
    y += 44

im.save(f'{OUT_DIR}/banner-1544x500.png', optimize=True)
im.resize((772, 250), Image.LANCZOS).save(f'{OUT_DIR}/banner-772x250.png', optimize=True)
print('subtitle colour', SUBTITLE, 'last y', y)
