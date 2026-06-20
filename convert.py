#!/usr/bin/env python3
"""Convert specific static sections of the original index.html into JSX component files."""
import re, sys
from bs4 import BeautifulSoup, NavigableString, Tag

SRC = '/mnt/user-data/uploads/1781821093450_index.html'
html = open(SRC).read()
# isolate body
body = html[html.index('<body>')+6 : html.index('</body>')]
soup = BeautifulSoup(body, 'html.parser')

# SVG / HTML void elements that must self-close in JSX
VOID = {'area','base','br','col','embed','hr','img','input','link','meta','param','source','track','wbr',
        'path','circle','line','polyline','polygon','rect','stop','use','ellipse'}

# attribute renames
RENAME = {
    'class':'className','for':'htmlFor','tabindex':'tabIndex','readonly':'readOnly',
    'maxlength':'maxLength','minlength':'minLength','autocomplete':'autoComplete',
    'crossorigin':'crossOrigin','referrerpolicy':'referrerPolicy','allowfullscreen':'allowFullScreen',
    'stroke-width':'strokeWidth','stroke-linecap':'strokeLinecap','stroke-linejoin':'strokeLinejoin',
    'stroke-dasharray':'strokeDasharray','stroke-opacity':'strokeOpacity','fill-rule':'fillRule',
    'clip-rule':'clipRule','stroke-miterlimit':'strokeMiterlimit','xmlns:xlink':'xmlnsXlink',
    'fill-opacity':'fillOpacity','text-anchor':'textAnchor','font-size':'fontSize','font-weight':'fontWeight',
    'viewbox':'viewBox','preserveaspectratio':'preserveAspectRatio','gradientunits':'gradientUnits',
    'gradienttransform':'gradientTransform','spreadmethod':'spreadMethod','stop-color':'stopColor',
    'stop-opacity':'stopOpacity','clippath':'clipPath','clip-path':'clipPath','xlink:href':'xlinkHref',
    'stroke-dashoffset':'strokeDashoffset',
}

def camel_style(style_str):
    """Convert a CSS style string to a JSX style object literal."""
    parts = [p.strip() for p in style_str.split(';') if p.strip()]
    out = []
    for p in parts:
        if ':' not in p: continue
        k, v = p.split(':', 1)
        k = k.strip(); v = v.strip()
        # camelCase the property
        if k.startswith('--'):
            key = f"'{k}'"
        else:
            key = re.sub(r'-([a-z])', lambda m: m.group(1).upper(), k)
        v = v.replace("'", "\\'")
        out.append(f"{key}: '{v}'")
    return '{' + ', '.join(out) + '}'

def conv_attrs(tag):
    attrs = []
    for k, v in tag.attrs.items():
        if k == 'style' and isinstance(v, str):
            attrs.append(f"style={{{camel_style(v)}}}")
            continue
        nk = RENAME.get(k, k)
        if isinstance(v, list):
            v = ' '.join(v)
        # boolean-ish
        if v == '':
            attrs.append(f'{nk}=""')
        else:
            v2 = v.replace('{','{"{"}').replace('}','{"}"}') if False else v
            # escape quotes
            if '"' in v:
                attrs.append(f"{nk}={{'{v}'}}")
            else:
                attrs.append(f'{nk}="{v}"')
    return (' ' + ' '.join(attrs)) if attrs else ''

def render(node, indent=0):
    pad = '  ' * indent
    if isinstance(node, NavigableString):
        text = str(node)
        if not text.strip():
            return ''
        # escape braces and the HTML entities are already decoded by bs4
        text = text.replace('{','{"{"}').replace('}','{"}"}')
        # bs4 decoded &lt;/&gt; to raw < > which break JSX as text — re-escape
        text = text.replace('<','{"<"}').replace('>','{">"}')
        return pad + text.strip() + '\n'
    if not isinstance(node, Tag):
        return ''
    name = node.name
    attrs = conv_attrs(node)
    children = [c for c in node.children]
    has_real = any((isinstance(c, Tag)) or (isinstance(c, NavigableString) and c.strip()) for c in children)
    if name in VOID or not has_real:
        if not has_real and name not in VOID:
            # element with no children -> self close is fine
            return f"{pad}<{name}{attrs} />\n"
        return f"{pad}<{name}{attrs} />\n"
    out = f"{pad}<{name}{attrs}>\n"
    for c in children:
        out += render(c, indent+1)
    out += f"{pad}</{name}>\n"
    return out

def section_by_id(sid):
    return soup.find(id=sid)

def section_after_comment(marker):
    # find <section> whose preceding comment contains marker
    for el in soup.find_all('section'):
        prev = el.find_previous(string=lambda s: isinstance(s, NavigableString) and marker in s)
        if prev:
            return el
    return None

def emit_component(comp_name, node, client=False):
    inner = render(node, indent=2).rstrip('\n')
    directive = '"use client";\n\n' if client else ''
    hook = ''
    body_jsx = inner
    if client:
        hook = 'import { useReveal } from "@/lib/useReveal";\n'
    code = f'''{directive}{hook}export default function {comp_name}() {{
  return (
{inner}
  );
}}
'''
    path = f'src/components/sections/{comp_name}.tsx'
    open(path, 'w').write(code)
    print(f"  wrote {path} ({len(code)} bytes)")

if __name__ == '__main__':
    # Static, presentational sections -> server components
    targets = [
        ('CoursesSection', section_by_id('courses')),
        ('LearningPath',   section_after_comment('LEARNING PATH')),
        ('FormatSection',  section_after_comment('FORMAT')),
        ('SubjectsSection',section_after_comment('SUBJECTS')),
        ('StatsSection',   section_after_comment('STATS')),
        ('CorporateSection',section_by_id('corporate')),
        ('DiscoverSection',section_after_comment('DISCOVER')),
        ('BrowseSection',  section_after_comment('BROWSE')),
        ('RequirementsSection', section_after_comment('REQUIREMENTS')),
        ('CertificationsSection', section_by_id('certifications')),
        ('LocationsSection', section_by_id('locations')),
        ('AboutSection',   section_by_id('about')),
    ]
    print("Generating static sections:")
    for name, node in targets:
        if node is None:
            print(f"  !! MISSING: {name}")
            continue
        emit_component(name, node)
    # footer
    foot = soup.find('footer')
    emit_component('SiteFooter', foot)

